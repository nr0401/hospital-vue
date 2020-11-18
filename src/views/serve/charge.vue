<template>
  <!-- 收费信息 -->
  <div class="charge">
    <!-- 面包屑 -->
    <el-breadcrumb
      class="breadcrumb-container ml-5 mt-3"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item> 收费信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="22" :offset="1" class="my-3">
        <el-card shadow="always" :body-style="{ padding: '20px' }" class="charge">
          <el-tabs v-model="activeName">
            <el-tab-pane label="未收费" name="nocharge">
              <rateSheet />
            </el-tab-pane>
            <el-tab-pane label="已收费" name="hascharge">
              <rateSheettrue />
            </el-tab-pane>
            <el-tab-pane label="全部收费" name="all"> 
              <rateSheetAll />
            </el-tab-pane>
            
            <!-- <el-button type="primary" style="position:absolute;right:10px;top:10px" size="mini" @click="add" plain>添加药品</el-button> -->
          </el-tabs>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import rateSheet from '@/components/rateSheet.vue'
import rateSheettrue from '@/components/rateSheettrue.vue'
import rateSheetAll from '@/components/rateSheetAll.vue'

export default {
  components: {
    rateSheet,
    rateSheettrue,
    rateSheetAll
  },
  data() {
    return {
      activeName: "nocharge",
    };
  },
  methods: {},
};
</script>
<style lang="css">
.charge{
  min-height: 46.2rem;
}
</style>