export default {
  accessToken (state, token) {
    state.authToken = token
    localStorage.setItem('_authToken', token)
  }
}
