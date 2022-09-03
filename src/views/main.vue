<template>
  <v-app id="inspire" class="">
    <AppBar />

    <div class="content">
      <router-view class="bg-white rounded-lg" />
    </div>
  </v-app>
</template>

<script>
  import AppBar from '../components/appBar.vue'
  export default {
    components: {
      AppBar,
    },
  }
</script>

<style lang="scss" scoped>
  .content {
    padding-left: 8%;
    padding-right: 8%;
    padding-top: 3%;
    padding-bottom: 3%;
  }

  .bg-white {
    background-color: white;
    min-height: 80vh;
    padding: 10px;
  }
</style>