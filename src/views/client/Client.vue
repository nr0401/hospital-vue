<template>
  <div class="Chome">
    <!--轮播图-->
    <div>
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in src" :key="item.id">
          <img :src="item.img" class="image" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <!--分割线-->
      <el-divider style="color: #20c997"></el-divider>
      <div class="row">
        <div class="col-1"></div>
        <!-- 左侧卡片/机构介绍 -->
        <div class="col-5">
          <el-card shadow="always" :body-style="{ padding: '20px' }">
            <div slot="header">
              <el-row>
                <el-col :span="17" :offset="2">
                  <h2 class="hys pb-4"><strong>机构介绍</strong></h2>
                </el-col>
                <el-col :span="4" class="pt-4"> <a href="#">更多></a></el-col>
              </el-row>
            </div>
            <img
              style="width: 100%; height: 100%"
              src="../../assets/lbo2.jpg"
              class="mb-3"
            />
            <p class="card-text">
              长沙市第三医院于2012年12月通过国家食品药品监督管理局组织的国家药物临床试验机构及专业资格认定检查，获得“药物临床试验机构资格认定证书”，认定专业8个。
              2017年5月通过国家食品药品监督管理局药物临床试验机构及专业资格复核检查，再次获得国家药物临床......
            </p>
          </el-card>
        </div>
        <!-- 右侧卡片/公告 -->
        <div class="col-5 mb-4">
          <el-card shadow="always" >
            <!-- 卡片标题 -->
            <div slot="header">
              <el-row>
                <el-col :span="17" :offset="2">
                  <h2 class="hys pb-4"><strong>机构通知公告</strong></h2>
                </el-col>
                <el-col :span="4" class="pt-4"> <a href="#">更多></a></el-col>
              </el-row>
            </div>
            <!-- 概要内容 -->
            <div class="mb-3">
              <h4 style="color: green">
                长沙市第三医院关于对GCP项目监查员、研究协调员......
              </h4>
              <div style="">
                按照新冠肺炎防控工作要求，为了加强对各类人员进出医院的管理，现对GCP项目监查（CRA）、研究协调员（CRC）以及科研项目专干等院外因工作
                <a href="" style="text-decoration: none; color: green">
                  【查看详情】
                </a>
              </div>
            </div>
            <!-- 队列连接 -->
            <ul style="style-type: none; text-align: left" class="pl-4 mb-0">
              <li class="li1">
                <a href="">长沙市第三医院Ⅰ期临床试验研究室简介</a>
              </li>
              <li class="li1">
                <a href="">长沙市第三医院药物临床试验机构简介</a>
              </li>
              <li class="li1">
                <a href=""
                  >长沙市第三医院关于医院完成国家药物临床试验机构......</a
                >
              </li>
              <li class="li1">
                <a href=""
                  >关于湖南省重大突发公共卫生事件一级响应下 长沙......</a
                >
              </li>
              <li class="li1">
                <a href="">长沙市第三医院GCP办公室/伦理办公室搬迁通知</a>
              </li>
            </ul>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      src: [
        { id: 0, img: require("../../assets/lunbo/lun1.jpg") },
        { id: 1, img: require("../../assets/lunbo/lun2.jpg") },
        { id: 2, img: require("../../assets/lunbo/lun3.jpg") },
        { id: 3, img: require("../../assets/lunbo/lun4.jpg") },
      ],
    };
  },
  components: {},
};
</script>
<style lang="css">
.Chome a {
  text-decoration: none;
  color: black;
}
</style>
