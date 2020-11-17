<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <!-- <el-table :data="tableData" :key="index" style="width: 100%" height="600" >
            <el-table-column
      type="index"
      :index="indexMethod">
    </el-table-column>
        
              <el-table-column fixed prop="money" label="挂号金额" width="100" >
                
              </el-table-column>
              <el-table-column  fixed v-model="date2" prop="date" label="时间段" width="150" >
                
              </el-table-column>
            
            
            <el-table-column prop="name" label="确认" width="120">
                  <router-link class="nav-link" to="/querenpage">
                <el-button type="#36BBA9" icon="el-icon-right" circle @click="a(index)"></el-button>
    </router-link>
            </el-table-column>
      
     
        </el-table> -->
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">金额</th>
              <th scope="col">挂号时间</th>
              <th scope="col">确认</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(a, i) in tableData" :key="i">
              <td>{{ a.money }}</td>
              <td>{{ a.date }}</td>
              <td>{{ a.name }}</td>
              <td style="width: 30px">
                <!--  style="width: 20px;height: 20px;" -->
                <!-- <div class="alert alert-primary m-0 p-0"  role="alert">
                <strong ></strong>
              </div> -->
                <router-link class="nav-link m-0 p-0" to="/querenpage"
                  ><button type="button" class="btn btn-primary" @click="bb(i)">
                    预约
                  </button></router-link
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="col-6">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
// import alldeptVue from "../../views/administrative office/alldept.vue";
export default {
  data() {
    return {
      date2: {},
      tableData: [
        {
          date: "08:00-08:15",
          name: "王小虎",
          money: "16",
        },
        {
          date: "08:15-08:30",
          name: "王小虎",
          money: "16",
        },
        {
          date: "08:30-08:45",
          name: "王小虎",
          money: "16",
        },
        {
          date: "08:45-09:00",
          name: "王小虎",
          money: "16",
        },
        {
          date: "09:00-09:15",
          name: "王小虎",
          money: "16",
        },
        {
          date: "09:30-09:45",
          name: "王小虎",
          money: "16",
        },
        {
          date: "09:45-10:00",
          name: "王小虎",
          money: "16",
        },
        {
          date: "10:00-10:15",
          name: "王小虎",
          money: "16",
        },
        {
          date: "10:15-10:30",
          name: "王小虎",
          money: "16",
        },
      ],
    };
  },
  components: {},
  methods: {
    bb: function (a) {
      this.date2 = this.tableData[a];
      // console.log(this.date2);

      sessionStorage.setItem("data", JSON.stringify(this.date2));
    },
  },
};
</script>
<style lang="css">
.a1 {
  width: 20px;
  height: 30px;
}
</style>

