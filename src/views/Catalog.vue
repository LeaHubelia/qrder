<template>
  <v-main>
    <h3>{{ menu.title }}</h3>
    <v-list>
      <v-list-item v-for="(m, index) in restaurants" :key="index" @click="showmenu(m)">
        <v-list-item-content class="menu">
            <v-row>
              <v-col>
                <v-img width="100%" height="100%" :src="m.img"></v-img>
              </v-col>
              <v-col>
                <v-row>
                  <v-col class="">
                    <h4 class="items">
                      {{ m.title }}
                    </h4>
                  </v-col>
                  <v-col  align="right">
                    <h5 style="margin-top: 10px">{{ m.address }}
                    </h5>
                  </v-col>
                </v-row>
                <v-row>
                  <v-list-item-subtitle class="description">{{
                    m.type
                  }}</v-list-item-subtitle>
                </v-row>
              </v-col>
            </v-row>
            <v-divider />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script>
import { getRestaurants, getRestaurantMenu } from "../server/db.js";

export default {
  name: "Catalog",
  data: () => ({
    menu: {
      title: "",
      menu_types: {},
    },
    restaurants :[]
  }),
  methods: {
    async getAllRestaurants() {
      this.restaurants = await getRestaurants();
      console.log(this.restaurants)
      this.menu.title = restaurants[2].title;
      const menu = await getRestaurantMenu(restaurants[2].id);
      this.menu.menu_types = menu;
    },

    showmenu(r){
        this.$router.push({name: 'menu', params: {restaurant:r}})
    }
  },
  async created() {
    await this.getAllRestaurants();
  },
};
</script>

<style>
h3 {
  color: white;
  background-color: black;
  padding: 20px;
}
.title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}
.menu {
  width: 100%;
}
.items {
  margin-left: -12px;
  width: 110px;
  margin-top: 10px;
}
.description {
  margin-bottom:20px;
}
</style>
