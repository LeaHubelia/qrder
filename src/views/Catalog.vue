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
  <v-main class="large-screen">
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
  props : {
    BackchosenRestaurantId : {
      type : String,
      default : ''
    }
  },
  data: () => ({
    restaurants :[],
    chosenRestaurantId : '',
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
    onScreenResize() {
            this.isLandscape = window.innerWidth > window.innerHeight;
        }

  },
  mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onScreenResize);
        })
    },
  unmounted() { 
      window.removeEventListener('resize', this.onScreenResize); 
  },
  async created() {
    await this.getAllRestaurants(); 
    if(this.BackchosenRestaurantId.length === 0)
      this.chosenRestaurantId = this.restaurants[0].id;
    else
      this.chosenRestaurantId = this.BackchosenRestaurantId;
    this.isLandscape = window.innerWidth > window.innerHeight;
  },
};
</script>

<style lang="scss" scoped>
  .v-main.large-screen {
    padding-left: 40% !important;
  }
</style>

