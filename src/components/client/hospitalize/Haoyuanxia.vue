<template>
     <div class="container">
<div class="row">
    <div class="col-5">
     <el-table
    :data="tableData"
    style="width: 100%"
    height="400">
   
    <router-link class="nav-link" to="/querenpage"
            > 
           
             <el-table-column
      fixed
      prop="date"
      label="日期"
      width="150">
    </el-table-column>
    
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column></router-link>
  </el-table>
</div>
<div class="col-5">
    <router-view></router-view>
</div>
</div>

  </div>
</template>
<script>
export default {
    components:{

    }
}
</script>