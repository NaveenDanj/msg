import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeSideBar : 'Chat',
    isLoggedIn : false,
    currentUser : null
  },

  mutations: {

    setActiveSideBar : (state , payload) => {
      state.activeSideBar = payload;
    },

    setCurrentUser : (state , payload) => {
      state.currentUser = payload;
    },

    setIsLoggedIn : (state , payload) => {
      state.isLoggedIn = payload;
    }

  },

  actions: {},

  modules: {},

});
