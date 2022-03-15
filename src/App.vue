<template>
  <v-app>
    <v-main :class="this.isLandscape && this.$vuetify.display.mdAndUp ? 'large-screen': ''" style="padding-left : 0px;">
      <router-view />
    </v-main>
      <NavBar/>
  </v-app>
</template>

<script>
import NavBar from '../src/components/NavBar.vue'
export default {
  name: "App",
  components : {
    NavBar
  },
  data: () => ({
    isLandscape : false
  }),
  created() {
    this.isLandscape = window.innerWidth > window.innerHeight;
  }
};
</script>
