package code.Controllers;

import code.Models.User;
import code.Models.Zone;
import code.RxMysql;
import io.vertx.core.http.HttpMethod;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;

import java.util.ArrayList;
import java.util.HashMap;

public class UsersController extends Controller {

    public static void login(RoutingContext context) {
        render(context, "login");
    }

    public static void register(RoutingContext context) {
        // renvoie la vue d'inscription, on a besoin des zones pour qu'il puisse choisir
        HashMap<Integer, String> zones = new HashMap<>();
        RxMysql.getZones()
                .doOnCompleted(() -> {
                    context.put("zones", zones);
                    render(context, "register");
                })
                .subscribe(zone -> zones.put(zone.getId(), zone.getNom()));
    }

    public static void dashboard(RoutingContext context) {
        RxMysql.findUserByEmail(context.request().getParam("mail"))
                .first()
                .subscribe(user -> {
                            if (user.getHashPassword().equals(User.hashPassword(context.request().getParam("password")))) {
                                // Utilisateur est bien connecté ! On lui genere un token et on lui rend la page
                                String token = User.generateToken();
                                context.put("token", token);
                                // On lui rend la page en fonction de si il est admin ou client
                                RxMysql.insertToken(user, token)
                                        .doOnCompleted(() -> {
                                            if (user.is_admin()) {
                                                // Administrateur
                                                render(context, "admin");
                                            } else {
                                                // Client
                                                render(context, "client");
                                            }
                                        })
                                        .subscribe();
                            } else {
                                context.put("erreur", "Mot de passe incorrect").reroute(HttpMethod.GET, "/");
                            }
                        },
                        err -> context.put("erreur", "Cette adresse mail n'est associée à aucun compte").reroute(HttpMethod.GET, "/"),
                        () -> {
                        });
    }

    public static void index(RoutingContext context) {
        if (is_admin(context)) {
            JsonArray users = new JsonArray();
            RxMysql.getUsers()
                    .map(User::toJson)
                    .doOnCompleted(() -> renderJson(context, users))
                    .subscribe(users::add);
        } else {
            sendError(403, context);
        }
    }

    public static void create(RoutingContext context) {
        String username = context.request().getParam("username");
        String password = context.request().getParam("password");
        String mail = context.request().getParam("mail");
        int zone_id = Integer.parseInt(context.request().getParam("zone"));
        // On lui génère un token
        String token = User.generateToken();
        context.put("token", token);
        User user = new User(username, mail, password, zone_id);
        RxMysql.insertUser(user, token)
                .doOnCompleted(() -> {
                    render(context, "client");
                })
                .subscribe();
    }

    public static void show(RoutingContext context) {
        int userID = Integer.parseInt(param(context, "id"));
        RxMysql.findUserById(userID)
                .map(User::toJson)
                .first()
                .subscribe(user -> renderJson(context, user));
    }

    public static void get_money(RoutingContext context) {
        if (is_current_user(context)) {
            RxMysql.insertMoney(get_current_user(context).getId())
                    .doOnCompleted(() -> sendSuccess(context))
                    .doOnError(err -> sendError(404, context))
                    .subscribe();
        } else {
            // accés refusé
            sendError(403, context);
        }
    }

}
