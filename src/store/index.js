import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
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
