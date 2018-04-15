package code.Controllers;

import code.RxMysql;
import io.vertx.ext.web.RoutingContext;

public class AuthController extends Controller {

    public static void is_connected(RoutingContext context) {
        // si l'utilisateur est connecté
        if (context.request().getHeader("Authorization") != null) {
            String token = context.request().getHeader("Authorization").split("Bearer ")[1];
            RxMysql.findUserByToken(token)
                    .doOnCompleted(() -> context.next())
                    .subscribe(user -> context.data().put("currentUser", user));
        } else {
            // l'utilisateur n'est pas connecté
            context.next();
        }
    }

    public static void who_am_i(RoutingContext context) {
        if (is_current_user(context)) {
            // on renvoie l'utilisateur en json
            renderJson(context, get_current_user(context).toJson());
        } else {
            // accés refusé
            sendError(403, context);
        }
    }
}
