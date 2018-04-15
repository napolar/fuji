package code;

import code.Controllers.*;
import io.vertx.core.http.HttpMethod;
import io.vertx.ext.web.Route;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.AuthHandler;
import io.vertx.ext.web.handler.BodyHandler;
import io.vertx.ext.web.handler.CorsHandler;
import io.vertx.ext.web.handler.StaticHandler;

import java.util.HashSet;
import java.util.Set;

public class MainRouter {
    Router router;

    public MainRouter(Router router) {
        this.router = router;
        this.router.route().handler(BodyHandler.create()); // afin de lire le body des requêtes
        this.allowCORS(router); // accepte les requêtes CORS (Cross Domain)
        router.route("/static/*").handler(StaticHandler.create("static").setCachingEnabled(false)); // On sert les assets de manière statique
        this.authMiddleware(); // Middleware : charge l'utilisateur courant dans current_user
        this.fillRoutes(); // On charge ensuite les routes
    }

    public Router getPrimitiveRouter() {
        return this.router;
    }

    public void allowCORS(Router router) {
        // 1 - on définit les différents types de headers accepté
        Set<String> allowedHeaders = new HashSet<>();
        allowedHeaders.add("x-requested-with");
        allowedHeaders.add("Access-Control-Allow-Origin");
        allowedHeaders.add("origin");
        allowedHeaders.add("Content-Type");
        allowedHeaders.add("accept");
        allowedHeaders.add("X-PINGARUNER");
        allowedHeaders.add("Authorization"); // <- token
        // 2 - ainsi que les différentes méthode que l'on va utiliser
        Set<HttpMethod> allowedMethods = new HashSet<>();
        allowedMethods.add(HttpMethod.GET);
        allowedMethods.add(HttpMethod.POST);
        allowedMethods.add(HttpMethod.OPTIONS);
        allowedMethods.add(HttpMethod.DELETE);
        allowedMethods.add(HttpMethod.PATCH);
        allowedMethods.add(HttpMethod.PUT);
        // 3 - et on les applique dans notre router
        router.route().handler(CorsHandler.create("*").allowedHeaders(allowedHeaders).allowedMethods(allowedMethods));
    }


    /*
     * Ensemble des routes de l'applications
     * */
    // Routes de l'application
    public void fillRoutes() {
        // page de login, register et les méthodes pour se connecter
        router.get("/").handler(UsersController::login);
        router.get("/register").handler(UsersController::register);
        router.post("/").handler(UsersController::dashboard);
        router.post("/register").handler(UsersController::create);
        router.get("/who_am_i").handler(AuthController::who_am_i);         // renvoie l'information concernant l'utilisateur courant
        // Utilisateur(s)
        router.get("/users").handler(UsersController::index);               // return users[] : JSON
        router.get("/user/:id").handler(UsersController::show);             // renvoie user : JSON
        router.get("/get_money").handler(UsersController::get_money);       // + 500€
        // Produit(s)
        router.get("/products").handler(ProductsController::index);         // renvoie product[] : JSON
        // Commande(s) (f° utilisateur)
        router.get("/orders").handler(OrdersController::index);             // renvoie order[] : JSON
        router.post("/orders").handler(OrdersController::create);        // créer nouvelle order
        router.get("/orders/:id").handler(OrdersController::show);          // renvoie order : JSON
        // Zones
        router.get("/zones").handler(ZonesController::index);               // renvoie zone[] : JSON
        // Categories
        router.get("/categories").handler(CategoriesController::index);     // renvoie categorie[] : JSON
    }

    public void authMiddleware() {
        router.get("/*").handler(AuthController::is_connected);             // charge current_user si connecté sur une requete GET
        router.post("/*").handler(AuthController::is_connected);         // charge current_user si connecté sur une requete POST
    }
}
