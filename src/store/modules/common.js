  const state = () => ({
      mode: true
  })
  const mutations = {
    UPDATE_MODE(state) {
      state.mode = !state.mode;
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
