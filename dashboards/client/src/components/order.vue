<template>
    <div class="ma-1 pa-0">
        <transition-group mode="out-in" name="appear" tag="div">
            <v-card v-if="!loading_products && !loading_commandes" :key="1" class="order-card mt-4">
                <v-card-title primary-title>
                    <div>
                        <h3 class="title mb-0">Commande {{commande.id}}</h3>
                    </div>
                </v-card-title>
                <v-card-text>
                    <v-list subheader>
                        <v-subheader>Détails de la commande</v-subheader>
                        <transition-group name="slide">
                            <v-list-tile avatar v-for="(line, index) in commande.lines" :key="index" @click="">
                                <v-list-tile-avatar>
                                    <img :src="product_to_url(line.product_id)">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title>
                                        {{get_product_name(line.product_id)}}
                                    </v-list-tile-title>
                                </v-list-tile-content>
                                <v-list-tile-content>
                                    {{line.quantite}}
                                </v-list-tile-content>
                                <v-list-tile-content>
                                    {{get_line_price(line)}} €
                                </v-list-tile-content>
                            </v-list-tile>
                        </transition-group>
                        <v-divider></v-divider>
                        <h3 class="title align-right mr-3 mt-3">
                            <strong>Total : {{get_order_price(commande.lines)}}€</strong>
                        </h3>
                    </v-list>
                </v-card-text>
                <v-card-actions>
                    <v-btn icon color="primary" :to="'/orders'">
                        <v-icon>keyboard_arrow_left</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
            <div class="text-xs-center" v-else :key="2">
                <v-progress-circular indeterminate :size="100" dark></v-progress-circular>
            </div>
        </transition-group>
    </div>
</template>

<script>
import http from "../common/http";
import api_url from "../common/api_url";

export default {
  name: "order",
  data() {
    return {
      loading_commandes: true,
      loading_products: true,
      commande: {},
      products: [],
      headers: [
        {
          text: "Article",
          align: "left",
          sortable: false,
          value: "image"
        },
        { text: "Quantité", value: "number", sortable: false },
        { text: "Prix", value: "number", sortable: false }
      ]
    };
  },
  methods: {
    get_order_price: function(lines) {
      let accumulateur = 0;
      lines.map(line => {
        accumulateur +=
          this.products.find(p => p.id == line.product_id)["prix"] *
          line.quantite;
      });
      return accumulateur;
    },
    product_to_url(id) {
      return api_url + "static/produits/" + id + ".png";
    },
    get_product_name(id) {
      return this.products.find(p => p.id == id).nom;
    },
    get_line_price(line) {
      return (
        this.products.find(p => p.id == line.product_id).prix * line.quantite
      );
    }
  },
  mounted: function() {
    http.get("orders/" + this.$route.params.id).then(res => {
      this.commande = res.data;
      this.loading_commandes = false;
    });
    http.get("products").then(res => {
      this.products = res.data;
      this.loading_products = false;
    });
  }
};
</script>

<style scoped>
.order-card {
  width: 100%;
  max-width: 700px;
  margin: auto;
}
</style>
