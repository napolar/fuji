<template>
    <div>
        <v-container>
            <h1>Bonjour {{name}}</h1>
            <ul>
                <li v-for="element in list" :key="element">{{element}}</li>
            </ul>
            <v-text-field v-model="newElem"></v-text-field>
            <v-btn depressed small @click="addElement()">Ajouter</v-btn>
        </v-container>
    </div>
</template>

<script>
import http from "../common/http";

export default {
  name: "test",
  data() {
    return {
      name: "Fanny",
      newElem: "",
      list: []
    };
  },
  mounted: function() {
    http.get("products").then(res => {
      console.log(res.data);
      res.data.map(p => this.list.push(p.nom));
    });
  }
};
</script>