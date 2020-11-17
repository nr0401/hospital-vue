<template>
  <div>
    <el-row>
      <el-col :span="5" :offset="1" class="mt-3">
        <span style="font-size: 30px; color: green"> 交流平台 </span>
      </el-col>
      <el-col :span="18" :offset="0" class="px-5">
        <el-divider content-position="right">联系我们</el-divider>
        <div class="dizhi">
          <p>地址：长沙市劳动西路176号</p>
          <p>24小时急救电话：</p>
          <p>医院本部：0731-85145120 / 85171552 ；</p>
          <p>大托分站：0731-85639120（24小时急救车免费接住院病人）。</p>
          <p>
            来院线路一：2、4、8、123、137、140、141、145、160、803、906路在长沙市第三医院（仰天湖）站下；
          </p>
          <p>来院线路二：139路在燕子岭站下；</p>
          <p>
            来院线路三：地铁1号线、3号线侯家塘站下，从1号出入口出站，向西400米即到。
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
  },
};
</script>
<style>
.dizhi p {
  display: flex;
}
</style>