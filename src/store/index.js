import Vuex from "vuex";

export default new Vuex.Store({
  state: {
    menubar: true,
  },
  mutations: {
    setMenubar: (state) => {
      state.menubar = !state.menubar;
    },
  },
  getters: {
    getMenubar: (state) => state.menubar,
  },
});
