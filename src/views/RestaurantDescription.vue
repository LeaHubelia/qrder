<template>
  <v-main>
      <h3><v-icon @click="Back" style="margin-right:20px">mdi-arrow-left-thick</v-icon>Restaurant Information</h3>
      <v-col align="center">
    <v-col class="info">
      <p>{{ currentRestaurant.title }}</p>
      <span>{{ currentRestaurant.address }}</span>
      <v-row style="margin-left: 2px; margin-top: 10px">
        <p>{{ currentRestaurant.type }}</p>
        <v-spacer />
        <p>{{ currentRestaurant.priceLevel }}</p>
      </v-row>
    </v-col>
    <v-col align="center">
      <Map :lat="currentRestaurant.lat" :lng="currentRestaurant.lng" />
    </v-col>
    <v-btn @click="showMenu" class="descbutton">GO TO MENU</v-btn>
      </v-col>
  </v-main>
</template>
<script>
import Map from "../components/Map.vue";
import { getRestaurant } from "../server/db.js";
export default {
  props: {
    restaurant: {
      type: Object,
      default: () => {},
    },
    id: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      currentRestaurant: {},
    };
  },
  components: {
    Map,
  },
  methods: {
    async getCurrentRestaurant(id) {
      const temp = await getRestaurant(id);
      return temp;
    },
    Back(){
        this.$router.push({path: "/"})
    },
    showMenu(){
        this.$router.push({name: 'menu', params: {id: this.id}})
    }
  },
  async created() {
    this.currentRestaurant = await this.getCurrentRestaurant(this.id);
        let dollars = '';
        for(let i=0; i<this.currentRestaurant.priceLevel; i++){
          dollars +='$'
        }
        this.currentRestaurant.priceLevel = dollars;
  },
};
</script>

<style>
.info {
  max-width: 80%;
  border: 1px black solid !important;
  padding: 20px !important;
  margin: 20px;
  text-align: left;
}
.descbutton {
  background-color: black;
  color: white !important;
  width: 80%;
}
</style>
