<template>
  <div>
    <el-select
      v-model="value"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder=" 请输入专家姓名"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  components: {},
};
</script>