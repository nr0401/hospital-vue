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
              <span style="font-size: 30px; color: green">药物实验</span>
            </template>
          </el-submenu>

          <router-link
            class="nav-link"
            to="/drug"
            style="color: black; font-size: 20px"
            >国家药物临床试验机构</router-link
          >

          <router-link
            class="nav-link"
            to="/monad"
            style="color: black; font-size: 20px"
            >伦理委员会</router-link
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
  name: "Drug",
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