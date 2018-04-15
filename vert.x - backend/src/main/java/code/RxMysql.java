package code;

import code.Models.*;
import com.github.davidmoten.rx.jdbc.Database;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;
import rx.Observable;
import rx.observables.GroupedObservable;

import java.sql.Date;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/*
DAO
    JDBC Couplé avec RxJava, permet une gestion asynchrone de la base de données
    ensemble des méthode permettant d'interagir avec la base de données.
    Regroupé par models.
 */
public class RxMysql {

    private static Database db = Database.from("jdbc:mysql://vps239158.ovh.net/fuji?"
            + "user=vertx&password=envyus&useSSL=false");
    private static Database adb = db.asynchronous();

    /* USERS
     * getUsers -> all users
     * findUserById(id) -> user
     * findUserByEmail(id) -> user
     * findUserByToken(token) -> user
     * insertUser(user) -> id generated
     * insertMoney(id) -> void
     */
    public static Observable<User> getUsers() {
        return adb.select("select id, username, email, password_digest, money, is_admin, zone_id from User")
                .autoMap(User.class);
    }

    public static Observable<User> findUserById(int id) {
        return adb.select("select id, username, email, password_digest, money, is_admin, zone_id from User where id = ?")
                .parameter(id)
                .autoMap(User.class)
                .first();
    }

    public static Observable<User> findUserByEmail(String email) {
        return adb.select("select id, username, email, password_digest, money, is_admin, zone_id from User where email = ?")
                .parameter(email)
                .autoMap(User.class);
    }

    public static Observable<User> findUserByToken(String token) {
        return adb.select("select id, username, email, password_digest, money, is_admin, zone_id from User where token = ?")
                .parameter(token)
                .autoMap(User.class);
    }

    public static Observable<Integer> insertUser(User user, String token) {
        return adb.update("insert into User(username, email, password_digest, money, zone_id, token)"
                + " values(?,?,?,?,?,?)")
                .parameters(user.getUsername(), user.getEmail(), user.getHashPassword(), user.getMoney(), user.getZone_id(), token)
                .returnGeneratedKeys()
                .getAs(Integer.class);
    }

    public static Observable<Integer> insertToken(User user, String token) {
        return adb.update("update User set token = ? where id = ?")
                .parameters(token, user.getId())
                .count();
    }

    public static Observable<Integer> insertMoney(int user_id) {
        return adb.update("update User set money = money + 500 where id = ?")
                .parameter(user_id)
                .count();
    }

    /* PRODUCT
     * getProducts -> all product
     */
    public static Observable<JsonObject> getProducts() {
        return adb.select("select p.id, p.nom, p.prix, c.nom, c.id from Product p inner join Categorie c on p.categorie_id = c.id")
                .autoMap(Product.class)
                .map(Product::toJson);
    }

    /* ORDER
     * getOrders        -> renvoie les commandes
     * findOrdersByUser -> renvoie les commandes d'un utilisateur
     * newOrder         -> insert & renvoie commande
     * findOrderById    -> renvoie une commande en particulier
     */
    public static Observable<GroupedObservable<Object, LineOrder>> getOrders() {
        return adb.select("select op.order_id, op.product_id, op.quantity, o.user_id, o.created_at from Order_products op inner join `Order` o on o.id = op.order_id")
                .autoMap(LineOrder.class)
                .groupBy(lineOrder -> lineOrder.getOrder_id());
    }

    public static Observable<GroupedObservable<Object, LineOrder>> findOrdersByUser(int user_id) {
        return adb.select("select op.order_id, op.product_id, op.quantity, o.user_id, o.created_at from Order_products op inner join `Order` o on o.id = op.order_id where o.user_id = ?")
                .parameter(user_id)
                .autoMap(LineOrder.class)
                .groupBy(lineOrder -> lineOrder.getOrder_id());
    }

    public static void newOrder(Order order) {
        // On ajoute la nouvelle commande et on recupère l'id
        Observable<Integer> id = adb.update("insert into `Order`(`created_at`, `user_id`) values(?,?)")
                .parameters(Date.valueOf(LocalDate.now()).toString(), order.getUser_id())
                .returnGeneratedKeys()
                .getAs(Integer.class);
        // Puis on se sert de celui-ci pour ajouter les produits liés à cette commande
        Observable<Integer> order_products_ids = adb.update("insert into Order_products(order_id, product_id, quantity) values(?,?,?)")
                .dependsOn(id)
                .parameters(order.getLinesAsParameter(id.toBlocking().first()).stream().toArray(Integer[]::new))
                .returnGeneratedKeys()
                .getAs(Integer.class);
        // enfin on enleve le prix que cette commande à couté à l'utilisateur
        adb.update("update User set money = money - ? where id = ?")
                .parameters(order.getPrix(), order.getUser_id())
                .dependsOn(order_products_ids)
                .count()
                .subscribe();
    }

    public static Observable<LineOrder> findOrderById(int id) {
        return adb.select("select op.order_id, op.product_id, op.quantity, o.user_id, o.created_at from Order_products op inner join `Order` o on o.id = op.order_id where o.id = ?")
                .parameter(id)
                .autoMap(LineOrder.class);
    }

    /* ZONES
     * getZones -> renvoie les zones
     */
    public static Observable<Zone> getZones() {
        return adb.select("select id, nom from Zone")
                .autoMap(Zone.class);
    }

    /* CATEGORIES
     * getCategorie -> renvoie les categories
     */
    public static Observable<Categorie> getCateogries() {
        return adb.select("select id, nom from Categorie")
                .autoMap(Categorie.class);
    }


}
