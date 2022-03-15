<template>
  <div class="top-bar">
    <v-icon @click="Back" style="margin-right: 20px"
      >mdi-arrow-left-thick</v-icon
    ><h3>{{ menu.title }}</h3>
  </div>
  <v-list>
    <v-list-item v-for="(m, index) in menu.menu_types" :key="index">
      <v-list-item-content class="menu">
        <v-list-item-title class="item-types">{{ m.title }}</v-list-item-title>
        <v-divider />
        <v-card
          class="item-card"
          :elevation="1"
          outlined
          v-for="item in m.menu_items"
          :key="item.name"
          style="padding: 20px; margin-top: 20px"
        >
          <MenuItemCard :item="item" />
        </v-card>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import { getRestaurant, getRestaurantMenu } from "../server/db.js";
import MenuItemCard from "../components/MenuItemCard.vue";
export default {
  name: "Menu",
  props: ["id", "isLandscape"],
  components: {
    MenuItemCard,
  },
  data: () => ({
    menu: {
      title: "",
      menu_types: {},
    },
  }),
  methods: {
    async getMenu() {
      const restaurant = await getRestaurant(this.id);
      this.menu.title = restaurant.title;
      const menu = await getRestaurantMenu(this.id);
      this.menu.menu_types = menu;
    },
    Back() {
      if (this.isLandscape && this.$vuetify.display.mdAndUp) {
        this.$router.push({ name: "catalog", params: {BackchosenRestaurantId:this.id }});
      } else
        this.$router.push({ name: "description", params: { id: this.id } });
    },
  },
  async created() {
    await this.getMenu();
  },
};
</script>

<style scoped>

.item-types {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}
.menu {
  width: 100%;
}
.top-bar {
  color: white;
  background-color: black;
  padding: 20px;
  display: flex;
}
@media screen and (min-width: 780px) {
  .item-card{ max-height: 270px; }
  .item-types{ font-size: 30px;}
}

</style>
