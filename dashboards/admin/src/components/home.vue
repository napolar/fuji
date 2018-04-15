<template>
    <v-container fluid class="ma-0 pa-0">
        <transition-group mode="out-in" name="appear">
            <div v-if="!is_loading()" :key="1">
                <v-container fluid grid-list-lg>
                    <v-layout row wrap>
                        <!-- Cards textes -->
                        <v-flex xs12 md6>
                            <v-card class="mb-3">
                                <v-card-title primary-title>
                                    <div class="icon-overflow">
                                        <v-icon color="primary">fas fa-trophy</v-icon>
                                    </div>
                                    <h3 class="title">Fuji - Bienvenue sur l'interface d'administration</h3>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-card class="mb-3">
                                <v-card-title primary-title>
                                    <div class="icon-overflow">
                                        <v-icon color="primary">fas fa-chart-bar</v-icon>
                                    </div>
                                    <h3 class="title">Statistiques de votre boutique</h3>
                                </v-card-title>
                            </v-card>
                        </v-flex>
                        <!-- Fin des textes -->

                        <!-- Commandes par zones (donut) -->
                        <v-flex xs12 md4>
                            <transition name="appear">
                                <v-card v-show="commandes_zone_ready" class="card-stat">
                                    <v-card-title primary-title>
                                        <div>
                                            <h3 class="title">Commande par zones</h3>
                                            <h4 class="subheading">{{dates.debut_zone != "" && dates.fin_zone != "" ? "(du " + dates.debut_zone + " au " + dates.fin_zone + ")" : ''}}</h4>
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <pie-chart :chartData="commandes_zone"></pie-chart>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-menu :close-on-content-click="false" v-model="menus.debut_zone" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px">
                                            <v-btn flat slot="activator">Début</v-btn>
                                            <v-date-picker color="blue" v-model="dates.debut_zone" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="blue" @click="menus.debut_zone = false;format_commandes_zones()">OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <v-spacer></v-spacer>
                                        <v-menu :close-on-content-click="false" v-model="menus.fin_zone" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px">
                                            <v-btn flat slot="activator">Fin</v-btn>
                                            <v-date-picker color="blue" v-model="dates.fin_zone" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="blue" @click="menus.fin_zone = false;format_commandes_zones()">OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-card-actions>
                                </v-card>
                            </transition>
                        </v-flex>
                        <!-- Commandes par utilisateurs (donut) -->
                        <v-flex xs12 md4>
                            <transition name="appear">
                                <v-card v-if="commandes_user_ready" class="card-stat">
                                    <v-card-title primary-title>
                                        <div>
                                            <h3 class="title">Commande par utilisateurs</h3>
                                            <h4 class="subheading">{{dates.debut_user != "" && dates.fin_user != "" ? "(du " + dates.debut_user + " au " + dates.fin_user + ")" : " "}}</h4>
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <pie-chart :chartData="commandes_user"></pie-chart>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-menu :close-on-content-click="false" v-model="menus.debut_user" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px">
                                            <v-btn flat slot="activator">Début</v-btn>
                                            <v-date-picker color="blue" v-model="dates.debut_user" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="blue" @click="menus.debut_user = false; format_commandes_users()">OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <v-spacer></v-spacer>
                                        <v-menu :close-on-content-click="false" v-model="menus.fin_user" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px">
                                            <v-btn flat slot="activator">Fin</v-btn>
                                            <v-date-picker color="blue" v-model="dates.fin_user" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="blue" @click="menus.fin_user = false">OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-card-actions>
                                </v-card>
                            </transition>
                        </v-flex>
                        <!-- Vente par catégorie -->
                        <v-flex xs12 md4>
                            <transition name="appear">
                                <v-card v-if="commandes_categorie_ready" class="card-stat">
                                    <v-card-title primary-title>
                                        <div>
                                            <h3 class="title">Commande par catégorie</h3>
                                            <h4 class="subheading">{{dates.debut_categorie != "" && dates.fin_categorie != "" ? "(du " + dates.debut_categorie + " au " + dates.fin_categorie + ")" : ' '}}</h4>
                                        </div>
                                    </v-card-title>
                                    <v-card-text>
                                        <pie-chart :chartData="commandes_categorie"></pie-chart>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-menu :close-on-content-click="false" v-model="menus.debut_categorie" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px">
                                            <v-btn flat slot="activator">Début</v-btn>
                                            <v-date-picker color="blue" v-model="dates.debut_categorie" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="blue" @click="menus.debut_categorie = false">OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                        <v-spacer></v-spacer>
                                        <v-menu :close-on-content-click="false" v-model="menus.fin_categorie" transition="scale-transition" offset-y full-width :nudge-right="40" min-width="290px">
                                            <v-btn flat slot="activator">Fin</v-btn>
                                            <v-date-picker color="blue" v-model="dates.fin_categorie" no-title scrollable>
                                                <v-spacer></v-spacer>
                                                <v-btn flat color="blue" @click="menus.fin_categorie = false; format_commandes_categorie()">OK</v-btn>
                                            </v-date-picker>
                                        </v-menu>
                                    </v-card-actions>
                                </v-card>
                            </transition>
                        </v-flex>
                        <!-- Line chart -->
                        <v-flex xs8>
                            <transition name="appear">
                                <v-card class="mb-3 card-stat-large" v-if="commandes_dates_ready">
                                    <v-card-title primary-title>
                                        <h3 class="title">Commandes passés au cours du temps</h3>
                                    </v-card-title>
                                    <v-card-text>
                                        <line-chart :chartData="commandes_dates"></line-chart>
                                    </v-card-text>
                                </v-card>
                            </transition>
                        </v-flex>
                        <v-flex xs4>
                            <transition name="appear">
                                <v-container fluid v-if="!is_loading()">
                                    <v-layout row wrap>
                                        <v-flex xs12>
                                            <v-card>
                                                <v-card-title primary-title>
                                                    <div class="icon-overflow">
                                                        <v-icon color="primary">fas fa-money-bill-alt</v-icon>
                                                    </div>
                                                    <h3 class="title">Chiffre affaire : {{chiffre_affaire}}€</h3>
                                                </v-card-title>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-card>
                                                <v-card-title primary-title>
                                                    <div class="icon-overflow">
                                                        <v-icon color="primary">fas fa-shopping-basket</v-icon>
                                                    </div>
                                                    <h3 class="title">Plus gros panier : {{meilleur_panier}}€</h3>
                                                </v-card-title>
                                            </v-card>
                                        </v-flex>
                                        <v-flex xs12>
                                            <v-card>
                                                <v-card-title primary-title>
                                                    <div class="icon-overflow">
                                                        <v-icon color="primary">fas fa-user</v-icon>
                                                    </div>
                                                    <h3 class="title">Meilleur client : {{meilleur_client}}</h3>
                                                </v-card-title>
                                            </v-card>
                                        </v-flex>
                                    </v-layout>
                                </v-container>
                            </transition>
                        </v-flex>
                    </v-layout>
                </v-container>
            </div>
            <div class="text-xs-center mt-5" v-else :key="2">
                <v-progress-circular indeterminate :size="100" dark></v-progress-circular>
            </div>
        </transition-group>
    </v-container>
</template>

<script>
import http from "../common/http";
import PieChart from "./charts/PieChart";
import LineChart from "./charts/LineChart";

export default {
  name: "home",
  data() {
    return {
      colors: ["#45aaf2", "#fc5c65", "#26de81", "#2bcbba", "#fed330", "#a55eea", "#2196F3", "#4b7bec", "#E91E63", "#9C27B0", "#8BC34A", "#FFEB3B", "#313151"],
      users: [],
      commandes: [],
      zones: [],
      produits: [],
      categories: [],
      loading_produit: true,
      loading_commandes: true,
      loading_zone: true,
      loading_user: true,
      loading_categories: true,
      commandes_zone_ready: false,
      commandes_zone: {},
      commandes_user_ready: false,
      commandes_user: {},
      commandes_categorie_ready: false,
      commandes_categorie: {},
      commandes_dates_ready: false,
      commandes_dates: {},
      menus: {
        debut_zone: false,
        fin_zone: false,
        debut_user: false,
        fin_user: false,
        debut_categorie: false,
        fin_categorie: false
      },
      dates: {
        debut_zone: "",
        fin_zone: "",
        debut_user: "",
        fin_user: "",
        debut_categorie: "",
        fin_categorie: ""
      },
      meilleur_client: "",
      meilleur_panier: "",
      meilleur_zone: "",
      chiffre_affaire: ""
    };
  },
  mounted: function() {
    // on recupère les utilisateurs, commandes, les zones et les produits
    http.get("users").then(res => {
      this.users = res.data;
      this.loading_user = false;
    });
    http.get("orders").then(res => {
      this.commandes = res.data;
      this.loading_commandes = false;
    });
    http.get("zones").then(res => {
      this.zones = res.data;
      this.loading_zone = false;
    });
    http.get("products").then(res => {
      this.produits = res.data;
      this.loading_produit = false;
    });
    http.get("categories").then(res => {
      this.categories = res.data;
      this.loading_categories = false;
    });
    this.format_commandes_zones();
    this.format_commandes_users();
    this.format_commandes_categorie();
    this.format_commandes_dates();
    this.fill_stats();
  },
  methods: {
    is_loading: function() {
      return this.loading_produit || this.loading_commandes || this.loading_zone || this.loading_user;
    },
    format_commandes_zones: function() {
      /* 
        commandes_zone: {
        labels: ["Toulouse", "Paris", "Mas-Grenier","..."], 
        datasets: [{ data: [12,23,34,...] }]
      } */
      let commande_zone = {
        labels: [],
        datasets: [{ data: [], backgroundColor: this.colors }]
      };
      if (!this.is_loading()) {
        this.zones.map((zone, index) => {
          /* pour chaque zone, on cherche toutes les commandes passé par un utilisateur de la zone */
          let users_id = this.users.filter(u => u.zone_id == zone.id).map(u => u.id);

          /* On trie les commandes si l'utilisateur à mis des bornes */
          let commandes = this.dates.debut_zone != "" ? this.commandes.filter(c => c.created_at > this.dates.debut_zone) : this.commandes;
          commandes = this.dates.fin_zone != "" ? commandes.filter(c => c.created_at < this.dates.fin_zone) : commandes;
          /* Fin du trie */

          let number_of_commandes = commandes.filter(c => users_id.includes(c.user_id)).length;
          // si le nombre de commande > 0 on rentre la données
          if (number_of_commandes > 0) {
            commande_zone.labels.push(zone.nom);
            commande_zone.datasets[0].data.push(number_of_commandes);
          }
        });
        this.commandes_zone = commande_zone;
        this.commandes_zone_ready = true;
      } else {
        setTimeout(() => {
          return this.format_commandes_zones();
        }, 1000);
      }
    },
    format_commandes_users: function() {
      /* 
        commandes_user: {
        labels: ["Joshn Doe", "Hugo Sage", "Thomas Fel","..."], 
        datasets: [{ data: [12,23,34,...] }]
      } */
      let ret = {
        labels: [],
        datasets: [{ data: [], backgroundColor: this.colors }]
      };
      if (!this.is_loading()) {
        this.users.map((user, index) => {
          /* On trie les commandes si l'utilisateur à mis des bornes */
          let commandes = this.dates.debut_user != "" ? this.commandes.filter(c => c.created_at > this.dates.debut_user) : this.commandes;
          commandes = this.dates.fin_user != "" ? commandes.filter(c => c.created_at < this.dates.fin_user) : commandes;
          /* Fin du trie */

          /* pour chaque utilisateur, on cherche toutes les commandes passé */
          let number_of_commandes = commandes.filter(c => c.user_id == user.id).length;
          // si le nombre de commande > 0 on rentre la données
          if (number_of_commandes > 0) {
            ret.labels.push(user.username);
            ret.datasets[0].data.push(number_of_commandes);
          }
        });
        this.commandes_user = ret;
        this.commandes_user_ready = true;
      } else if (!this.commandes_user_ready) {
        setTimeout(() => {
          this.format_commandes_users();
        }, 1000);
      }
    },
    format_commandes_categorie: function() {
      /* 
        commandes_categorie: {
        labels: ["Chaussure", "Vetement", "Sac","..."], 
        datasets: [{ data: [12,23,34,...] }]
      } */
      let ret = {
        labels: [],
        datasets: [{ data: [], backgroundColor: this.colors }]
      };
      if (!this.is_loading()) {
        this.categories.map((categorie, index) => {
          /* On trie les commandes si l'utilisateur à mis des bornes */
          let commandes = this.dates.debut_categorie != "" ? this.commandes.filter(c => c.created_at > this.dates.debut_categorie) : this.commandes;
          commandes = this.dates.fin_categorie != "" ? commandes.filter(c => c.created_at < this.dates.fin_categorie) : commandes;
          /* Fin du trie */

          let quantite = 0;
          /* pour chaque categorie on recupère les ids des produits */
          let product_ids = this.produits.filter(p => p.categorie_id == categorie.id).map(p => p.id);
          commandes.forEach(c => {
            c.lines.map(line => {
              if (product_ids.includes(line.product_id)) {
                quantite += line.quantite;
              }
            });
          });
          // si le nombre de commande > 0 on rentre la données
          if (quantite > 0) {
            ret.labels.push(categorie.nom);
            ret.datasets[0].data.push(quantite);
          }
        });
        this.commandes_categorie = ret;
        this.commandes_categorie_ready = true;
      } else if (!this.commandes_categorie_ready) {
        setTimeout(() => {
          this.format_commandes_categorie();
        }, 1000);
      }
    },
    format_commandes_dates: function() {
      if (!this.is_loading()) {
        let ret = {
          datasets: [
            {
              type: "line",
              data: [],
              fill: false,
              backgroundColor: this.colors[0],
              borderColor: this.colors[0],
              label: "Vente au cours du temps"
            }
          ]
        };
        this.commandes.map(c => {
          let point = ret.datasets[0].data.find(point => point.x == c.created_at);
          if (point) {
            let point = ret.datasets[0].data.find(o => String(o.x) == String(c.created_at));
            point.y++;
          } else {
            ret.datasets[0].data.push({ x: String(c.created_at), y: 1 });
          }
        });
        this.commandes_dates = ret;
        this.commandes_dates_ready = true;
      } else {
        setTimeout(() => {
          this.format_commandes_dates();
        }, 1500);
      }
    },
    total_commande(order) {
      let accumulateur = 0;
      order.lines.map(l => {
        accumulateur += this.produits.find(p => p.id == l.product_id).prix * l.quantite;
      });
      return accumulateur;
    },
    total_client(user) {
      let accumulateur = 0;
      this.commandes.filter(c => c.user_id == user.id).map(c => {
        accumulateur += this.total_commande(c);
      });
      return accumulateur;
    },
    fill_stats: function() {
      if (!this.is_loading()) {
        let best_commande = this.commandes[0];
        this.commandes.map(c => {
          this.total_commande(c) > this.total_commande(best_commande) ? (best_commande = c) : best_commande;
        });
        this.meilleur_panier = this.total_commande(best_commande);

        let best_user = this.users[0];
        this.users.map(u => {
          this.total_client(u) > this.total_client(u) ? (best_user = u) : best_user;
        });
        this.meilleur_client = best_user.username;

        let chiffre_affaire = 0; // c'est peu walah!
        this.commandes.map(c => (chiffre_affaire += this.total_commande(c)));
        this.chiffre_affaire = chiffre_affaire;
      } else {
        setTimeout(() => {
          this.fill_stats();
        }, 1500);
      }
    }
  },
  components: { PieChart, LineChart }
};
</script>

<style>
.card-stat {
  margin: auto;
  max-width: 600px;
  position: relative;
}

.card-stat-large {
  margin: auto;
  position: relative;
}
.card-stat-large .chartjs-size-monitor {
  max-height: 350px;
}

.card {
  overflow: hidden;
  min-height: 80px;
}

.icon-overflow {
  position: absolute;
  right: 0;
  bottom: 0;
  transform: translate(15%, 15%);
  border-radius: 50%;
  background-color: rgba(109, 122, 229, 0.35);
}
.icon-overflow i {
  font-size: 80px;
}
</style>
