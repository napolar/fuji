package code.Controllers;

import code.Models.User;
import code.Models.Zone;
import code.RxMysql;
import io.vertx.core.json.JsonArray;
import io.vertx.ext.web.RoutingContext;

public class ProductsController extends Controller {

    public static void index(RoutingContext context) {
        JsonArray products = new JsonArray();
        RxMysql.getProducts()
                .doOnCompleted(() -> {
                    renderJson(context, products);
                })
                .subscribe(products::add);
    }

}
