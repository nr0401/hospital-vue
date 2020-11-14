<template lang="">
    <el-card class="box-card">
      <el-row :gutter="20">
        <el-col :span="6" :offset="0">
          
        <el-avatar 
        :size="50"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar> 
        </el-col>
        <el-col :span="18" :offset="0">
        <h3 class="text">{{name}}</h3>
        <span class="text">{{msg}}</span>
        
        </el-col>
      </el-row>
      
    </el-card>
</template>

<style>
  .text {
    font-size: 1rem;
  }


</style>

<script>
export default {
  name:"cardMsg",
  props: {
    name: String,
    msg:String
  },
  data() {
    return {
      currentDate: new Date()
    };
  }
}
</script>