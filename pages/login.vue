<template>
  <div class="container">
    <div class="col-4">
      <h1>Login</h1>
      <p>If you already have an account you can login</p>
      <div class="form-group">
        <input type="text" v-model="user.email" class="form-control" placeholder="Enter your email">
      </div>
      <div class="form-group">
        <input type="password" v-model="user.password" class="form-control" placeholder="Enter your password">
      </div>
      <div class="form-group">
        <button class="btn btn-success" @click="login()">Login</button>
      </div>
      <hr>
      <p>Don't have an account, <nuxt-link to='/register'>Register</nuxt-link> to create one</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', this.user)
    }
  }
}
</script>

<style>
</style>
