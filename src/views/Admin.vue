<template>
  <div>
    <h1>This is an admin page</h1>
    <h2>Bienvenido {{ currentUser.email }}</h2>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed: {
    ...mapState(['currentUser'])
  }
}
</script>