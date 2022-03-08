<template>
  <v-main>
    <v-list>
      <v-list-item v-for="(r, index) in restaurants" :key="index" @click="showmenu(r.id)">
        <v-list-item-content class="menu">
            <v-row>
              <v-col>
                <v-img width="100%" height="100%" :src="r.img"></v-img>
              </v-col>
              <v-col>
                <v-row>
                  <v-col class="">
                    <h4 class="items">
                      {{ r.title }}
                    </h4>
                  </v-col>
                  <v-col  align="right">
                    <h5 style="margin-top: 10px">{{ r.address }}
                    </h5>
                  </v-col>
                </v-row>
                <v-row>
                  <v-list-item-subtitle class="description">{{
                    r.type
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

    showmenu(id){
      console.log(id)
        this.$router.push({name: 'menu', params: {id: id}})
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
