<template>
  <div>
    <div class="row">
      <div class="col-lg-3 col-sm-12">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <!--搜索框-->
          <!-- <el-select
            v-model="value"
            multiple
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            :loading="loading"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select> -->

          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span style="font-size: 20px" @click="keshi()"
                >按学科预约挂号</span
              >
            </template>
            <el-submenu index="1-1" v-for="(a, index) in list" :key="index">
              <template slot="title"
                ><span style="font-size: 15px" @click="keshi2(index)">{{
                  a.title
                }}</span></template
              >
              <el-menu-item index="1-1-1"
                ><router-link
                  class="nav-link p-0"
                  v-for="(d, index1) in depts"
                  :key="index1"
                  to="/doctorInformation"
                  ><span style="font-size: 15px">{{
                    d.title
                  }}</span></router-link
                ></el-menu-item
              >
              <el-menu-item index="1-1-2">肺间质疾病门诊</el-menu-item>
            </el-submenu>
            <el-submenu index="1-2">
              <template slot="title">心血管内科</template>
              <el-menu-item index="1-2-1">选项1</el-menu-item>
              <el-menu-item index="1-2-2">选项1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="2">
            <template slot="title"
              ><router-link class="nav-link" to="/searchpage">
                <i class="el-icon-search"></i>
                <span style="font-size: 20px"
                  >按照专家名称查找</span
                ></router-link
              ></template
            >
          </el-menu-item>
        </el-menu>
      </div>
      <!--右边视图-->
      <div class="col-lg-8 col-sm-12">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: {},
      depts: {},
    };
  },

  mounted() {},
  components: {},
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    keshi() {
      //获得所有一级部门
      let url = "http://www.zhiningchen.top:9000/directory/";
      this.$axios
        .get(url)
        .then((res) => {
          this.list = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    //获得二级部门
    keshi2(i) {
      console.log(i);
      let url = `http://www.zhiningchen.top:9000/dept/${i + 1}`;
      this.$axios
        .get(url)
        .then((res) => {
          this.depts = res.data;
          console.log(res.data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
  },
};
</script>
<style lang="css">
.col-3 a {
  color: #000;
}
</style>