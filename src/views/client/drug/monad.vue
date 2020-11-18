<template>
  <div class="row my-4 idd mx-0">
    <div class="col-1"></div>
    <!-- 左侧卡片内容 -->
    <div class="col-5">
      <el-card shadow="always">
        <div slot="header">
          <!-- 标题 -->
          <el-row>
            <el-col :span="17" :offset="2" class="mb-3">
              <h2 class="hys">
                <strong style="border-bottom: 8px solid">伦理委员会介绍</strong>
              </h2>
            </el-col>
            <el-col :span="4" class="pt-4"> <a href="#">更多></a></el-col>
          </el-row>
        </div>
        <!-- 内容 -->
        <img
          style="width: 100%; height: 100%"
          src="@/assets/lbo1.jpg"
          class="mb-3"
        />
        <p style="text-align: left; text-indent: 2rem">
          长沙市第三医院医学伦理委员会成立于2011年8月，现伦理委员会人员由15名委员组成，
          分别从事医药专业、非医药专业、法律专家以及独立于研究/试验单位之外的人员组成，设主任
          委员1名、副主任委员2名、秘书1名，委员会成员组成和功能符合临床试验管理规员组成和功
          能符合临床试验管理规范......
          <a href="" style="text-decoration: none; color: green">
            【查看详情】
          </a>
        </p>
      </el-card>
    </div>
    <!-- 右侧卡片内容 -->
    <div class="col-5 mb-4">
      <el-card shadow="always">
        <!-- 卡片标题 -->
        <div slot="header">
          <el-row>
            <el-col :span="17" :offset="2">
              <h2 class="hys pb-4"><strong>委员会通知公告</strong></h2>
            </el-col>
            <el-col :span="4" class="pt-4"> <a href="#">更多></a></el-col>
          </el-row>
        </div>
        <!-- 概要内容 -->
        <div class="mb-3 px-2">
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
            <a href="">医院开展2018年度党建述职评议考核</a>
          </li>
          <li class="li1">
            <a href="">我院参加全市2019年“三下乡”集中示范活动</a>
          </li>
          <li class="li1"><a href="">凝心聚力加油干 攻坚克难再出发</a></li>
          <li class="li1">
            <a href="">我院举行2018年度 助理全科医生培训总结表彰暨春......</a>
          </li>
          <li class="li1">
            <a href="">长沙市第三医院医务人员撸起袖子献热血</a>
          </li>
          <li class="li1">
            <a href="">除夕慰问送祝福，殷殷真情暖人心 —— 医院领导......</a>
          </li>
          <li class="li1">
            <a href="">长沙市第三医院伦理委员会名称变更的通知</a>
          </li>
        </ul>
      </el-card>
    </div>

    <div class="col-1"></div>
  </div>
</template>

<script>
export default {
  name: "Introduced",
  components: {},
};
</script>
<style lang="css">
.idd a {
  text-decoration: none;
  color: black;
}
</style>