<template>
  <!-- 药房管理 -->

  <div>
    <!-- 面包屑 -->
    <el-breadcrumb
      class="breadcrumb-container ml-5 mt-3"
      separator-class="el-icon-arrow-right"
    >
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item> 药房管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 表格 -->
    <el-row class="mt-3 drug">
      <el-col :span="22" :offset="1">
        <el-card shadow="always">
          <table class="table table-sm table-inverse table-responsive">
            <thead class="thead-inverse">
              <tr>
                <th style="width: 10%">药品</th>
                <th style="width: 10%">价格</th>
                <th style="width: 10%">库存</th>
                <th style="width: 40%">描述</th>
                <th style="width: 15%">类型</th>
                <th style="width: 15%">操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(i, k) in list" :key="k">
                <td scope="row">{{ i.title }}</td>
                <td>{{ i.total }}</td>
                <td>{{ i.count }}</td>
                <td>{{ i.text }}</td>
                <td>{{ i.drugtype.title }}</td>
                <td>
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    @click="quyao(k)"
                    data-toggle="modal"
                    data-target="#exampleModal"
                  >
                    取药
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <button
            type="button"
            class="btn btn-outline-primary btn-lg btn-block"
            @click="add()"
          >
            存入新药品
          </button>
        </el-card>
      </el-col>
    </el-row>

    <!-- 模态框 -->
    <!-- <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">输入新的信息</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <div class="form-group">
                            <label for="">新的部门名称</label>
                            <input type="text" class="form-control" v-model="newdeptname" aria-describedby="helpId"
                                placeholder="请输入新的部门名称">
                        </div>
                        <div class="form-group">
                            <label for="">新的部门地址</label>
                            <input type="text" class="form-control" v-model="newdeptcity" aria-describedby="helpId"
                                placeholder="请输入新的部门地址">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal"
                            @click="saveEdit()">保存并关闭</button>
                         <button type="button" class="btn btn-primary" >保存更改</button> -->
    <!-- </div>
                </div>
            </div>
        </div> -->
    <!-- <div v-if="sample_modal">
      <div class="modal" :style="motai">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">编辑编号为{{}}的信息</h4>
            </div>
            <div class="modal-body">
              <div class="form-group">
                <label for="">部门名称</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label for="">工作地点</label>
                <input type="text" class="form-control" />
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-primary">取消更改</button>
              <button type="button" class="btn btn-primary">保存更改</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // sample_modal= false,
      list: {},
    };
  },
  methods: {
    // 获得数据
    getdata() {
      let url = "http://www.zhiningchen.top:9000/drug/pharmacy";
      this.$axios
        .get(url)
        .then((res) => {
          this.list = res.data;
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    // 取药
    quyao(i) {
      let url = `http://www.zhiningchen.top:9000/drug/pharmacy/DALETE/1/${this.list[i].id}`;
      this.$axios
        .put(url)
        .then((res) => {
          this.getdata();
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    add() {
      this.sample_modal = true;
    },
  },
  created() {
    this.getdata();
  },
  computed: {
    motai: function () {
      return this.sample_modal ? "display:block" : "display:display";
    },
  },
};
</script>
<style lang="css">
.drug {
  min-height: 47.2rem;
}
</style>