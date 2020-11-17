<template>
<div class="Pcr">
    <el-row>
      <el-col :span="5" :offset="1">
        <!-- 右侧菜单栏 -->
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo mt-3"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#000"
          active-text-color="#000"
          router
        >
          <router-link to="/patientrecord">
            <el-menu-item>
              <span slot="title" style="color: black; font-size: 20px">
                就诊信息
              </span>
            </el-menu-item>
          </router-link>
          <router-link to="/registrationrecord">
            <el-menu-item>
              <span slot="title" style="color: black; font-size: 20px">
                挂号记录
              </span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
      <el-col :span="18" :offset="0" class="px-5">
        <router-view> </router-view>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "library",
  data() {
    return {
      isCollapse: true,
    };
  },
};
</script>
<style lang="css">
.Pcr a {
  text-decoration: none;
}
</style>