package java_test.Models;

import code.Models.Categorie;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.junit.Assert.*;

public class CategorieTest {
    public static Categorie categorie;

    @BeforeClass
    public static void setUp() {
        categorie = new Categorie(1, "Manteaux");
    }

    @Test
    public void getId() {
        assertEquals(categorie.getId(), 1);
    }

    @Test
    public void getNom() {
        assertEquals(categorie.getNom(), "Manteaux");
    }

    @Test
    public void toJson() {
        int id = categorie.toJson().getInteger("id");
        assertEquals(id, 1);
    }
}