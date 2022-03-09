  <template>
  <v-bottom-navigation dark :value="value"
    color="white">
    <v-btn value="Menu">
      <span>Menu</span>
      <v-icon>mdi-food</v-icon>
    </v-btn>

    <v-btn value="Scan">
      <span>Scan</span>
      <v-icon>mdi-qrcode</v-icon>
    </v-btn>

    <v-btn value="Orders">
      <span>Orders</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>

    <v-btn value="Profile">
      <span>Profile</span>
      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
  export default {
    data: () => ({ value: '1' }),
  }
</script>