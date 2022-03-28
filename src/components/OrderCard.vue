<template>
    <v-row>
        <v-col cols="4" sm="3">
        <v-img width="100%" height="100%" :src="order.img"></v-img>
        </v-col>
        <v-col cols="6" sm="7">
          <v-list-item-title>
              {{ order.restaurantName }}
          </v-list-item-title>
          <v-list-item-subtitle>
              {{ order.description }}
          </v-list-item-subtitle>
          <v-list-item-subtitle>
              {{ format_date(order.date) }} - {{ order.total }} $ CA
          </v-list-item-subtitle>
        </v-col>
        <v-col cols="2" sm="2" align-self="center">
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
</template>

<script>
import moment from 'moment'

export default {
  props: {
    order: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    format_date(timestamp){
      const msTimestamp = timestamp * 1000
      const date = new Date(msTimestamp)
         if (date) {
           return moment(String(date)).format('MMM Do')
          }
      },
  },
};
</script>

<style scoped>
h4 {
  margin-left: -12px;
}
.description {
  margin-bottom: 20px;
}

.smallFontSize {
  font-size: 14px;
}

.otherFontSize {
  font-size: 24px;
}


</style>
