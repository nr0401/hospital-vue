<template>
  <div class="mt-3">
    <el-row>
      <el-col :span="3" :offset="0">
        <router-link to="/dept/administrativepage/alldept">
          <button type="button" class="btn btn-outline-success">
            肾病内科
          </button>
        </router-link>
      </el-col>
      <el-col :span="3" :offset="0">
        <router-link to="/dept/administrativepage/alldept">
          <button type="button" class="btn btn-outline-success">
            神经内科
          </button>
        </router-link>
      </el-col>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "administrativepage",
  components: {
  },
};
</script>
<style lang="css">
</style>

