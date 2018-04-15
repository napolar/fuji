<template>
    <div class="ma-1 pa-0">
        <v-snackbar :timeout='3000' bottom right v-model="snackbar_show" :color="snackbar_color">
            {{ snackbar_text }}
        </v-snackbar>
        <h1 class="display-3 mb-3">
            <strong> </strong>
        </h1>
        <transition-group mode="out-in" name="appear">
            <div v-if="!loading_produit" class="container-produits" :class="commande.length ? '' : 'full'" :key="1">
                <v-container grid-list-md fluid style="max-width:1600px; margin: auto">
                    <v-layout row wrap>
                        <v-flex xs6 md4 v-for="product in products" :key="product.id">
                            <v-card :key="product.id">
                                <v-card-media :src="product_to_url(product)" height="200px">
                                </v-card-media>
                                <v-card-title primary-title>
                                    <div>
                                        <h3 class="headline mb-0">{{product.nom}}</h3>
                                        <div text-xs-right>
                                            <p>{{product.prix}} €</p>
                                        </div>
                                    </div>
                                </v-card-title>
                                <v-card-actions>
                                    <v-btn flat color="primary" @click="add_produit(product.id)">Ajouter</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
            <div class="text-xs-center" v-else :key="2">
                <v-progress-circular indeterminate :size="100" dark></v-progress-circular>
            </div>
        </transition-group>
        <div class="container-commande" :class="commande.length ? 'open' : ''">
            <v-container fluid>
                <v-layout row wrap v-if="commande.length">
                    <v-flex xs12>
                        <v-list subheader>
                            <v-subheader>Commande</v-subheader>
                            <transition-group name="slide">
                                <v-list-tile avatar v-for="(product, index) in commande" :key="index" @click="">
                                    <v-list-tile-avatar>
                                        <img :src="product_to_url(product)">
                                    </v-list-tile-avatar>
                                    <v-list-tile-content>
                                        {{product.quantite}}
                                    </v-list-tile-content>
                                    <v-list-tile-content>
                                        <v-list-tile-title>
                                            {{product.nom}}
                                        </v-list-tile-title>
                                    </v-list-tile-content>
                                    <v-list-tile-content>
                                        {{product.prix}} €
                                    </v-list-tile-content>
                                    <v-list-tile-action>
                                        <v-btn flat icon @click="remove_product(product.id)">
                                            <v-icon>cancel</v-icon>
                                        </v-btn>
                                    </v-list-tile-action>
                                </v-list-tile>
                            </transition-group>
                        </v-list>
                        <v-divider></v-divider>
                        <v-flex xs12 class="title ma-2 pa-2" text-xs-right>
                            <strong>Total : {{commande_sum()}} €</strong>
                        </v-flex>
                        <v-btn block :loading="loading_commande" color="primary" dark @click="add_order()">Commander</v-btn>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
import api_url from "../common/api_url";
import http from "../common/http";

export default {
  name: "produits",
  data() {
    return {
      products: [],
      commande: [],
      loading_commande: false, // pas d'envoie de commande
      loading_produit: true, // on charge les produits
      snackbar_show: false,
      snackbar_text: "",
      snackbar_color: "error",
      api_url: api_url
    };
  },
  mounted: function() {
    http.get("products").then(res => {
      this.products = res.data;
      setTimeout(() => {
        this.loading_produit = false;
      }, 500);
    });
  },
  methods: {
    product_to_url(product) {
      return api_url + "static/produits/" + product.id + ".png";
    },
    commande_sum() {
      // On renvoie la somme de la commande
      let accumulateur = 0;
      this.commande.map(p => (accumulateur += p.prix * p.quantite));
      return accumulateur;
    },
    add_produit(id) {
      // si le produit est déjà en commande
      if (this.commande.find(p => p.id == id)) {
        let product = this.commande.find(p => p.id == id);
        product.quantite++;
        // on refresh car on a modifier une nested propertie
        this.commande = [...this.commande];
      } else {
        // on ajoute le produit à la commande
        // on récupère le produit dans notre inventaire
        let product = this.products.find(p => p.id == id);
        product.quantite = 1;
        this.commande = [...this.commande, product];
      }
    },
    remove_product(id) {
      // Enlève un produit de la liste de commande
      this.commande = this.commande.filter(p => p.id != id);
    },
    add_order() {
      // On active le loading, puis on envoie la commande
      this.loading_commande = true;
      http
        .post("orders", { order: this.commande })
        .then(res => {
          // la commande est bien registrée
          this.commande = [];
          this.loading_commande = false;
          this.snackbar_color = "success";
          this.snackbar_text = "Votre commande à bien été enregistré !";
          this.snackbar_show = true;
        })
        .catch(err => {
          // erreur lors de la liaison serveur
          this.loading_commande = false;
          this.snackbar_color = "error";
          this.snackbar_text = "Erreur lors de la liaison avec le serveur !";
          this.snackbar_show = true;
        });
    }
  }
};
</script>

<style scoped>
.container-commande,
.container-produits {
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
}
.container-produits {
  margin-right: 33%;
}

.container-produits.full {
  margin-right: 0;
}

@media screen and (max-width: 1000px) {
  .container-produits {
    margin-right: 300px;
  }
}
.container-commande {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  background-color: #fff;
  width: 0;
  padding: 10px 0px;
  margin: 64px 0px;
}
.container-commande.open {
  width: 33%;
  min-width: 300px;
}
</style>
