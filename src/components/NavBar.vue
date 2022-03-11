  <template>
  <v-bottom-navigation 
  v-model="value" 
    color="blue"
    dark
    background-color="blue-grey"
    >
    <v-btn @click="value='Catalog'" to="/" class="navBtn" value="Catalog">
      <v-icon>mdi-food</v-icon>
      <span>Catalog</span>

    </v-btn>

    <v-btn  @click="value='Scan'" to="/scan"  class="navBtn"  value="Scan">
      <v-icon>mdi-qrcode</v-icon>
      <span>Scan</span>

    </v-btn>

    <v-btn @click="value='Orders'" to="/orders"  class="navBtn" value="Orders">
      <v-icon>mdi-history</v-icon>
            <span>Orders</span>

    </v-btn>

    <v-btn to="/profile" @click="value='Profile'" class="navBtn" value="Profile">
      <v-icon>mdi-account</v-icon>
            <span>Profile</span>

    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: 'Catalog' }),
  }
</script>



