<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs8 md4>
                <v-card>
                    <v-card-media src="src" height="200px">
                    </v-card-media>
                    <v-card-title primary-title>
                        <div>
                            <h3 class="headline mb-0">Thomas FEL</h3>
                            <div>Client</div>
                        </div>
                    </v-card-title>
                    <v-card-actions>
                        <v-btn flat color="primary">Retour</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
export default {
  name: "user",
  data() {
    return {};
  }
};
</script>

<style scoped>

</style>
