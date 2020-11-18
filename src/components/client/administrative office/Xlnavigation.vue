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
              <span style="font-size: 30px; color: green">科室导航</span>
            </template>
          </el-submenu>
          <router-link
            class="nav-link"
            to="/administrativepage"
            style="color: black; font-size: 20px"
            >临床科室</router-link
          >

          <router-link
            class="nav-link"
            to="/outpatient"
            style="
              color: black;
              font-size: 20px;
              position: relative;
              left: 20px;
            "
            >门诊医技科室</router-link
          >
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>


<style>
</style>

<script>
export default {
  name: "Xlnavigation",
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
