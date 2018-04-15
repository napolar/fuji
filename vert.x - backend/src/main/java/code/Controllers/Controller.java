package code.Controllers;

import code.Models.User;
import io.vertx.core.http.HttpServerResponse;
import io.vertx.core.json.Json;
import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;
import io.vertx.ext.web.templ.HandlebarsTemplateEngine;
import io.vertx.ext.web.templ.TemplateEngine;

/*
Controller
    méthodes rendus disponible à l'ensemble des controllers.
 */
public abstract class Controller {
    // Arborescence de base pour les vues
    private static final String templates_root_path = "Views/";
    // initialisation d'Handlebars : moteur de templates (hbs)  (pas de cache)
    protected static final TemplateEngine engine = HandlebarsTemplateEngine.create().setMaxCacheSize(0);

    // Méthode afin de savoir si il y a un utilisateur
    public static boolean is_current_user(RoutingContext context) {
        return context.data().get("currentUser") instanceof User;
    }

    public static User get_current_user(RoutingContext context) {
        return (User) context.data().get("currentUser");
    }

    public static boolean is_admin(RoutingContext context) {
        if (is_current_user(context)) {
            return get_current_user(context).is_admin();
        } else {
            return false;
        }
    }

    // Utilitaire pour extraire les paramètres de la requete plus facilement (seulement en passant un string)
    public static String param(RoutingContext context, String param) {
        return context.request().getParam(param);
    }

    // Rend la vue et met fin à la requete
    public static void render(RoutingContext context, String view) {
        engine.render(context, templates_root_path + view, res -> {
            if (res.succeeded()) context.response().end(res.result());
            else context.fail(res.cause());
        });
    }

    // Rend du json et met fin à la requete
    public static void renderJson(RoutingContext context, JsonArray data) {
        context.response().putHeader("content-type", "application/json").end(Json.encodePrettily(data));
    }

    public static void renderJson(RoutingContext context, JsonObject data) {
        context.response().putHeader("content-type", "application/json").end(Json.encodePrettily(data));
    }

    // Rend erreur et met fin à la requete (403 : unauthorized, 404 : not found...)
    protected static void sendError(int statusCode, RoutingContext context) {
        context.response().setStatusCode(statusCode).end();
    }

    // lors d'une insertion dans la base on répond seulement par un succés (aucune data)
    protected static void sendSuccess(RoutingContext context) {
        context.response().setStatusCode(200).end();
    }
}
