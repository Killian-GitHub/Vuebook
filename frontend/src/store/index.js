import { createStore } from 'vuex'
import router from 'vue-router'
import axios from 'axios'

export default createStore({
  state: {
    accessToken: null,
    loggingIn: false,
    loginError: null,
  },
  mutations: {
    loginStart: (state) => (state.loggingIn = true),
    loginStop: (state, errorMessage) => {
      state.loggingIn = false
      state.loginError = errorMessage
    },
    logout: (state) => {
      state.accessToken = null
    },
  },
  actions: {
    loggedIn({ commit }, loginData) {
      commit('loginStart')

      axios
        .post('https://localhost:3000/api/auth/login', {
          ...loginData,
        })
        .then((response) => {
          localStorage.setItem('accessToken', response.data.token)
          commit('loginStop', null)
          router.push('/users')
        })
        .catch((error) => {
          commit('loginStop', error.response.data.error)
          commit('updateAccessToken', null)
        })
    },
    fetchAccessToken({ commit }) {
      commit('updateAccessToken', localStorage.getItem('accessToken'))
    },
    logout({ commit }) {
      localStorage.removeItem('accessToken')
      commit('logout')
      router.push('/login')
    },
  },
})
