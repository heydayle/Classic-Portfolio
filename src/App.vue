<template>
  <v-app>
    <v-main>
      <router-view :key="$route.fullPath" />
    </v-main>
  </v-app>
</template>
<script>

export default {
  created() {
    this.track()
  },
  methods: {
    track () {
      this.$ga.page('/')
    }
  }
};
</script>
<style lang="scss" scope>
  @import "./styles"
</style>
