package code.Models;

import io.vertx.core.json.JsonObject;

public class Product {
    private int id;
    private String nom;
    private int prix;
    private String categorie_name;
    private int categorie_id;

    public Product(int id, String nom, int prix, String categorie_name, int categorie_id) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
        this.categorie_name = categorie_name;
        this.categorie_id = categorie_id;
    }

    public Product(int id) {
        this.id = id;
    }

    public Product(int id, String nom, int prix) {
        this.id = id;
        this.nom = nom;
        this.prix = prix;
    }

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public int getPrix() {
        return prix;
    }

    public void setPrix(int prix) {
        this.prix = prix;
    }

    public String getCategorie_name() {
        return categorie_name;
    }

    public JsonObject toJson() {
        return new JsonObject()
                .put("id", this.id)
                .put("nom", this.nom)
                .put("prix", this.prix)
                .put("categorie", this.categorie_name)
                .put("categorie_id", this.categorie_id);
    }
}
