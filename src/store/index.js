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
    pagination: {
      page: {
        land: {
          amount: 0,
          currentPage: 0,
          elementsTab: [],
          quantityElementOnPage: 15,
        }
      }
    },
    loader: false
  },
  getters: {
  },
  mutations: {
    setPagiAmountLand(state, action) {
      let { amount } = action;
      let pages = Math.ceil(amount / state.pagination.page.land.quantityElementOnPage);

      state.pagination.page.land.amount = amount;
      state.pagination.page.land.elementsTab = Array.from({length: pages}, (_, index) => index);
    },
    updatePagiCurrentTab(state, action) {
      let quatity = state.pagination.page.land.quantityElementOnPage;
      state.pagination.page.land.currentPage = ((action + 1) - 1) * quatity;
    },
    toggleLoader(state) {
      state.loader = !state.loader;
    }
  },
  actions: {
  },
  modules: {
  }
})
