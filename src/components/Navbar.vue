<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav ml-auto">
          <li v-if="!currentUser" class="nav-item">
          <router-link to="/">Home</router-link>
          </li>
          <li class="nav-item">
          <router-link to="/admin">Admin</router-link>
          </li>
          <li class="nav-item" v-if="currentUser">
            <a href="#" @click.prevent="logout">Salir</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase'
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions(['setUser']),
    logout() {
      firebase.auth().signOut()
        .then(() => {
          this.$router.push('/')
          this.setUser(undefined)
        })
    }
  },
  computed: {
    ...mapState(['currentUser'])
  }
};
</script>

<style>
</style>