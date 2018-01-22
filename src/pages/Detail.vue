<template>
  <div>
    <home-header></home-header>
    <router-link to="/">
      this is detail
    </router-link>
    <footer-bar/>  
  </div>
</template>

<script>
  import HomeHeader from '../components/HomeHeader'
  import FooterBar from '../components/Footer'

  export default {
    components:{
      HomeHeader,
      FooterBar
    }
  }
</script>
