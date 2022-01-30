import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

    activeSideBar : 'Chat',
    isLoggedIn : false,
    currentUser : null,
    currentUserData : null,

    activeContact : null,
    activeMessages : [],


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
    },

    setCurrentUserData : (state , payload) => {
      state.currentUserData = payload;
    },

    setActiveContact : (state, payload) => {
      state.activeContact = payload;
    },

    setActiveMessages : (state, payload) => {
      state.activeMessages.push(payload);
    },

    resetActiveMessages : (state) => {
      state.activeMessages = [];
    },

    resetActiveContact : (state) => {
      state.activeContact = null;
    }

  },

  actions: {},

  modules: {},

});
