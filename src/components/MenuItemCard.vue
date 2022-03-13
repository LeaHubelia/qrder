<template>
            <v-row>
              <v-col>
                <v-img width="100%" height="100%" :src="item.img"></v-img>
              </v-col>
              <v-col>
                <v-row>
                  <v-col width="60%">
                    <h4 :class="[this.$vuetify.display.smAndUp ? 'otherFontSize  items' : 'smallFontSize items']">
                      {{ item.name }}
                    </h4>
                  </v-col>
                  <v-col class=".col-6 .col-md-4" align="right">
                    <h5  style='margin-top: 10px;'>{{ item.price }} $</h5>
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
    props : {
        item : {
            type : Object,
            default : () => {}
        }
    }
}
</script>

<style scoped>
.items {
  margin-left: -12px;
  margin-top: 10px;
}
.description {
  margin-bottom:20px;
}

.smallFontSize { 
  font-size: 14px;
  width: 70px;
}

.otherFontSize {
  font-size : 18px;
  width: 180px;
}

</style>