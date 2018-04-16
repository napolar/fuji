package java_test.Models;

import code.Models.LineOrder;
import code.Models.Order;
import code.Models.Product;
import code.Models.User;
import org.junit.BeforeClass;
import org.junit.Test;

import java.sql.Date;

import static org.junit.Assert.*;

public class UserTest {
    public static User user;

    @BeforeClass
    public static void setUp() {
        user = new User("Napolar", "John.doe@email.com", "password", 1);
    }

    @Test
    public void generateToken() {
        // deux tokens generés doivent être differents
        assertNotEquals(User.generateToken(), User.generateToken());
    }

    @Test
    public void toJson() {
        assertEquals(user.toJson().getString("username"), "Napolar");
        assertEquals(user.toJson().getString("email"), "John.doe@email.com");
    }

    @Test
    public void hashPassword() {
        assertEquals(user.getHashPassword(), "5f4dcc3b5aa765d61d8327deb882cf99");
    }
}