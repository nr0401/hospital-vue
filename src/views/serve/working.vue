<template>
  <!-- 排班信息 -->
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-5 mt-3">
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item> 排班信息</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 列表 -->
    <el-row>
      <el-col :span="22" :offset="1" class="my-3">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{ prop: 'date', order: 'descending' }"
            height="650"
          >
            <!-- 姓名 -->
            <el-table-column
              fixed="left"
              prop="name"
              label="职员姓名"
              width="100"
            >
            </el-table-column>
            <!-- 科室 -->
            <el-table-column
              fixed="left"
              prop="address"
              label="科室"
              width="100"
            >
            </el-table-column>
            <!-- 周一——周日列表 -->
            <el-table-column prop="Mon" label="周一" width="135">
            </el-table-column>
            <el-table-column prop="Tue" label="周二" width="135">
            </el-table-column>
            <el-table-column prop="Wed" label="周三" width="135">
            </el-table-column> 
            <el-table-column prop="Thu" label="周四" width="135">
            </el-table-column>
            <el-table-column prop="Fri" label="周五" width="135">
            </el-table-column>
            <el-table-column prop="Sat" label="周六" width="135">
            </el-table-column>
            <el-table-column prop="Sun" label="周日" width="135">
            </el-table-column>
          </el-table>
          <!-- 分页 -->
          <div class="block">
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
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Page: 1,
      status: [],
      tableData: [
        {
          name: "陈小刀",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "休息",
          Fri: "值班",
          Sat: "休息",
          Sun: "值班",
        },
        {
          name: "张三",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "值班",
          Thu: "休息",
          Fri: "值班",
          Sat: "休息",
          Sun: "值班",
        },
        {
          name: "李四",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "值班",
          Fri: "休息",
          Sat: "休息",
          Sun: "值班",
        },
        {
          name: "王五",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "值班",
          Fri: "休息",
          Sat: "值班",
          Sun: "值班",
        },
        {
          name: "王五",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "值班",
          Fri: "休息",
          Sat: "值班",
          Sun: "值班",
        },
        {
          name: "王五",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "值班",
          Fri: "休息",
          Sat: "值班",
          Sun: "值班",
        },
        {
          name: "王五",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "值班",
          Fri: "休息",
          Sat: "值班",
          Sun: "值班",
        },
        {
          name: "王五",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "值班",
          Fri: "休息",
          Sat: "值班",
          Sun: "值班",
        },
        {
          name: "王五",
          address: "内科",
          Mon: "值班",
          Tue: "值班",
          Wed: "休息",
          Thu: "值班",
          Fri: "休息",
          Sat: "值班",
          Sun: "值班",
        },
      ],
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
  },
};
</script>
<style lang="css">
</style>