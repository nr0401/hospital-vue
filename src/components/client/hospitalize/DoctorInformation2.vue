<template>
  <div class="container">
    <div style="width: 100">
      <el-avatar
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        style="float: left"
      ></el-avatar
      ><span style="text-align: left">{{ doctors.name }}</span>
    </div>
    <div class="card">
      <div class="card-header">
        <el-divider direction="vertical"></el-divider>职位职称
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>名老专家，呼吸三科主任、老年医学研究所副所长</p>
        </blockquote>
      </div>
    </div>
    <br />
    <div class="card">
      <div class="card-header">
        <el-divider direction="vertical"></el-divider>擅长描述
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p>
            名老专家，呼吸三科主任、老年医学研究所副所长名老专家，呼吸三科主任、老年医学研究所副所长
            名老专家，呼吸三科主任、老年医学研究所副所长
          </p>
        </blockquote>
      </div>
    </div>
    <br />
    <div class="card">
      <div class="card-header">
        <el-divider direction="vertical"></el-divider>门诊时间
      </div>
      <div class="card-body">
        <blockquote class="blockquote mb-0">
          <p style="font-weight: bold">马王堆院区</p>
        </blockquote>
        <blockquote class="blockquote mb-0">
          <el-divider border="2px"></el-divider>
          <div class="row">
            <div class="col-3">
              <p>星期天</p>
              <p>{{ dates }}</p>
            </div>
            <div class="col-9" style="">
              <!-- <el-divider direction="vertical"></el-divider>上午16号（呼吸内科门诊） -->
              <router-link class="nav-link" to="/haoyuanpage"
                ><p @click="a()">
                  <el-divider direction="vertical"></el-divider>上午17号
                </p></router-link
              >

              <router-link class="nav-link" to="/haoyuanxiapage"
                ><p>
                  <el-divider direction="vertical"></el-divider>下午16号
                </p></router-link
              >
            </div>
          </div>
        </blockquote>
      </div>
    </div>

    <!--模态框-->
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["doctors", "dates"]),
  },
  methods: {
    goBack() {
      console.log("go back");
    },
    a() {
      console.log(this.doctors);
    },
  },
};
</script>