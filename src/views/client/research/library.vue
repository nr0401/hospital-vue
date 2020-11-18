<template>
  <div class="libr">
    <el-row>
      <el-col :span="5" :offset="1">
        <!-- 右侧菜单栏 -->
        <el-menu
          default-active="/library"
          class="el-menu-vertical-demo mt-3"
          @open="handleOpen"
          @close="handleClose"
          background-color="#fff"
          text-color="#000"
          active-text-color="#000"
        >
          <el-menu-item index="library">
            <span slot="title" style="font-size: 30px; color: green"
              >网上图书馆</span
            >
          </el-menu-item>
          <a href="http://med.wanfangdata.com.cn/">
            <el-menu-item index="1">
              <span slot="title" style="color: black; font-size: 20px"
                >万方医学网</span
              >
            </el-menu-item></a
          >
          <a href="http://www.chkd.cnki.net/">
            <el-menu-item index="1">
              <span slot="title" style="color: black; font-size: 20px"
                >中国知网</span
              >
            </el-menu-item></a
          >
        </el-menu>
      </el-col>
      <el-col :span="18" :offset="0" class="px-5">
        <el-divider content-position="right">网上图书馆</el-divider>
        <!-- 按钮 -->
        <div style="display: flex" class="da">
          <a href="http://med.wanfangdata.com.cn/" style="display: flex">
            <button type="button" class="btn btn-outline-success ml-3">
              万方医学网
            </button>
          </a>

          <a href="http://www.chkd.cnki.net/" style="display: flex">
            <button type="button" class="btn btn-outline-success ml-3">
              中国知网
            </button>
          </a>
        </div>
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
.libr a {
  text-decoration: none;
}
</style>