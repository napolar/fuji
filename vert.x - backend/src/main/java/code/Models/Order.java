package code.Models;

import io.vertx.core.json.JsonArray;
import io.vertx.core.json.JsonObject;
import io.vertx.ext.web.RoutingContext;
import rx.Observable;

import java.lang.reflect.Array;

import java.util.*;

public class Order {
    private int id;
    private int user_id;
    private ArrayList<LineOrder> lineOrders;
    private Date created_at;

    public Order(int id, int user_id, Date created_at) {
        this.lineOrders = new ArrayList<>();
        this.id = id;
        this.user_id = user_id;
        this.created_at = created_at;
    }

    public Order(int id) {
        this.lineOrders = new ArrayList<>();
        this.id = id;
    }

    public Order() {
        this.lineOrders = new ArrayList<>();
    }

    public int getId() {
        return id;
    }

    public int getUser_id() {
        return user_id;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }

    public void addProduct(Product product, int quantite) {
        this.lineOrders.add(new LineOrder(product, quantite));
    }

    public void addLine(LineOrder line) {
        this.lineOrders.add(line);
    }

    public void setCreated_at() {
        if (this.getLineOrders().get(0) != null) {
            this.created_at = this.getLineOrders().get(0).getCreated_at();
        }
    }

    public void setCreated_at(Date created_at) {
        this.created_at = created_at;
    }

    public ArrayList<LineOrder> getLineOrders() {
        return lineOrders;
    }

    public ArrayList<Integer> getLinesAsParameter(Integer order_id) {
        ArrayList<Integer> ret = new ArrayList<>();
        for (LineOrder l : lineOrders) {
            ret.add(order_id);
            ret.add(l.getProduct().getId());
            ret.add(l.getQuantite());
        }
        return ret;
    }

    public int getPrix() {
        return lineOrders.stream()
                .mapToInt(LineOrder::getPrix)
                .sum();
    }

    public static Order from_parameter(RoutingContext context) {
        // on créer un nouvelle commande vide
        Order commande = new Order();
        // on recupère le body qui contient la liste des produits
        JsonArray order = context.getBodyAsJson().getJsonArray("order");
        for (int i = 0; i < order.size(); i++) {
            // pour chaque produit on créer une 'lineOrder' : couple (produit, quantité)
            JsonObject product_json = order.getJsonObject(i);
            Product product = new Product(product_json.getInteger("id"));
            product.setPrix(product_json.getInteger("prix"));
            int quantite = product_json.getInteger("quantite");
            commande.addProduct(product, quantite);
        }
        return commande;
    }

    public String toString() {
        return "Je suis une commande constitué de : " + this.lineOrders.size() + " Produits.";
    }

    public JsonObject toJson() {
        // On charges les lignes dans une liste : couple (product_id, quantité)
        JsonArray lines = new JsonArray();
        this.lineOrders.forEach(lineOrder -> {
            lines.add(lineOrder.toJson());
        });
        // avec cette liste on charge l'id de la commandes
        return new JsonObject()
                .put("id", this.id)
                .put("user_id", this.user_id)
                .put("created_at", this.created_at.toString())
                .put("lines", lines);
    }
}
