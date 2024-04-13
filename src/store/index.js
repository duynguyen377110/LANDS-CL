import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: {
      authId: '',
      email: '',
      phone: '',
      apiKey: '',
      address: '',
      accessToken: '',
      refreshToken: ''
    },
    loader: false
  },
  getters: {
  },
  mutations: {
    toggleLoader(state) {
      state.loader = !state.loader;
    }
  },
  actions: {
  },
  modules: {
  }
})
