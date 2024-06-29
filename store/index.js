// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    language: 'es' // Estado inicial del idioma (español)
  },
  mutations: {
    setLanguage(state, language) {
      state.language = language;
    }
  },
  actions: {
    changeLanguage({ commit }, language) {
      commit('setLanguage', language);
    }
  },
  getters: {
    currentLanguage: state => state.language
  }
});
