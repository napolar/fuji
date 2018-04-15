import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/home";
import Produits from "@/components/produits";
import Commandes from "@/components/orders";
import Commande from "@/components/order";
import Test from "@/components/test";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/products",
      name: "Produits",
      component: Produits
    },
    {
      path: "/orders",
      name: "Commandes",
      component: Commandes
    },
    {
      path: "/orders/:id",
      name: "Commande",
      component: Commande
    },
    {
      path: "/test",
      name: "Test",
      component: Test
    }
  ]
});
