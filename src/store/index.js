import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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