<template>
  <div>
    <div class="row">
      <div class="col-3">
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
                  <span style="font-size: 30px; color: green">网上图书馆</span>
                </template>
              </el-submenu>
              <div class="daa">
                <a
                  href="http://med.wanfangdata.com.cn/"
                  style="color: black; font-size: 20px"
                  >万方医学网</a
                >
              </div>
              <div class="daa">
                <a
                  href="http://www.chkd.cnki.net/"
                  style="color: black; font-size: 20px"
                  >中国知网</a
                >
              </div>
            </el-menu>
          </el-col>
        </el-row>
      </div>
      <div class="col-9">
        <el-divider content-position="right">网上图书馆</el-divider>
        <div style="display: flex" class="da">
          <a href="http://med.wanfangdata.com.cn/" style="display: flex">
            <button type="button" class="btn btn-outline-success">
              万方医学网
            </button></a
          >

          <a href="http://www.chkd.cnki.net/" style="display: flex">
            <button type="button" class="btn btn-outline-success">
              中国知网
            </button></a
          >
        </div>
      </div>
    </div>
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