<template>
  <v-main :class="isLandscape ? this.$vuetify.display.md ? 'landscape' : this.$vuetify.display.lg ? 'landscapeLargeScreen' : 'landscapeXLScreen' : ''">
      <h3 v-if="!isLandscape" class="top-bar"><v-icon  style="margin-right:20px" @click="Back" >mdi-arrow-left-thick</v-icon>Restaurant Information</h3>
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
    isLandscape : {
      type : Boolean,
      default: false,
    }
  },
  data() {
    return {
      currentRestaurant: {},
      windowHeight: window.innerHeight,
      windowWidth : window.innerWidth,
    };
  },
  components: {
    Map,
  },
  mounted() {
        this.$nextTick(() => {
            window.addEventListener('resize', this.onScreenResize);
        })
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
        this.$router.push({name: 'menu', params: {id: this.id, isLandscape: this.isLandscape}})
    },
    onScreenResize() {
            this.windowHeight = window.innerHeight;
            this.windowWidth = window.innerWidth;
            if(this.windowWidth > this.windowHeight && this.$vuetify.display.smAndUp){
              this.$router.push({name:"catalog", params: {BackchosenRestaurantId:this.id}})
            }
        }
  },
  async created() {
    if(this.id.length > 0){
      this.currentRestaurant = await this.getCurrentRestaurant(this.id);
      let dollars = '';
      for(let i=0; i<this.currentRestaurant.priceLevel; i++){
        dollars +='$'
      }
      this.currentRestaurant.priceLevel = dollars;
    }
  },
  watch : {
    async id(value) {
      this.currentRestaurant = await this.getCurrentRestaurant(value);
        let dollars = '';
        for(let i=0; i<this.currentRestaurant.priceLevel; i++){
          dollars +='$'
        }
        this.currentRestaurant.priceLevel = dollars;
    }
  }
};
</script>

<style>
.top-bar {
  color: white;
  background-color: black;
  padding: 20px;
  display: flex;
}
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
.landscape {
  margin-left : 15% !important;
  padding: 0px !important;
  /* width : 88% */
}
.landscapeLargeScreen {
  margin-left : 24% !important;
  padding: 0px !important;
  /* width : 70% */
}

.landscapeXLScreen {
  margin-left : 30% !important;
  padding: 0px !important;
}
.v-main__wrap {
  position: inherit !important;
}
</style>
