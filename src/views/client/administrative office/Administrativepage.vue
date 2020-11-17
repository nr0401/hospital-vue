<template>
  <div>
    <div class="row">
      <div class="col-3">
        <Xlnavigation />
      </div>
      <div class="col-9">
        <router-link class="nav-link" to="/alldept" style="display: flex">
          <button type="button" class="btn btn-outline-success">
            神经内科
          </button></router-link
        >
      </div>
    </div>
  </div>
</template>
<script>
import Xlnavigation from "@/components/client/administrative office/Xlnavigation.vue";

export default {
  name: "administrativepage",
  components: {
    Xlnavigation,
  },
};
</script>
<style lang="css">
</style>

