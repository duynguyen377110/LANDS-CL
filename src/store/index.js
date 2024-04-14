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
        user: access.user._id,
        email: access.user.email,
        phone: access.user.phone,
        apiKey: '',
        address: access.user.address,
        accessToken: access.accessToken,
        refreshToken: access.refreshToken,
        slug: access.slug
      }

      localStorage.setItem("user", JSON.stringify(payload));

      state.auth.authId = access.user._id;
      state.auth.email = access.user.email;
      state.auth.phone = access.user.phone;
      state.auth.apiKey = '';
      state.auth.address = access.user.address;
      state.auth.accessToken = access.accessToken;
      state.auth.refreshToken = access.refreshToken;
      state.auth.slug = access.slug;
    },
    authSignin(state, action) {
      let {accessToken, address, email, phone, refreshToken, userId, slug} = action;
      let payload = {
          user: userId,
          email, phone,
          apiKey: '', address,
          accessToken, refreshToken, slug };

      localStorage.setItem("user", JSON.stringify(payload));

      state.auth.authId = userId;
      state.auth.email = email;
      state.auth.phone = phone;
      state.auth.apiKey = '';
      state.auth.address = address;
      state.auth.accessToken = accessToken;
      state.auth.refreshToken = refreshToken;
      state.auth.slug = slug;
    },
    authSignout(state) {
      localStorage.clear();
      state.auth.authId = "";
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

        state.auth.authId = client.user;
        state.auth.email = client.email;
        state.auth.phone = client.phone;
        state.auth.apiKey = '';
        state.auth.address = client.address;
        state.auth.accessToken = client.accessToken;
        state.auth.refreshToken = client.refreshToken;
        state.auth.slug = "";
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
