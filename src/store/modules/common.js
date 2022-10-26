  import style from "../../enums/style";

  const state = () => ({
      mode: true,
      modeStyle: style.styleMode.dark
  })
  const mutations = {
    UPDATE_MODE(state) {
      state.mode = !state.mode;
      state.modeStyle = state.mode ? style.styleMode.dark : style.styleMode.light
    },
  }
  const actions = {
    CHANGE_MODE({ commit, state }) {
      return commit("UPDATE_MODE", state);
    },
  }

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
