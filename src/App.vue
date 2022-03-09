<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Menu from './views/Menu.vue'
import Orders from './views/Orders.vue'
export default {
  name: "App",
  components : {
    Menu,
    Orders,
  },
  data: () => ({
    
  }),
};
</script>
