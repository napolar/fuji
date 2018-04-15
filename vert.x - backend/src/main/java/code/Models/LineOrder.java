package code.Models;

import io.vertx.core.json.Json;
import io.vertx.core.json.JsonObject;

import java.sql.Date;


public class LineOrder {
    private int quantite;
    private Product product;
    private int order_id;
    /* Order attribute */
    private int user_id;
    private Date created_at;

    public LineOrder(Product product, int quantite) {
        this.quantite = quantite;
        this.product = product;
    }

    public LineOrder(int product_id, int quantite) {
        this.quantite = quantite;
        this.product = new Product(product_id);
    }

    public LineOrder(int order_id, int product_id, int quantite) {
        this.order_id = order_id;
        this.product = new Product(product_id);
        this.quantite = quantite;
    }

    public LineOrder(int order_id, int product_id, int quantite, int user_id, Date created_at) {
        this.order_id = order_id;
        this.product = new Product(product_id);
        this.quantite = quantite;
        this.user_id = user_id;
        this.created_at = created_at;
    }

    public int getQuantite() {
        return quantite;
    }

    public Product getProduct() {
        return product;
    }

    public int getPrix() {
        return product.getPrix() * quantite;
    }

    public int getOrder_id() {
        return order_id;
    }

    public int getUser_id() {
        return user_id;
    }

    public Date getCreated_at() {
        return created_at;
    }

    public JsonObject toJson() {
        return new JsonObject()
                .put("product_id", this.product.getId())
                .put("quantite", this.quantite);
    }
}
