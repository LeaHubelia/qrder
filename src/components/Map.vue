<template>
  <GoogleMap
  api-key="AIzaSyCor8yJBG0TfkFlEWG0D2G4SRbN6-PfVrU"
  style="width: 100%; height: 100%; "
  :center="center"
  :zoom="18"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from 'vue'
import { GoogleMap, Marker } from 'vue3-google-map'

export default defineComponent({
  components: { GoogleMap, Marker },
  props:{
      lat : { 
          type : Number,
          default : 0
      },
      lng : { 
          type : Number,
          default : 0
      }
  },
  data () {
      return {
          center : {}
      }
  },
  created() {
    this.center = { lat: this.lat, lng: this.lng }
  },
  watch : {
      lat(value) {
          this.center = { lat: value, lng: this.lng }
      },
      lng(value){
          this.center = { lat: this.lat, lng: value }
      }
  }
})
</script>