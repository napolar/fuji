package code.Controllers;

import code.Models.Order;
import code.Models.User;
import code.RxMysql;
import io.vertx.core.json.JsonArray;
import io.vertx.ext.web.RoutingContext;


public class OrdersController extends Controller {

    // Si admin return all orders, sinon orders du client
    public static void index(RoutingContext context) {
        if (is_current_user(context)) {
            if (is_admin(context)) {
                // user est admin
                // on recupère TOUTES les commandes
                User admin = get_current_user(context);
                JsonArray commandes = new JsonArray();
                RxMysql.getOrders()
                        .doOnCompleted(() -> renderJson(context, commandes))
                        .subscribe(grouped -> {
                            // lignes de commandes regroupés par commande
                            grouped.toList().subscribe(lineOrders -> {
                                Order order = new Order(lineOrders.get(0).getOrder_id(), lineOrders.get(0).getUser_id(), lineOrders.get(0).getCreated_at());
                                lineOrders.forEach(lineOrder -> {
                                    // on créer une commande dans laquelle on ajoute ses lignes
                                    order.addLine(lineOrder);
                                });
                                commandes.add(order.toJson());
                            });
                        });
            } else {
                // user est client
                // on recupère les commandes du client
                User client = get_current_user(context);
                JsonArray commandes = new JsonArray();
                RxMysql.findOrdersByUser(client.getId())
                        .doOnCompleted(() -> {
                            renderJson(context, commandes);
                        })
                        // lignes de commandes regroupés par commande
                        .subscribe(grouped -> {
                            grouped.toList().subscribe(lineOrders -> {
                                Order order = new Order(lineOrders.get(0).getOrder_id(), lineOrders.get(0).getUser_id(), lineOrders.get(0).getCreated_at());
                                lineOrders.forEach(lineOrder -> {
                                    // on créer une commande dans laquelle on ajoute ses lignes
                                    order.addLine(lineOrder);
                                });
                                commandes.add(order.toJson());
                            });
                        });
            }
        } else {
            // accés refusé
            sendError(403, context);
        }
    }

    public static void create(RoutingContext context) {
        if (is_current_user(context)) {
            // on créer l'objet Order à partir de la requête
            Order order = Order.from_parameter(context);
            // on charge l'utilisateur dans la commande
            order.setUser_id(get_current_user(context).getId());
            // si l'utilisateur à assez d'argent alors on effectue la commande
            RxMysql.findUserById(order.getUser_id())
                    .first()
                    .subscribe(u -> {
                        if (u.getMoney() >= order.getPrix()) {
                            RxMysql.newOrder(order);
                            sendSuccess(context);
                        } else {
                            // pas assez d'argent
                            sendError(403, context);
                        }
                    });
        } else {
            // accés refusé
            sendError(403, context);
        }

    }

    public static void show(RoutingContext context) {
        if (is_current_user(context)) {
            // on recupère l'utilisateur et l'id passé en paramètre
            User client = get_current_user(context);
            int orderId = Integer.parseInt(param(context, "id"));
            Order commande = new Order(orderId);
            RxMysql.findOrderById(orderId)
                    .doOnCompleted(() -> {
                        commande.setCreated_at();
                        renderJson(context, commande.toJson());
                    })
                    .subscribe(commande::addLine);
        } else {
            // accés refusé
            sendError(403, context);
        }
    }
}
