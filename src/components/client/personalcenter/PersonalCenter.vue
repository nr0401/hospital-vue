<template>
  <div class="row">
    <div class="col-4">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <span slot="title" style="font-size: 20px">
            <router-link class="nav-link" to="/patientrecord"
              >就诊信息
            </router-link></span
          >
        </el-menu-item>
        <el-menu-item index="2">
          <span slot="title" style="font-size: 20px"
            ><router-link class="nav-link" to="/registrationrecord"
              >挂号记录
            </router-link></span
          >
        </el-menu-item>
      </el-menu>
    </div>
    <div class="col-8">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {};
</script>