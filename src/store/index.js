import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lang: "kr",
  },
  mutations: {
    lang(state, val) {
      state.lang = val;
    },
  },
});
