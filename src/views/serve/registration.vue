<template>
  <!-- 挂号信息 -->
  <div>
    <!-- 面包屑 -->
    <el-breadcrumb separator-class="el-icon-arrow-right" class="ml-5 mt-3">
      <el-breadcrumb-item :to="{ path: '/serve' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item> 挂号信息</el-breadcrumb-item>
    </el-breadcrumb>
    <el-row>
      <el-col :span="22" :offset="1" class="my-3">
        <table class="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">序号</th>
              <th scope="col">患者姓名</th>
              <th scope="col">患者电话</th>
              <th scope="col">医生</th>
              <th scope="col">科室</th>
              <th scope="col">挂号时间</th>
              <th scope="col">就诊时间段</th>
              <th scope="col">就诊时间</th>
              <th scope="col">签到状态</th>
              <th scope="col">是否取消预约</th>
              <th scope="col">挂号价格</th>
              <th scope="col">操作</th>
              .
            </tr>
          </thead>
          <tbody class="text-center">
            <tr v-for="(r, index) in registrations" :key="index">
              <th scope="row">{{ r.mark }}</th>
              <td>{{ r.person.name }}</td>
              <td>{{ r.person.tel }}</td>
              <td>{{ r.doctor.name }}</td>
              <td>{{ r.dept.title }}</td>
              <td>{{ r.time }}</td>
              <td>{{ r.dayTime }}</td>
              <td>{{ r.visitTime }}</td>
              <td>{{ r.status }}</td>
              <td>{{ r.appointment }}</td>
              <td>{{ r.total }}</td>
              <td>
                <!-- Button trigger modal -->
                <button
                  type="button"
                  class="btn btn-sm m btn-outline-primary"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  @click="status(r)"
                >
                  编辑
                </button>

                <button
                  type="button"
                  @click="remove(r.id)"
                  class="btn btn-outline-danger btn-sm"
                >
                  删除
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </el-col>
    </el-row>
    <div v-if="sample_modal">
      <div class="modal" :style="motai">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">编辑{{ editName }}挂号单</h4>
            </div>
            <div class="modal-body">
              <div class="container">
                <div class="row">
                  <div class="col">
                    <div class="form-group">
                      <label for="">挂号</label>
                      <input
                        readonly
                        type="text"
                        class="form-control"
                        v-model="registration.mark"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">患者姓名</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registration.person.name"
                        readonly
                      />
                    </div>
                    <div class="form-group">
                      <label for="">医生</label>
                      <input
                        type="text"
                        class="form-control"
                        readonly
                        v-model="registration.doctor.name"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">科室</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registration.doctor.dept.title"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">挂号时间</label>
                      <input
                        readonly
                        type="text"
                        class="form-control"
                        v-model="registration.time"
                      />
                    </div>
                  </div>
                  <div class="col">
                    <div class="form-group">
                      <label for="">就诊时间段</label>
                      <input
                        readonly
                        type="text"
                        class="form-control"
                        v-model="registration.dayTime"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">具体就诊时间</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registration.visitTime"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">签到状态</label>
                      <input
                        readonly
                        type="text"
                        class="form-control"
                        v-model="registration.status"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">是否取消预约</label>
                      <input
                        type="text"
                        class="form-control"
                        v-model="registration.appointment"
                      />
                    </div>
                    <div class="form-group">
                      <label for="">挂号价格</label>
                      <input
                        readonly
                        type="text"
                        class="form-control"
                        v-model="registration.total"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-primary"
                @click="sample_modal = false"
              >
                取消更改
              </button>
              <button type="button" class="btn btn-primary" @click="edit()">
                保存更改
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  data() {
    return {
      sample_modal: false,
      editName: "",
      registration: {
        mark: "",
        person: {
          name: "",
          tel: "",
        },
        doctor: {
          name: "",
          dept: {
            id: "",
            title: "",
          },
        },
        time: "",
        dayTime: "",
        visitTime: "",
        status: "",
        appointment: "",
        total: "",
      },
    };
  },
  methods: {
    ...mapActions([
      "removeRegistration",
      "updateRegistration",
      "gainRegistrations",
    ]),
    edit() {
      this.updateRegistration(this.registration);
      this.gainRegistrations();
      this.sample_modal = false;
    },
    status(r) {
      this.editName = r.person.name;
      this.sample_modal = true;
      this.registration.mark = r.mark;
      this.registration.time = r.time;
      this.registration.dayTime = r.dayTime;
      this.registration.visitTime = r.visitTime;
      this.registration.appointment = r.appointment;
      this.registration.total = r.total;
      this.registration.doctor.dept.title = r.doctor.dept.title;
      this.registration.doctor.id = r.doctor.id;
      this.registration.status = r.status;
      this.registration.doctor.name = r.doctor.name;
      this.registration.person.tel = r.person.tel;
      this.registration.person.name = r.person.name;
    },
    remove(ind) {
      this.removeRegistration(ind);
      this.gainRegistrations();
    },
  },
  computed: {
    ...mapState(["registrations"]),
    motai: function () {
      return this.sample_modal ? "display:block" : "display:display";
    },
  },
};
</script>