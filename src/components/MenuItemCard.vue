<template>
  <v-row>
    <v-col cols="4" sm="3">
      <v-img width="100%" height="100%" :src="item.img"></v-img>
    </v-col>
    <v-col cols="8" sm="9">
      <v-row>
        <v-col cols="8">
          <h4
            :class="[
              this.$vuetify.display.smAndUp ? 'otherFontSize' : 'smallFontSize',
            ]"
          >
            {{ item.name }}
          </h4>
        </v-col>
        <v-col cols="4" align="right">
          <h4
            :class="[
              this.$vuetify.display.smAndUp ? 'otherFontSize' : 'smallFontSize',
            ]"
          >
            {{ item.price }} $
          </h4>
        </v-col>
      </v-row>
      <v-row>
        <v-list-item-subtitle class="description">{{
          item.description
        }}</v-list-item-subtitle>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {},
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
