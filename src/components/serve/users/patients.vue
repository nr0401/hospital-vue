<template>
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-5 mt-3">
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item> 患者列表 </el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <!-- 患者列表 -->
      <el-col :span="22" :offset="1">
        <el-card shadow="hover" :body-style="{ padding: '20px' }" class="my-4">
          <h5>患者列表</h5>
          <el-table :data="patients" style="width: 100%" height="595">
            <el-table-column fixed prop="name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="age" label="年龄" width="50">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="50">
            </el-table-column>
            <el-table-column prop="doc" label="主治医生" width="80">
            </el-table-column>
            <el-table-column prop="status" label="就诊状态" width="80">
            </el-table-column>
            <el-table-column prop="pay" label="缴费状态" width="80">
            </el-table-column>
            <el-table-column prop="symptom" label="主诉" width="300">
            </el-table-column>
            <el-table-column prop="history" label="历史病例" width="300">
            </el-table-column>
            <el-table-column prop="date" label="上次看病时间" width="130">
            </el-table-column>
            <el-table-column fixed="right" label="操作" width="80">
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
        <!-- 分页 -->
        <div class="block mb-4">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="Page"
            :page-sizes="[20, 50, 100, 200]"
            :page-size="20"
            layout="total, sizes, prev, pager, next, jumper"
            :total="500"
            style="text-align: center"
            class="mt-3"
          >
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: "patients",
  methods: {},
  data() {
    return {
      patients: [
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          doc: "陈小刀",
          status: "就诊",
          pay: "已缴费",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          doc: "陈小刀",
          status: "就诊",
          pay: "已缴费",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          doc: "陈小刀",
          status: "就诊",
          pay: "已缴费",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          doc: "陈小刀",
          status: "就诊",
          pay: "已缴费",
          symptom: "反复咳嗽、咳痰、气短5年，加重伴痰中带血1个月。",
          history:
            "既往体健，否认“高血压、冠心病、糖尿病”病史；否认“乙肝、结核”等传染病史；预防接种史不详；否认外伤史；无手术史；无输血史，无药物、食物过敏史",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          age: "25",
          sex: "男",
          doc: "陈小刀",
          status: "就诊",
          pay: "已缴费",
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