package code.Controllers;

import code.Models.Categorie;
import code.RxMysql;
import io.vertx.core.json.JsonArray;
import io.vertx.ext.web.RoutingContext;

public class CategoriesController extends Controller {

    public static void index(RoutingContext context) {
        if (is_admin(context)) {
            JsonArray cateogries = new JsonArray();
            RxMysql.getCateogries()
                    .map(Categorie::toJson)
                    .doOnCompleted(() -> renderJson(context, cateogries))
                    .subscribe(cateogries::add);
        } else {
            sendError(403, context);
        }
    }
}
