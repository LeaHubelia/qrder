<template>
  <v-main>
    <v-list>
      <v-list-item v-for="(o, index) in orders" :key="index">
        <v-list-item-content class="menu">
            <v-row>
              <v-col class="image">
                <v-img width="100%" height="100%" :src="o.img"></v-img>
              </v-col>
              <v-col>
                <v-row>
                  <v-col>
                    <v-list-item-title>
                      {{ o.restaurantName }}
                    </v-list-item-title>
                  </v-col>                
                </v-row>
                <v-row>
                  <v-col md="8" sm="8">
                    <v-list-item-subtitle>
                      {{ o.description }}
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col>
                    <v-list-item-subtitle>
                      {{ o.date }} - {{ o.total }} $ CA
                    </v-list-item-subtitle>
                  </v-col>
                </v-row>
              </v-col>
              <v-col align-self="center">
                <div class="text-center align">
                  <v-btn
                    rounded
                    color="normal"
                    dark
                  >
                    Details
                  </v-btn>
                </div>
              </v-col>
            </v-row>
            <v-divider />
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-main>
</template>

<script>
// import { getOrders } from "../server/db.js";

// export default {
//   name: "Orders",
//   data: () => ({
//     orders :[]
//   }),
//   methods: {
//     async getAllOrders() {
//       this.orders = await getOrders(this.id);
//     },
//   },
//   async created() {
//     await this.getAllOrders();
//   },
// };
// </script>

<style>

.title {
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
}
.menu {
  width: 100%;
}



</style>
