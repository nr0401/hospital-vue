<template>
  <div>
    <!-- <el-table :data="patients" style="width: 100%" height="595">
      <el-table-column
        fixed
        prop="person.user.name"
        label="患者姓名"
        width="100"
      >
      </el-table-column>
      <el-table-column prop="age" label="年龄" width="70"> </el-table-column>
      <el-table-column prop="gender" label="性别" width="70"> </el-table-column>
      <el-table-column prop="docter.name" label="就诊医生" width="100">
      </el-table-column>
      <el-table-column prop="drug.text" label="收费项目" width="200">
      </el-table-column>
      <el-table-column prop="total" label="收费价格" width="100">
      </el-table-column>
      <el-table-column prop="time" label="收费时间" width="200">
      </el-table-column>
      <el-table-column label="操作" width="80">
        <template slot-scope="scope">
          <el-button
            @click="deleteRow(scope.$index, tableData)"
            type="primary"
            plain
            size="small"
          >
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table> -->

    <table class="table">
      <thead>
        <tr>
          <th >姓名</th>
          <th >年龄</th>
          <th>性别</th>
          <th>就诊医生</th>
          <th>收费时间</th>
          <th>收费价格</th>
          <th>状态</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(i,k) in list" :key="k">
          <td scope="row">{{i.person.name}}</td> 
          <td>{{i.person.birthday}}</td> 
          <td>{{i.person.gender}}</td> 
          <!-- <td>1</td>
          <td>2</td>
          <td>3</td> -->
          <td>{{i.doctor.name}}</td>
          <td>{{i.time}}</td>
          <td>{{i.total}}</td>
          <td><span v-if="i.status==0">未付款</span>
                <span v-else>已付款</span>
          </td>
          <td>
              <button type="button" class="btn btn-outline-primary" v-if="i.status==1">查看</button>
              <button type="button" class="btn btn-outline-danger" v-else @click="fukuan(k)">付款</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list:{},
    }
  },
  created() {
   this.getdata()
  },
  methods: {
      getdata(){
 let url = "http://www.zhiningchen.top:9000/api/payment/prescription";
    this.$axios.get(url)
    .then(res => {
        this.list=res.data
       for (let i = 0; i < this.list.length; i++) {
        let url2 = `http://www.zhiningchen.top:9000/user/person/${this.list[i].person_id}`
        this.$axios.get(url2)
        .then(res => {
          this.list[i].person = res.data
          // console.log(this.list[i].person);
          let a = res.data.birthday;
          // console.log(a);
          let b = a.slice(0,4);
          // console.log(b);
           let mydate = new Date();
           let n = mydate.getFullYear();
           //console.log(n);
           this.list[i].person.birthday = (n-b)
          // console.log(this.list[i].person.birthday);

        })
        .catch(err => {
          console.error(err); 
        }) 
        
      }
    })
    .catch(err => {
      console.error(err); 
    })
      },

      //付款
      fukuan(i){
        //   let pre='';
        //   let url =`http://www.zhiningchen.top:9000/api/payment/prescription/${this.list[i].id}`
        //   this.$axios.get(url)
        //   .then(res => {    
        //       pre = res.data;
        //     console.log(pre);
          let url2 = `http://www.zhiningchen.top:9000/api/payment/${this.list[i].id}`
          this.$axios.post(url2)
          .then(res => {
            console.log(res);
              
          })
          .catch(err => {
              this.getdata()
              console.error(err); 
          })

         // })
        //   .catch(err => {
        //       console.error(err); 
        //   })

     
          
          
      }
  },
};
</script>