package code.Models;

import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;
import org.apache.commons.codec.digest.DigestUtils;

import java.util.UUID;


public class User {

    private int id;
    private String username;
    private String email;
    private int money;
    private boolean is_admin;
    private int zone_id;
    private String hashPassword;

    public User(int id, String username, String email, String hashPassword, int money, boolean is_admin, int zone_id) {
        /* Recupère de la base de données */
        this.id = id;
        this.username = username;
        this.email = email;
        this.hashPassword = hashPassword;
        this.money = money;
        this.is_admin = is_admin;
        this.zone_id = zone_id;
    }

    public User(String username, String email, String clearPassword, int zone_id) {
        /* Lors de la création d'un nouvel utilisateur */
        this.username = username;
        this.email = email;
        this.zone_id = zone_id;
        this.hashPassword = hashPassword(clearPassword);
        this.money = 0;
        this.is_admin = false;
    }

    public User(RoutingContext context) {
        this.username = context.request().getParam("username");
        this.email = context.request().getParam("email");
        this.zone_id = Integer.parseInt(context.request().getParam("zone_id"));
        this.hashPassword = hashPassword(context.request().getParam("password"));
        this.money = 0;
        this.is_admin = false;
    }

    public int getId() {
        return this.id;
    }

    public String getUsername() {
        return username;
    }

    public String getEmail() {
        return email;
    }

    public int getMoney() {
        return money;
    }

    public boolean is_admin() {
        return is_admin;
    }

    public int getZone_id() {
        return zone_id;
    }

    public String getHashPassword() {
        return hashPassword;
    }

    public static String generateToken() {
        return UUID.randomUUID().toString();
    }

    public JsonObject toJson() {
        return new JsonObject()
                .put("id", this.id)
                .put("username", this.username)
                .put("email", this.email)
                .put("money", this.money)
                .put("is_admin", this.is_admin)
                .put("zone_id", this.zone_id);
    }

    public static String hashPassword(String clearPassword) {
        return DigestUtils.md5Hex(clearPassword);
    }
}
