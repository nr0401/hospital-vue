<template>
  <div class="mb-3">
    <el-divider></el-divider>
    <div>
      <img src="@/assets/dept1.png" />
    </div>
    <div class="my-3">
      <el-button type="primary" plain @click="mzcount">门诊联系</el-button>
      <el-button type="primary" round @click="kscount">科室概况</el-button>
      <el-button type="primary" plain @click="zjcount">专家简介</el-button>
    </div>

    <!-- 科室信息-->
    <h1>【科室概况】</h1>
    <div v-show="ks" class="alldept">
      <p>
        肾内科创建于1986年，2002年拥有独立病房，是长沙市第三医院院级重点专科。科内现有医生13人，其中副主任医师4人，主治医师5人，其中博士1人，硕士8人，硕士及以上学历占70%。
      </p>
      <p>
        肾内科由门诊、病房、血液净化中心三部分组成。专科年门诊量4000余人次。科室拥有高标准肾病专科病房，为满足不同层次住院患者的需要，
        分为高级、普通及贫困患者特设病床，成立了血液净化中心、腹膜透析中心。开放床位60张，年收治病人千余人次，病床使用率为100%，平均住院日为15.4天。
      </p>
      <p>
        我院血液净化中心透析设置床位60张，开展中西医结合肠道透析、腹膜透析、血液透析、连续性血液滤过、血液灌流、血浆置换等多层次的血液净化治疗，
        成功挽救了大量的急、慢性肾衰竭以及中毒和多器官功能衰竭患者。随访的腹膜透析病人达50余人，维持性血液透析病人达120余人。
      </p>
      <p>
        我科已成熟开展B超引导下经皮肾穿剌活检术及肾囊肿穿刺术、深静脉置管术、动静脉内瘘成形术、腹膜透析置管术。
      </p>
      <p>
        我科承担了来自中南大学湘雅医学院、湖南师大医学院、湖南中医药大学等多所高等医学院校见习、实习的教学任务，并承担了住院医师、
        全科助理医师和进修医师等各级医务人员的教学和培训工作。学科一贯注重与省内外权威的肾脏病专科医院的交流和合作，每年选派医护人员外出进修学习。近5年在国内学术期刊上发表论文40余篇，参与国家自然科学基金课题1项，省部级课题2项。
      </p>
    </div>
    <!--医生信息-->
    <div v-show="zj">
      <!--职位-->
      <p>肾内科名誉主任</p>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove"
      >
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="" />
      </el-dialog>
    </div>

    <!-- 门诊&联系-->
    <div v-show="mz">
      <h3>门诊时间</h3>
      <p>周一至周五全天</p>

      <h3>咨询电话</h3>
      <p>肾内科病房：0731-85171501</p>
    </div>

    <div class="col-1"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      ks: true,
      mz: false,
      zj: false,
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
    kscount: function () {
      this.ks = true;
      (this.zj = false), (this.mz = false);
    },
    zjcount: function () {
      (this.zj = true), (this.ks = false), (this.mz = false);
    },
    mzcount: function () {
      this.ks = false;
      (this.zj = false), (this.mz = true);
    },
  },

  name: "dept",
  components: {},
};
</script>
<style lang="css">
.alldept {
  text-align: left;
  text-indent: 2rem;
}
</style>

