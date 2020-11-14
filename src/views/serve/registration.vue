<template>
<!-- 挂号信息 -->
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-5 mt-3">
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item> 挂号信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="22" :offset="1" class="my-3">
        <el-card shadow="always" :body-style="{ padding: '20px' }">
          <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort="{ prop: 'date', order: 'descending' }"
            height="650"
          >
            <el-table-column
              fixed="left"
              prop="date"
              label="日期"
              sortable
              width="180"
            >
            </el-table-column>
            <el-table-column prop="id" label="序号" sortable width="180">
            </el-table-column>
            <el-table-column prop="doc" label="医生" sortable width="180">
            </el-table-column>
            <el-table-column prop="name" label="患者姓名" width="180">
            </el-table-column>
            <el-table-column prop="status" label="状态" sortable>
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
      tableData: [
        {
          date: "2016-05-02",
          id: "32",
          name: "王小虎",
          doc: "陈小刀",
          status: "已就诊",
        },
        {
          date: "2016-06-02",
          id: "13",
          name: "王小虎",
          doc: "陈小刀",
          status: "已就诊",
        },
        {
          date: "2016-07-02",
          id: "15",
          name: "王小虎",
          doc: "赵小六",
          status: "已就诊",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "已就诊",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "未就诊",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "未就诊",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "未就诊",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "已收费",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "已收费",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "已收费",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "已就诊",
        },
        {
          date: "2016-05-04",
          id: "20",
          name: "王小虎",
          doc: "赵小六",
          status: "已就诊",
        },
      ],
    };
  },
  //   methods: {
  //     formatter(row, column) {
  //       return row.address;
  //     },
  //   },
};
</script>