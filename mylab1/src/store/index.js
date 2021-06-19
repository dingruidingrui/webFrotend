
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: localStorage.getItem('token') || null,
    userDetail: JSON.parse(localStorage.getItem('userDetail') )|| null,
  },


  mutations: {

    login(state, data){
      localStorage.setItem('token', data.token)
      localStorage.setItem('userDetail', JSON.stringify(data.userDetail))
      state.userDetail = data.userDetail
      state.token = data.token
    },


    logout(state) {
      localStorage.removeItem('token')
      localStorage.removeItem('userDetail')
      localStorage.removeItem('nowconference')
      localStorage.removeItem('myrole')
      state.userDetail = null
      state.token = null
      state.myrole= null
      state.nowconference = null
    },

    //end
  },

})
