<template>
  <div>
    <!--时间-->
    <!-- <el-calendar :range="['2019-03-04', '2019-03-24']">
</el-calendar> -->
    <!--医生列表-->
    <br />
    <div class="row">
      <el-form
        ref="form"
        @click="date()"
        class="col-12"
        :model="form"
        label-width="120px"
        style="font-size: 20px"
      >
        <el-form-item label="选择就诊日期">
          <el-col :span="11">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="form.date1"
            ></el-date-picker>
          </el-col>
        </el-form-item>
      </el-form>

      <router-link class="nav-link" to="/doctorInformationpage2">
        <el-col
          :span="6"
          v-for="(o, index) in information"
          :key="o"
          :offseti="index > 0 ? 1 : 0"
          style="width: 200px; margin-right: 50px"
        >
          <el-card
            :body-style="{ padding: '0px' }"
            style="width: 220px; margin-top: 20px"
          >
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
              @click="save(index)"
            />
            <div style="padding: 19px">
              <span style="font-size: 20px">{{ o.name }}</span
              ><span
                ><time class="time">
                  <el-divider direction="vertical"></el-divider
                  >{{ o.zhicheng }}</time
                ></span
              >

              <div class="bottom clearfix">
                <span style="font-size: 18px">坐诊地址：{{ o.dizhi }}</span>
              </div>
              <!-- <button type="button" class="btn btn-primary" @click="save(index)">dianji</button> -->
            </div>
          </el-card>
        </el-col>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {
      //医生信息
      doctor: {},
      //选择的日期值
      form: {
        date1: "",
      },

      currentDate: new Date(),
      information: [
        {
          name: "褚一生",
          zhicheng: "名老专家",
          dizhi: "马王堆",
        },
        {
          name: "王医生",
          zhicheng: "正主任医生",
          dizhi: "马王堆",
        },
        {
          name: "李医生",
          zhicheng: "名老专家",
          dizhi: "马王堆",
        },
        {
          name: "李医生",
          zhicheng: "名老专家",
          dizhi: "马王堆",
        },
      ],
    };
  },
  components: {},
  methods: {
    //映射方法
    ...mapActions(["adddoctor", "adddate"]),
    //选择医生
    save(index) {
      this.adddoctor(this.information[index]);
      //挂号选择日期
      this.adddate(this.form.date1);
      //console.log(this.information[index]);
    },
  },
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
</style>