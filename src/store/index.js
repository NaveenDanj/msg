import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    activeSideBar : ''

  },
  mutations: {

    setActiveSideBar : (state , payload) => {
      state.activeSideBar = payload;
    }


  },
  actions: {},
  modules: {},
});
