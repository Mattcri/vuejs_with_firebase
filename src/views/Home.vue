<template>
  <div class="home">
    <div class="container">
      <form @submit.prevent="login">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input v-model="pass" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import Navbar from '@/components/Navbar.vue'
import firebase from 'firebase'
import { mapActions } from 'vuex'

export default {
  name: 'Home',
  data() {
    return {
      email: '',
      pass: ''
    }
  },
  methods: {
    ...mapActions(['setUser']),
    login() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.pass)
        .then(() => {
          this.setUser({
            email: this.email
          })
          this.$router.push('/admin')
        })
        .catch(() => {
          alert('Nono! no has dicho la palabra mágica')
        })
    }
  },
  components: {
    // Navbar
  }
}
</script>
