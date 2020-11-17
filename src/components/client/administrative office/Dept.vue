<template>
  <div>
    <el-row class="tac">
      <el-col :span="12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span style="font-size: 30px; color: green">临床科室</span>
            </template>
          </el-submenu>

          <router-link
            class="nav-link"
            to="/dept"
            style="color: black; font-size: 20px"
            >神经内科</router-link
          >

          <router-link
            class="nav-link"
            to="/dept"
            style="color: black; font-size: 20px"
            >神经内科</router-link
          >
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>


<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  /* width: 300px; */
  min-height: 400px;
}
</style>

<script>
export default {
  name: "Dept",
  data() {
    return {
      isCollapse: true,
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>