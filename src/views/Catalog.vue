<template>
  <v-main>
    <v-list>
      <v-list-item v-for="(r, index) in restaurants" :key="index" @click="showinfo(r.id)">
        <v-card :elevation="1" outlined class="menu" >
                <v-img  width="100%" :src="r.img"></v-img>
              <v-col style="padding-left:20px; padding-right:20px">
                <v-row>
                  <v-col >
                    <h4 :class="[this.$vuetify.display.smAndUp ? 'text-h4  items' : 'text-h6 items']" >
                      <!--  -->
                      {{ r.title }}
                    </h4>
                  </v-col>
                  <!-- <v-col  align="right">
                    <h5 >{{ r.address }}
                    </h5>
                  </v-col> -->
                </v-row>
                <v-row>
                  <v-list-item-subtitle :class="[this.$vuetify.display.smAndUp ? 'text-subtitle-1  description' : 'text-subtitle-2  description']">{{
                    r.type
                  }} - {{trimAddress(r.address)}}</v-list-item-subtitle>
                  <v-spacer/>
                  <span>{{r.priceLevel}}</span>
                </v-row>
              </v-col>
        </v-card>
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script>
import { getRestaurants } from "../server/db.js";

export default {
  name: "Catalog",
  data: () => ({
    restaurants :[]
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
        this.$router.push({name: 'description', params: {id: id}})
    },

    trimAddress(ad){
      const split = ad.split(',');
      let road = split[0].split(' ');
      let trim = ''
      road.map(r => {
        if(isNaN(r)){
          trim += r + ' '
        }
      })
      return trim;
    }
  },
  async created() {
    await this.getAllRestaurants();
  },
  mounted () {
      console.log(this.$vuetify.display.mdAndUp)
    },
};
</script>

<style scoped>

.title {
  font-size: 20px;
  font-weight: 700;
}
.menu {
  width: 100%;
}
.items {
  /* margin-left: -12px; */
  width: 500px;
  /* margin-top:-20px */
}
.description {
  margin-bottom:20px;
}
</style>
