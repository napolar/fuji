package code.Models;

import io.vertx.core.json.JsonObject;

public class Zone {

    private int id;
    private String nom;

    public Zone(int id, String nom) {
        this.id = id;
        this.nom = nom;
    }

    public int getId() {
        return id;
    }

    public String getNom() {
        return nom;
    }

    public JsonObject toJson() {
        return new JsonObject()
                .put("id", this.id)
                .put("nom", this.nom);
    }
}
