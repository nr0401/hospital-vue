<template>
  <div class="mt-3">
    <el-row>
      <el-col :span="3" :offset="0">
        <router-link to="/dept/outpatient/alldept">
          <button type="button" class="btn btn-outline-success">
            健康中心
          </button>
        </router-link>
      </el-col>
      <el-col :span="3" :offset="0">
        <router-link to="/dept/outpatient/alldept">
          <button type="button" class="btn btn-outline-success">
            电生理科
          </button>
        </router-link>
      </el-col>
    </el-row>

    <!-- <Xlnavigation /> -->
    <router-view></router-view>
  </div>
</template>
<script>
// import Xlnavigation from "@/components/client/administrative office/Xlnavigation.vue";
export default {
  name: "outpatient",
  components: {
    // Xlnavigation,
  },
};
</script>
<style lang="css">
</style>

