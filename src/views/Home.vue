<template>
  <div id="app" class="clinet">
    <div v-if="!$route.meta.keepAlive">
      <iNav />
      <router-view></router-view>
        <iBottom />
    </div>
    <router-view v-if="$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import iNav from "../components/client/Nav.vue";
import iBottom from "../components/client/Bottom.vue";
export default {
  components: {
    iNav,
    iBottom,
  },
};
</script>

<style>
.clinet {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
