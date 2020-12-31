export default {
  async login (store, user) {
    const info = await this.$axios.$post(store.state.apiBaseUrl + 'signin', user)
    if (info.success) {
      store.commit('accessToken', info.token)
    }
  }
}
