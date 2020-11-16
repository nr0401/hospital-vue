<template>
  <div>
    <el-table :data="patients" style="width: 100%" height="595">
      <el-table-column
        fixed
        prop="person.user.name"
        label="患者姓名"
        width="100"
      >
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="70"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="70"> </el-table-column>
      <el-table-column prop="docter.name" label="就诊医生" width="100">
      </el-table-column>
      <el-table-column prop="drug.text" label="收费项目" width="200">
      </el-table-column>
      <el-table-column prop="total" label="收费价格" width="100">
      </el-table-column>
      <el-table-column prop="time" label="收费时间" width="200">
      </el-table-column>
      <el-table-column label="操作" width="80">
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
  </div>
</template>
<script>
export default {};
</script>