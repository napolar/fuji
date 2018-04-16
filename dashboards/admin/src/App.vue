<template>
  <v-app>
    <v-navigation-drawer dark enable-resize-watcher fixed app persistent v-model="drawer">
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i" :to="item.link">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title> Administration - {{user.username}}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tooltip bottom v-for="(item, i) in items" :key="i">
        <v-btn icon large :to="item.link" slot="activator">
          <v-icon>{{item.icon}}</v-icon>
        </v-btn>
        <span>{{item.title}}</span>
      </v-tooltip>
      <v-tooltip bottom>
        <v-btn icon large href="http://localhost:8080/" slot="activator">
          <v-icon>fas fa-power-off</v-icon>
        </v-btn>
        <span>Déconnection</span>
      </v-tooltip>
    </v-toolbar>
    <v-content>
      <v-snackbar :timeout=4000 bottom right v-model="snackbar_show" :color="snackbar_color">
        {{ snackbar_text }}
      </v-snackbar>
      <transition name="page" mode="out-in">
        <router-view/>
      </transition>
      <v-btn large dark fab fixed bottom left id="Money" @click="getMoney()">
        <v-progress-circular indeterminate dark :value="30" v-if="loading_money"></v-progress-circular>
        <v-icon color="white" v-else>far fa-money-bill-alt</v-icon>
      </v-btn>
    </v-content>
    <v-footer app dark>
      <v-spacer></v-spacer>
      <div class="body-2" style="padding: 10px 10px">&copy; 2018 with
        <v-icon color="primary">favorite</v-icon> by Fel, Sage, Van Rell</div>
    </v-footer>
  </v-app>
</template>

<script>
import http from "./common/http";

export default {
  name: "App",
  data() {
    return {
      user: {
        id: null,
        username: "",
        email: "",
        money: 0,
        zone_id: null
      },
      title: "Bienvenue Mr Tolstoï",
      snackbar_show: false,
      snackbar_text: "",
      snackbar_color: "success",
      loading_money: false, // attente de crédit de 500€
      drawer: false, // menu latéral
      clipped: true, // en dessous de la toolbar
      items: [
        {
          icon: "fas fa-home",
          title: "Accueil",
          link: "/"
        }
      ]
    };
  },
  methods: {
    getMoney: function() {
      this.loading_money = true;
      http
        .get("get_money")
        .then(res => {
          this.user.money += 500;
          this.snackbar_show = true;
          this.snackbar_text = "Vous avez reçu une généreuse dotation de 500€ !";
          this.snackbar_color = "success";
          this.loading_money = false;
        })
        .catch(err => {
          this.snackbar_show = true;
          this.snackbar_text = "Erreur lors de la liaison serveur";
          this.snackbar_color = "error";
          this.loading_money = false;
        });
    }
  },
  beforeCreate: function() {
    // Avant de commencer l'appli, on charge notre token dans le localStorage
    localStorage.setItem("fuji-token", document.getElementsByName("auth-token")[0].getAttribute("content"));
  },
  mounted: function() {
    http
      .get("who_am_i")
      .then(res => {
        this.user = res.data;
      })
      .catch(err => {
        this.snackbar_show = true;
        this.snackbar_text = "Erreur lors de la liaison au serveur";
        this.snackbar_color = "error";
      });
  }
};
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s, transform 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform: translateY(-30%);
}
#Money {
  transition: all 0.3s cubic-bezier(0, 1.27, 1, 1.35);
}
#Money:hover {
  transform: scale(1.2);
}
</style>
