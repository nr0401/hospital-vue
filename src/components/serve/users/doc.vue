<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-5 mt-3 ">
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item > 医生</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <!-- 当前患者信息 -->
      <!-- 当前患者概要信息 -->
      <el-col :span="5" :offset="1">
        <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-4">
          <h5>当前患者概要</h5>
          <el-row>
            <el-col :span="24" :offset="0" class="pt-3">
              <span>姓名：{{ name }}</span>
            </el-col>
            <el-col :span="24" :offset="0" class="pt-3">
              <span>年龄：{{ age }}</span>
            </el-col>
            <el-col :span="24" :offset="0" class="pt-3">
              <span>性别：{{ sex }}</span>
            </el-col>
            <el-col :span="24" :offset="0" class="pt-3">
              <span>主诉：{{ symptom }}</span>
            </el-col>
            <el-col :span="5" :push="15" class="pt-3">
              <el-button type="primary" size="small" @click="next">
                下一个
              </el-button>
            </el-col>
          </el-row>
        </el-card>
      </el-col>
      <!-- 当前患者详细信息 -->
      <el-col :span="16" :offset="1">
        <el-card shadow="always" :body-style="{ padding: '20px' }" class="mt-4">
          <h5>当前患者详细信息</h5>
          <el-form ref="form" :model="form" label-width="80px" size="mini">
            <el-form-item label="检查/开药">
              <!-- 多选搜索框 -->
              <div class="block">
                <el-cascader
                  placeholder="请输入药品名称"
                  :options="options"
                  :props="{ multiple: true }"
                  filterable
                ></el-cascader>
              </div>
            </el-form-item>
            <el-form-item label="诊断结果">
              <el-input type="textarea" v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">立即创建</el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
      <!-- 患者列表 -->
      <el-col :span="22" :offset="1">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" class="my-4">
          <h5>我的患者</h5>
          <el-table :data="tableData" style="width: 100%" height="350">
            <el-table-column fixed prop="name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="50">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="50">
            </el-table-column>
            <el-table-column prop="status" label="就诊状态" width="80">
            </el-table-column>
            <el-table-column prop="symptom" label="主诉" width="300">
            </el-table-column>
            <el-table-column prop="history" label="历史病例" width="300">
            </el-table-column>
            <el-table-column prop="date" label="上次看病时间" width="160">
            </el-table-column
            ><el-table-column fixed="right" label="操作" width="80">
              <template slot-scope="scope">
                <el-button
                  @click="deleteRow(scope.$index, tableData)"
                  type="primary"
                  plain
                  size="small"
                >
                  编辑
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "doc",
  methods: {
    onSubmit() {
      console.log("submit!");
    },
  },
  data() {
    return {
      options: [
        {
          value: "drug",
          label: "西药",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
      ],
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
      },
      //患者数据表
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          status: "就诊",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          status: "就诊",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          status: "就诊",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          status: "就诊",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
      ],
    };
  },
};
</script>
<style lang="css">
</style>