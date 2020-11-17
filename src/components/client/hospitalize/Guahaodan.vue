<template>
  <div class="container">
    <br />
    <div style="margin-left: 20%">
      <el-card class="box-card">
        <!-- <div slot="header" class="clearfix">
    <span>挂号成功</span>
    <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
  </div> -->
        <!-- <div v-for="o in 9" :key="o" class="text item">
    {{'列表内容 ' + o }}
  </div> -->
        <blockquote class="blockquote mb-0">
          <el-divider border="2px"></el-divider>
          <div class="row">
            <div class="col-3">
              <p>时间段</p>
              <p>{{ da.date }}</p>
            </div>
            <div class="col-9" style="">
              <!-- <el-divider direction="vertical"></el-divider>上午16号（呼吸内科门诊） -->
              <p style="display: right">{{ doctors.name }}</p>

              <p>{{ doctors.zhicheng }}</p>
            </div>
          </div>
          <el-divider border="2px"></el-divider>
        </blockquote>
        <table class="table table-striped">
          <tbody>
            <tr>
              <td>科室名称</td>
              <td></td>
              <td>111111</td>
            </tr>
            <tr>
              <td>挂号金额</td>
              <td></td>
              <td>{{ da.money }}</td>
            </tr>
            <tr>
              <td>就诊人</td>
              <td></td>
              <td>{{ patient1.name }}</td>
            </tr>
          </tbody>
        </table>
      </el-card>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      //就诊时间和金额
      da: {},
      patient1: {},
    };
  },
  components: {},
  mounted() {
    this.da = JSON.parse(sessionStorage.getItem("data"));
    this.patient1 = JSON.parse(sessionStorage.getItem("patient"));
  },
  //计算属性
  computed: {
    ...mapState(["doctors", "dates", "patient"]),
  },
};
</script>
<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 480px;
}
</style>
