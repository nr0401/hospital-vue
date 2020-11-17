<template>
  <div>
    <div class="row">
      <div class="col-3">
        <Dept />
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
import Dept from "@/components/client/administrative office/Dept.vue";

export default {
  name: "dept",
  components: {
    Dept,
  },
};
</script>
<style >
button {
  width: 200px;
}
</style>

