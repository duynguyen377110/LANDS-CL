import { createStore } from 'vuex'

export default createStore({
  state: {
    auth: {
      id: '',
      email: '',
      phone: '',
      apiKey: '',
      address: '',
      accessToken: '',
      refreshToken: '',
      slug: '',
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
    },
    authSignup(state, action) {
      
      let { access } = action;
      let payload = {
        id: access.user._id,
        email: access.user.email,
        phone: access.user.phone,
        apiKey: '',
        address: access.user.address,
        accessToken: access.accessToken,
        refreshToken: access.refreshToken,
        slug: access.slug
      }

      localStorage.setItem("user", JSON.stringify({...payload}));
      state.auth = {...payload};
    },
    authSignin(state, action) {
      let { access } = action;

      let payload = {
        apiKey: '',
        id: access.user._id,
        address: access.user.address,
        email: access.user.email,
        phone: access.user.email,
        accessToken: access.accessToken,
        refreshToken: access.refreshToken,
        slug: access.slug
    }

      localStorage.setItem("user", JSON.stringify({...payload}));
      state.auth = {...payload};
    },
    authSignout(state) {
      localStorage.clear();
      state.auth.id = "";
      state.auth.email = "";
      state.auth.phone = "";
      state.auth.apiKey = '';
      state.auth.address = "";
      state.auth.accessToken = "";
      state.auth.refreshToken = "";
      state.auth.slug = "";
    },
    authReload(state) {
      let client = localStorage.getItem("user");
      if(client) {
        client = JSON.parse(client);
        state.auth = {...client};
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
