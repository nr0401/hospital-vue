<template>
  <div class="menu">
    <!-- 菜单栏 -->
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      router
      scroll
    >
      <!-- 首页统计 默认 -->
      <el-menu-item index="/serve">
        <i class="el-icon-pie-chart"></i>
        <span slot="title">首页统计</span>
      </el-menu-item>
      <!-- 用户信息 （医生、患者等） -->
      <el-submenu index="2">
        <div slot="title" class="title">
          <i class="el-icon-user title"></i>
          <span class="title">用户管理</span>
        </div>
        <el-menu-item-group>
          <!-- 医生信息 -->
          <el-menu-item index="/serve/users/doc">医生</el-menu-item>
          <!-- 患者信息 -->
          <el-menu-item index="/serve/users/patients">患者信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 挂号信息 （当前挂号，已就诊等） -->
      <el-menu-item index="/serve/registration" @click="registration">
        <i class="el-icon-first-aid-kit"></i>
        <span slot="title">挂号信息</span>
      </el-menu-item>
      <!-- 排班信息 -->
      <el-menu-item index="/serve/working">
        <i class="el-icon-s-order"></i>
        <span slot="title">排班信息</span>
      </el-menu-item>
      <!-- 药品管理 -->
      <el-submenu index="5">
        <div slot="title" class="title">
          <i class="el-icon-coin"></i>
          <span slot="title">收费管理</span>
        </div>
        <el-menu-item-group>
          <!-- 收益信息 -->
          <el-menu-item index="/serve/logistics/charge">收费信息</el-menu-item>
          <!-- 药房管理 -->
          <el-menu-item index="/serve/logistics/drug">药房管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- 系统设置 -->
      <!-- <el-menu-item index="/serve/system">
        <i class="el-icon-setting"></i>
        <span slot="title">系统管理</span>
      </el-menu-item> -->
    </el-menu>
    
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  name: "imenu",
  data() {
    return {};
  },
  computed: {
  },
  methods: {
    ...mapActions(["gainRegistrations"]),
    registration() {
      this.gainRegistrations();
    },
  },
};
</script>
<style lang="css">
.menu {
  margin-top: 60px;
}
.el-menu {
  background: rgba(255, 255, 255, 0);
}
.el-menu-item i,
.title i {
  color: #fff;
}
.el-menu-item,
.title {
  color: #fff;
  text-align: center;
}
.el-menu-item.is-active {
  color: #36bba9;
  background-color: #fff;
}
</style>