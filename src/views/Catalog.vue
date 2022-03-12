<template>
<div v-if="isLandscape && this.$vuetify.display.mdAndUp" >
  <v-navigation-drawer 
      permanent
      left
      app
	  style="width:40% !important"
	  >
      <v-list>
      <v-list-item v-for="(r, index) in restaurants" :key="index" @click="showinfo(r.id)">
        <RestaurantCard :r="r" />
      </v-list-item>
    </v-list>
    </v-navigation-drawer>
  <v-main style="padding : 0px !important;" class="hidden-sm-and-down" >
    <RestaurantDescription :id ="chosenRestaurantId" :isLandscape="isLandscape"/>
  </v-main>
  
</div>
  <v-main v-else>
  <v-list>
      <v-list-item v-for="(r, index) in restaurants" :key="index" @click="showinfo(r.id)">
        <RestaurantCard :r="r" />
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script>
import { getRestaurants } from "../server/db.js";
import RestaurantCard from "../components/RestaurantCard.vue"
import RestaurantDescription  from "../views/RestaurantDescription.vue"
export default {
  name: "Catalog",
  components : { 
    RestaurantCard,
    RestaurantDescription
  },
  data: () => ({
    restaurants :[],
    chosenRestaurantId : 0,
    windowHeight: window.innerHeight,
    windowWidth : window.innerWidth,
    isLandscape : false,
  }),
  methods: {
    async getAllRestaurants() {
      this.restaurants = await getRestaurants();
      this.restaurants.map(r => {
        let dollars = '';
        for(let i=0; i<r.priceLevel; i++){
          dollars +='$'
        }
        r.priceLevel = dollars;
      })
    },
    showinfo(id){
        if(this.isLandscape && this.$vuetify.display.mdAndUp){
          this.chosenRestaurantId = id;
        }
        else {
            this.$router.push({name: 'description', params: {id: id}})
        }
    },
    onResize() {
            this.windowHeight = window.innerHeight;
            this.windowWidth = window.innerWidth;
            this.isLandscape = this.windowWidth > this.windowHeight;
        }

  },
  mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onResize);
        })
    },
  async created() {
    await this.getAllRestaurants();
    this.chosenRestaurantId = this.restaurants[0].id;
    this.isLandscape = this.windowWidth > this.windowHeight;
  },
};
</script>

