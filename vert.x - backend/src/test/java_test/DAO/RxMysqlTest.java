package java_test.DAO;

import code.Models.Categorie;
import code.Models.User;
import code.RxMysql;
import org.junit.BeforeClass;
import org.junit.Test;

import static org.junit.Assert.*;

public class RxMysqlTest {
    public static User user;

    @BeforeClass
    public static void setUp() {
        user = new User(1, "Dieter", "admin@email.com", "5f4dcc3b5aa765d61d8327deb882cf99", 20000, true, 3);
    }


    @Test
    public void getUsers() {
        RxMysql.getUsers()
                .first()
                .toBlocking()
                .subscribe(u -> {
                    assertEquals(u.getEmail(), "admin@email.com");
                });
    }

    @Test
    public void findUserById() {
        RxMysql.findUserById(1)
                .toBlocking()
                .subscribe(u -> {
                    assertEquals(u.getId(), 1);
                });
    }

    @Test
    public void findUserByEmail() {
        RxMysql.findUserByEmail("admin@email.com")
                .toBlocking()
                .subscribe(u -> {
                    assertEquals(u.getEmail(), "admin@email.com");
                });
    }

    @Test
    public void InsertAndFindUserByToken() {
        String token = User.generateToken();
        RxMysql.insertToken(user, token)
                .doOnCompleted(() -> {
                    RxMysql.findUserByToken(token)
                            .first()
                            .subscribe(u -> {
                                assertEquals(u.getId(), 1);
                            });
                })
                .toBlocking()
                .subscribe();
    }

    @Test
    public void getProducts() {
        RxMysql.getProducts()
                .first()
                .toBlocking()
                .subscribe(p -> {
                    assertEquals(p.getString("nom"), "Waterproof Icon-6");
                });
    }

    @Test
    public void findOrderById() {
        RxMysql.findOrderById(1)
                .toBlocking()
                .subscribe(o -> {
                    assertEquals(o.getOrder_id(), 1);
                });
    }

    @Test
    public void getZones() {
        RxMysql.getZones()
                .first()
                .toBlocking()
                .subscribe(z -> {
                    assertEquals(z.getNom(), "Aurillac");
                });
    }

    @Test
    public void getCateogries() {
        RxMysql.getCateogries()
                .first()
                .toBlocking()
                .subscribe(c -> {
                    assertEquals(c.getNom(), "Bracelet");
                });
    }
}