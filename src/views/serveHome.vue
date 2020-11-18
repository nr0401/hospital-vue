<template>
  <!-- 后端管理入口 -->
  <div class="serveHome">
    <div class="fixed-top">
      <inav />
    </div>
    <el-row class="body">
      <el-col class="left sticky-top" :xs="10" :sm="8" :md="6" :lg="4">
        <imenu />
      </el-col>
      <el-col class="right" :xs="14" :sm="16" :md="18" :lg="20">
        <!-- 子路由 -->
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src
<<<<<<< HEAD
import inav from "../components/serve/Nav.vue";
import imenu from "../components/serve/Menu.vue";

=======
import inav from "../components/serve/serveNav.vue";
import imenu from "../components/serve/serveMenu.vue";
>>>>>>> 175c0b3202c4a9999a3b4368310deac5eb509618
export default {
  name: "serveHome",
  components: {
    inav,
    imenu,
  },
};  
</script>
<style lang="css">
.body {
  background: #36bba9;
  padding: 0;
}
.right {
  background: #f6fbfb;
  margin-top: 60px;
}
</style>
