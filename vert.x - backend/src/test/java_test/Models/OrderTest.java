package java_test.Models;

import code.Models.LineOrder;
import code.Models.Order;
import code.Models.Product;
import org.junit.BeforeClass;
import org.junit.Test;

import java.sql.Date;
import java.time.LocalDate;

import static org.junit.Assert.*;

public class OrderTest {
    public static Order order;

    @BeforeClass
    public static void setUp() {
        Product p1 = new Product(1, "Bottes", 100);
        Product p2 = new Product(2, "Manteau", 200);
        order = new Order(1, 3, new Date(1000 * 3600 * 12 * 30));
        order.addLine(new LineOrder(p1, 3)); // 3 * 100 (300) +
        order.addLine(new LineOrder(p2, 2)); // 2 * 200 (400) = 700
    }

    @Test
    public void getId() {
        assertEquals(order.getId(), 1);
    }

    @Test
    public void getUser_id() {
        assertEquals(order.getUser_id(), 3);
    }

    @Test
    public void getCreated_at() {
        assertEquals(order.getCreated_at().toLocalDate(), LocalDate.parse("1970-01-16"));
    }


    @Test
    public void getPrix() {
        assertEquals(order.getPrix(), 700);
    }

}