package code.Controllers;

import code.Models.Zone;
import code.RxMysql;
import io.vertx.core.json.JsonArray;
import io.vertx.ext.web.RoutingContext;

public class ZonesController extends Controller {
    public static void index(RoutingContext context) {
        // Seulement si l'utilisateur est admin
        if (!is_admin(context)) {
            sendError(403, context);
        } else {
            JsonArray zones = new JsonArray();
            RxMysql.getZones()
                    .map(Zone::toJson)
                    .doOnCompleted(() -> renderJson(context, zones))
                    .subscribe(zones::add);
        }
    }
}
