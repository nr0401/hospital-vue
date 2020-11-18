import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
<<<<<<< HEAD
  state: {
    registrations: [],
  },
  mutations: {
    removeRegis(state, ind) {
      axios.delete(`http://www.zhiningchen.top:9000/user/registration/delete/${ind}`)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err);
        });
    },
    gainRegis(state) {
      axios.get('http://www.zhiningchen.top:9000/user/registration')
        .then(res => {
          console.log(res.data)
          state.registrations = res.data;
        })
        .catch(err => {
          console.error(err);
        });
    },
    updateRegis(state, reg) {
      axios.put('http://www.zhiningchen.top:9000/user/registration/update', reg)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.error(err);
        })
    }
  },
  actions: {
    removeRegistration({ commit }, ind) {
      commit('removeRegis', ind);
    },
    gainRegistrations({ commit }) {
      commit('gainRegis');
    },
    updateRegistration({ commit }, reg) {
      commit('updateRegis', reg);
    }
  },
  modules: {
  }
})
=======
    state: {
        doctors: {},
        dates: {},
        patient: {},
        patients: [] //挂号添加就诊人信息
    },
    mutations: {
        //获取医生卡片信息
        ADDDOCTOR(state, a) {
            state.doctors = a;

        },
        //获取挂号时间
        ADDDATE(state, a) {
            state.dates = a;
        },
        //添加就诊人信息
        ADDPATIENT(state, a) {
            state.patient = a
        }

    },
    actions: {
        //获取医生卡片
        adddoctor({ commit }, a) {
            commit('ADDDOCTOR', a)

        },
        //获取挂号日期
        adddate({ commit }, a) {
            commit('ADDDATE', a);
        },
        //添加就诊人信息
        addpatient({ commit }, a) {
            commit('ADDPATIENT', a);
        }

    },
    modules: {}
})
>>>>>>> 175c0b3202c4a9999a3b4368310deac5eb509618
