<template>
  <div>
    <home-header></home-header>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5641.032689377308!2d103.77704811499534!3d1.2865818097994381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da1b009ec61fe9%3A0x2fca789ed0c90a14!2sPasir+Panjang+Wholesale+Centre!5e0!3m2!1szh-CN!2ssg!4v1516530890476" width="100%" height="500rem" frameborder="0" style="border:0" allowfullscreen>
    </iframe>
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
