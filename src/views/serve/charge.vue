<template>
  <!-- 收费信息 -->
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-5 mt-3">
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path:'/serve/logistics/charge'}"> 收费信息</el-breadcrumb-item>

      <el-breadcrumb-item > 收费信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="22" :offset="1" class="my-3">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <el-menu
            :default-active="$route.path"
            class="el-menu-demo"
            mode="horizontal"
            router
            scroll
          >
            <el-menu-item index="/serve/logistics/charge/all"
              >全部收费</el-menu-item
            >
            <el-menu-item index="/serve/logistics/charge/has"
              >已收费</el-menu-item
            >
            <el-menu-item index="/serve/logistics/charge/no"
              >未收费</el-menu-item
            >
          </el-menu>
          <router-view></router-view>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {};
</script>