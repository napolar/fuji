package java_test.Models;

import code.Models.Categorie;
import code.Models.LineOrder;
import org.junit.BeforeClass;
import org.junit.Test;

import java.sql.Date;
import java.time.LocalDate;
import java.util.Calendar;

import static org.junit.Assert.*;

public class LineOrderTest {

    public static LineOrder line;

    @BeforeClass
    public static void setUp() {
        line = new LineOrder(1, 3, 2, 4, new Date(1000 * 3600 * 12 * 31));
    }

    @Test
    public void getQuantite() {
        assertEquals(line.getQuantite(), 2);
    }

    @Test
    public void getProduct() {
        assertEquals(line.getProduct().getId(), 3);
    }

    @Test
    public void getOrder_id() {
        assertEquals(line.getOrder_id(), 1);
    }

    @Test
    public void getUser_id() {
        assertEquals(line.getUser_id(), 4);
    }

    @Test
    public void getCreated_at() {
        assertEquals(line.getCreated_at().toLocalDate(), LocalDate.parse("1970-01-16"));
    }

    @Test
    public void toJson() {
        int id = line.toJson().getInteger("product_id");
        assertEquals(id, 3);
    }
}