<template>
  <el-row>
    <el-col :xs="10" :sm="8" :md="6" :lg="4" id="nleft">
      <!-- 左上角logo -->
      智慧医疗后台系统
    </el-col>
    <el-col :xs="14" :sm="16" :md="18" :lg="20" id="nright">
      <el-row>
        <el-col
          :xs="{ span: 16, push: 8 }"
          :sm="{ span: 8, push: 16 }"
          :md="{ span: 6, push: 18 }"
          :lg="{ span: 4, push: 20 }"
          style="padding-top: 10px"
        >
          <!-- 用户头像 -->
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
            :size="40"
          >
          </el-avatar>
          <i> 欢迎你，用户</i>
          <!-- 下拉按钮 -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <router-link :to="{ path: '/serve/users/patients' }">
                <el-dropdown-item>我的患者</el-dropdown-item>
              </router-link>
              <el-dropdown-item divided>退出</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "inav",
};
</script>
<style lang="css">
#nleft {
  background-color: #36bba9;
  text-align: center;
  line-height: 60px;
  font-size: 1.45rem;
  color: white;
  height: 60px;
}
#nright {
  background-color: rgb(255, 255, 255);
  height: 60px;
}
</style>