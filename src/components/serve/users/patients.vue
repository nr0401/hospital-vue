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
            <el-table-column fixed prop="person.user.name" label="姓名" width="80">
            </el-table-column>
            <el-table-column prop="person.user.age" label="年龄" width="50">
            </el-table-column>
            <el-table-column prop="person.user.gender" label="性别" width="50">
            </el-table-column>
            <el-table-column prop="docter.name" label="责任医生" width="80">
            </el-table-column>
            <el-table-column prop="status" label="就诊状态" width="80">
            </el-table-column>
            <el-table-column prop="total" label="缴费价格" width="80">
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
      // 测试数据
      patients: [
      ],
    };
  },
  created() {
    let url = "http://www.zhiningchen.top:9000/user/registration";
    this.$axios
      .get(url)
      .then((res) => {
        console.log(res.data);
        this.patients = res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  },
};
</script>
<style lang="css">
</style>