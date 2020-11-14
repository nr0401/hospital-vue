<template>
  <div>
    <h3 class="title">总体数据</h3>
    <!-- 卡片 -->
    <el-row class="body" style="background: #f6fbfb">
      <el-col :span="6" id="card" v-for="(t, index) in titles" :key="index">
        <cardMsg :name="t.name" :msg="t.msg" />
      </el-col>
    </el-row>
    <!-- 图表 -->
    <h3 class="title">增长趋势分析</h3>
    <el-row class="body" style="background: #f6fbfb">
      <el-col :span="10" :offset="1">
        <el-card shadow="always" :body-style="{ padding: '1rem' }">
          <cartogram />
        </el-card>
      </el-col>
      <el-col :span="10" :offset="2">
        <el-card shadow="always" :body-style="{ padding: '1rem' }">
          <patientsc />
        </el-card>
      </el-col>
    </el-row>
    <!-- 概要信息 -->
    <el-row>
      <el-col :span="13"><h3 class="title">公告</h3></el-col>
      <el-col :span="7" :offset="1"><h3 class="title">排班信息</h3></el-col>
    </el-row>

    <el-row class="mb-4">
      <!-- 公告 -->
      <el-col :span="13" :offset="1">
      <h5 class="ml-3">公告</h5>
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <el-collapse v-model="activeName" accordion>
            <el-collapse-item title="一致性 Consistency" name="1">
              <div>
                与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
              </div>
              <div>
                在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
              </div>
            </el-collapse-item>
            <el-collapse-item title="反馈 Feedback" name="2">
              <div>
                控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
              </div>
              <div>
                页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。
              </div>
            </el-collapse-item>
            <el-collapse-item title="效率 Efficiency" name="3">
              <div>简化流程：设计简洁直观的操作流程；</div>
              <div>
                清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；
              </div>
              <div>
                帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。
              </div>
            </el-collapse-item>
            <el-collapse-item title="可控 Controllability" name="4">
              <div>
                用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；
              </div>
              <div>
                结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。
              </div>
            </el-collapse-item>
          </el-collapse>
        </el-card>
      </el-col>
      <!-- 排班信息 -->
      <el-col :span="8" :offset="1">
      <h5 class="ml-3">当前排班</h5>
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <!-- card body -->
          <el-table
            :data="tableData"
            style="width: 100%"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="date" label="日期" width="150">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="100">
            </el-table-column>
            <el-table-column prop="address" label="科室"> </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
    <el-backtop
      target=".page-component__scroll .el-scrollbar__wrap"
    ></el-backtop>
  </div>
</template>
<script>
import cardMsg from "./CardMsg.vue";
import cartogram from "./Cartogram.vue";
import patientsc from "./PatientsCartogram";

class title {
  constructor(name, msg) {
    (this.name = name), (this.msg = msg);
  }
}
export default {
  name: "imain",
  components: {
    cardMsg,
    cartogram,
    patientsc,
  },
  data() {
    return {
      // 卡片信息
      titles: [
        new title("入驻医生", "3902"),
        new title("入驻患者", "473"),
        new title("今日收款", "123123.2￥"),
        new title("今日就诊", "382"),
      ],
      // 排班信息
      tableData: [
        {
          date: "2020-11-13",
          name: "王小虎",
          address: "内科",
        },
        {
          date: "2020-11-13",
          name: "陈小刀",
          address: "外科",
        },
        {
          date: "2020-11-13",
          name: "赵小针",
          address: "儿童科",
        },
        {
          date: "2020-11-13",
          name: "陈小刀",
          address: "外科",
        },
      ],
    };
  },
};
</script>
<style lang="css">
h3.title {
  text-align: left;
  padding-left: 3rem;
  padding-top: 2rem;
  font-size: 1rem;
}
#card {
  padding-left: 2rem;
  padding-right: 2rem;
}
</style>