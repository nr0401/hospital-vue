<template>
  <div class="menu">
    <!-- 菜单栏 -->
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
    >
      <!-- 首页统计 默认 -->
      <router-link class="text-decoration-none" to="/serve">
        <el-menu-item index="1">
          <i class="el-icon-pie-chart"></i>
          <span slot="title">首页统计</span>
        </el-menu-item>
      </router-link>
      <!-- 用户信息 （医生、患者等） -->
      <el-submenu index="2">
        <div slot="title" class="title">
          <i class="el-icon-user title"></i>
          <span class="title">用户管理</span>
        </div>
        <el-menu-item-group>
          <!-- 医生信息 -->
          <router-link class="text-decoration-none" to="/serve/users/doc">
            <el-menu-item index="2-1">医生</el-menu-item>
          </router-link>
          <!-- 患者信息 -->
          <router-link class="text-decoration-none" to="/serve/users/patients">
            <el-menu-item index="2-2">患者信息</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <!-- 挂号信息 （当前挂号，已就诊等） -->
      <router-link class="text-decoration-none" to="/serve/registration">
        <el-menu-item index="3">
          <i class="el-icon-first-aid-kit"></i>
          <span slot="title">挂号信息</span>
        </el-menu-item>
      </router-link>
      <!-- 排班信息 -->
      <router-link class="text-decoration-none" to="/serve/working">
        <el-menu-item index="4">
          <i class="el-icon-s-order"></i>
          <span slot="title">排班信息</span>
        </el-menu-item>
      </router-link>
      <!-- 药品管理 -->
      <el-submenu index="5">
        <div slot="title" class="title">
          <i class="el-icon-coin"></i>
          <span slot="title">收费管理</span>
        </div>
        <el-menu-item-group>
          <!-- 收益信息 -->
          <router-link class="text-decoration-none" to="/serve/logistics/charge">
            <el-menu-item index="5-1">收费信息</el-menu-item>
          </router-link>
          <!-- 药房管理 -->
          <router-link class="text-decoration-none" to="/serve/logistics/drug">
            <el-menu-item index="5-2">药房管理</el-menu-item>
          </router-link>
        </el-menu-item-group>
      </el-submenu>
      <!-- 系统设置 -->
      <router-link class="text-decoration-none" to="/serve/system">
        <el-menu-item index="6">
          <i class="el-icon-setting"></i>
          <span slot="title">系统管理</span>
        </el-menu-item>
      </router-link>
    </el-menu>
  </div>
</template>


<script>
export default {
  name: "imenu",
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