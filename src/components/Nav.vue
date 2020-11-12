<template>

    <div>
        <div class="row">
            <div class="col-4">
                <p>智慧门诊</p>
            </div>
             <div class="col-8">

                 <el-button type="#36BBA9" plain> </el-button>
            </div>
        </div>
        
<el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#36BBA9"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1"><router-link class="nav-link" to="/">医院首页</router-link></el-menu-item>
    <el-submenu index="2">
    <template slot="title">医院介绍</template>
    <el-menu-item index="2-1"><router-link class="nav-link" to="/introducedpage">医院简介</router-link></el-menu-item>
    <el-menu-item index="2-2"><router-link class="nav-link" to="/honorpage">医院荣誉</router-link></el-menu-item>
    <el-menu-item index="2-3">选项3</el-menu-item>
    <el-submenu index="2-4">
      <template slot="title">新闻中心</template>
      <el-menu-item index="2-4-1">选项1</el-menu-item>
      <el-menu-item index="2-4-2">选项2</el-menu-item>
      <el-menu-item index="2-4-3">选项3</el-menu-item>
    </el-submenu>
    
  </el-submenu>
  <!-- <el-menu-item index="2"><router-link class="nav-link" to="/introducedpage">医院介绍</router-link></el-menu-item> -->

  <el-menu-item index="3" >消息中心</el-menu-item>

  <el-menu-item index="4"><a  target="_blank">就医指南</a></el-menu-item>
  
    
  <el-menu-item index="5" >  <router-link class="nav-link" to="/registrationpage">预约挂号</router-link></el-menu-item>

</el-menu>

    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>