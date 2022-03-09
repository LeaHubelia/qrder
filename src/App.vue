<template>
  <v-app>
    <v-main>
      <router-view />
  <NavBar/>
    </v-main>
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
    
  }),
};
</script>
