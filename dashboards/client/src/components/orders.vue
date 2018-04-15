<template>
  <div class="ma-1 pa-0">
    <v-snackbar :timeout='3000' bottom right v-model="snackbar_show" :color="snackbar_color">
      {{ snackbar_text }}
    </v-snackbar>
    <h1 class="display-3 mb-3">
      <strong> </strong>
    </h1>
    <transition-group mode="out-in" name="appear">
      <div v-if="!loading_products && !loading_commandes" :key="1">
        <v-data-table :headers="headers" :items="commandes" hide-actions class="elevation table-order">
          <template slot="items" slot-scope="props">
            <router-link :to="'/orders/'+props.item.id" tag="tr">
              <td>{{ props.item.id }}</td>
              <td>{{ props.item.lines.length }}</td>
              <td>{{ get_order_price(props.item.lines) }} €</td>
            </router-link>
          </template>
        </v-data-table>
      </div>
      <div class="text-xs-center" v-else :key="2">
        <v-progress-circular indeterminate :size="100" dark></v-progress-circular>
      </div>
    </transition-group>
  </div>
</template>

<script>
import http from "../common/http";

export default {
  name: "orders",
  data() {
    return {
      headers: [
        {
          text: "Vos dernières commandes",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Nombre d'articles", value: "number", sortable: false },
        { text: "Prix", value: "number", sortable: false }
      ],
      commandes: [],
      products: [],
      loading_commandes: true,
      loading_products: true,
      snackbar_show: false,
      snackbar_text: "",
      snackbar_color: "error"
    };
  },
  mounted: function() {
    http.get("orders").then(res => {
      this.commandes = res.data;
      this.loading_commandes = false;
    });
    http.get("products").then(res => {
      this.products = res.data;
      this.loading_products = false;
    });
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
    }
  }
};
</script>

<style scoped>
.table-order {
  max-width: 800px;
  margin: auto;
  margin-bottom: 3vh;
}
</style>
