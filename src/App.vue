<template>
  <div id="app">

    <div v-if="$route.meta.keepAlive">
      <topbar></topbar>

    </div>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <div v-if="$route.meta.a">
      <foot></foot>

    </div>
  </div>
</template>

<script>
  import topbar from '@/components/topbar'
  import foot from '@/components/foot'
export default {
  name: 'App',
  components:{
      topbar,
    foot
  }


}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}






</style>
