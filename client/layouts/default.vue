<template>
  <div class="wrap">
    <Header/>
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
  import Header from '~/components/header'
  import Footer from '~/components/footer'

  export default {
    name : "default",
    components: {
      Header,
      Footer
    }
  }
</script>

<style>
</style>
