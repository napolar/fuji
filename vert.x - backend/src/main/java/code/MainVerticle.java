package code;


import io.vertx.core.AbstractVerticle;
import io.vertx.core.Launcher;
import io.vertx.core.Vertx;
import io.vertx.core.VertxOptions;
import io.vertx.ext.web.Router;

public class MainVerticle extends AbstractVerticle {

    // Méthode afin de pouvoir lancer notre verticle depuis notre IDE
    public static void main(final String[] args) {
        Launcher.executeCommand("run", MainVerticle.class.getName());
    }

    @Override
    public void start() {
        int PORT = 8080;
        /* Création du router, celui-ci se charge de préparer les routes */
        MainRouter router = new MainRouter(Router.router(vertx));
        /* HOOK : Before mount : Création du serveur, on lui applique le router */
        vertx.createHttpServer().requestHandler(router.getPrimitiveRouter()::accept).listen(PORT);
        /* HOOK : After mount : empty */
    }
}