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
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
