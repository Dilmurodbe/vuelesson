import Vuex from "vuex";
import axios from "axios";
export default new Vuex.Store({
  state: {
    menu: [],
    search: [],
  },
  mutations: {
    setMenu: (state, payload) => {
      state.menu = payload;
      
    },
   
  },
  actions: {
    getsearch(context, url) {
      axios.get(url).then((res) => {
        context.commit("setMenu", res.data);
      });
    },


    getMenu(context, url) {
      axios.get(url).then((res) => {
        context.commit("setMenu", res.data);
      });
  },
},
  getters: {
    // getMountain: (state) => state.databek,
    getsearch(state) {
      return state.search;
    },
    getapi(state) {
      return state.menu;
    },
  },

});
