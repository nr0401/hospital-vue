<template>
  <div class="t1 py-3">
    <el-row>
      <el-col :span="1" :offset="8">
        <img class="bt" src="@/assets/bottom.png" />
      </el-col>
      <el-col :span="7" class="mt-3">
        <div>版权所有： 长沙市第三医院</div>
        <div>地址：长沙市劳动西路176号 湘ICP备07501595号</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "Bottom",
  components: {},
};
</script>
<style>
.t1 {
  background-color: rgb(17, 138, 181);

}

</style>