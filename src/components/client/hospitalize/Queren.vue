<template>
  <div class="container">
    <br />
    <br />
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>添加就诊人信息</span>
        <br />
        <el-form
          :label-position="labelPosition"
          label-width="80px"
          :model="formLabelAlign"
        >
          <el-form-item label="姓名">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="身份证号码">
            <el-input v-model="formLabelAlign.identity"></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input v-model="formLabelAlign.tel"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-input v-model="formLabelAlign.gender"></el-input>
          </el-form-item>
          <el-form-item label="出生日期">
            <el-input v-model="formLabelAlign.date"></el-input>
          </el-form-item>
          <router-link class="nav-link" to="/guahaodanpage">
            <el-button type="primary" @click="queren()">确认预约</el-button>
          </router-link>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        identity: "", //身份证
        tel: "",
        gender: "",
        date: "", //生日
      },
      patient: {}, //增加就诊人
      patients: [], //把就诊人添加到就诊人数组表
    };
  },
  components: {},
  methods: {
    ...mapActions(["addpatient"]),
    queren() {
      this.patient = this.formLabelAlign;
      // console.log(this.formLabelAlign);
      sessionStorage.setItem("patient", JSON.stringify(this.patient));
    },
  },
};
</script>