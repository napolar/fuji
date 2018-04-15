<template>
    <v-toolbar app clipped-left>
        <v-toolbar-side-icon @click.stop="$emit('drawer', false)"></v-toolbar-side-icon>
        <v-btn v-if="drawer" icon @click.stop="miniVariant = !miniVariant">
            <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
        </v-btn>
        <v-toolbar-title v-text="title"></v-toolbar-title>
        <v-spacer></v-spacer>
    </v-toolbar>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      title: "Fuji - Bievenue Mr Tolstoï"
    };
  },
  props: ["drawer", "miniVariant"]
};
</script>

<style scoped>

</style>
