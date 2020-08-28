<template>
  <div>
    <h2>La página que buscas no existe</h2>
    <button @click="home" type="button" class="btn btn-outline-primary">Volver al inicio</button>
  </div>
</template>

<script>
export default {
  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>