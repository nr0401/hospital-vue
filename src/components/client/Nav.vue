<template>
  <div class="Cmenu">
    <div class="row p-0 m-0 mb-3">
      <div class="col-lg-4 md-2">
        <img
          src="@/assets/logo.png"
          style="position: relative; top: 40px; height: 60px"
        />
      </div>
      <div class="col-lg-2 md-1"></div>
      <div class="col-lg-6 md-8dp">
        <img
          src="@/assets/btn03.jpg"
          style="
            width: 5rem;
            height: 5rem;
            margin: 5px;
            position: relative;
            top: -10px;
          "
        />
        <el-button type="#36BBA9" plain style="position: relative; top:0.7rem">
          <p>24小时急救电话</p>
          <p>医院本部：0731-85145120</p>
          <p>大托分站：0731-85639120</p>
        </el-button>
        <button
          type="button"
          class="btn btn-outline-success"
          style="width: 100px; margin: 10px; position: relative; top: 20px"
        >
          登录
        </button>
        <button
          type="button"
          class="btn btn-outline-success"
          style="width: 100px; position: relative; top: 20px"
        >
          注册
        </button>
      </div>
    </div>

    <el-menu
      :default-active="$route.path"
      class="el-menu-demo pl-4"
      mode="horizontal"
      @select="handleSelect"
      router
      background-color="#36bba9"
      text-color="#fff"
      active-text-color="#fff"
    >
      <el-menu-item index="/"> 医院首页 </el-menu-item>
      <!-- 医院介绍 -->
      <el-submenu index="/honorpage">
        <template slot="title">医院介绍</template>
        <el-menu-item index="/honorpage">医院荣誉</el-menu-item>
        <el-menu-item index="/leadershippage">现任领导</el-menu-item>
      </el-submenu>
      <!-- 新闻中心 -->
      <el-submenu index="/introducedpage">
        <template slot="title">新闻中心</template>
        <el-menu-item index="/introducedpage">医院简介</el-menu-item>
      </el-submenu>
      <!-- 就医指南 -->
      <el-submenu index="/registrationpage">
        <template slot="title">就医指南</template>
        <el-menu-item index="/registrationpage">预约挂号</el-menu-item>
      </el-submenu>
      <!-- 科研教学 -->
      <el-submenu index="/library">
        <template slot="title">科研教学</template>
        <el-menu-item index="/library">网上图书馆</el-menu-item>
      </el-submenu>
      <!-- 交流平台 -->
      <el-submenu index="/relation">
        <template slot="title">交流平台</template>
        <el-menu-item index="/relation">交流平台</el-menu-item>
        <!-- <el-menu-item index="/user">用户登录</el-menu-item> -->
      </el-submenu>
      <!-- 学科专家 -->
      <el-submenu index="/dept">
        <template slot="title">学科专家</template>
        <el-menu-item index="/dept/administrativepage">临床科室</el-menu-item>
        <el-menu-item index="/dept/outpatient">门诊医技科室</el-menu-item>
      </el-submenu>
      <!-- 药物临床试验 -->
      <el-submenu index="/drug">
        <template slot="title">药物临床试验</template>
        <el-menu-item index="/drug">国家药物临床试验机构</el-menu-item>
        <el-menu-item index="/monad">伦理委员会</el-menu-item>
      </el-submenu>
      <!-- 个人中心 -->
      <el-menu-item index="/personalcenter">个人中心</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tel: ["医院本部：0731-8566666", "大托分站：0731-5656565"],
      activeIndex: "1",
      activeIndex2: "1",
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style >
</style>