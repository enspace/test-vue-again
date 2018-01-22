<template>
  <div>
    <home-header></home-header>
    <div class="content">
      <ul class="cont_ul">
        <list v-for="item in items" :price="item.price" :title="item.title"/>
      </ul>
      <div class="nonespace"></div>
    </div>
    <footer-bar></footer-bar>
  </div>
</template>
<script>
  import HomeHeader from '../components/HomeHeader'
  import List from '../components/List'
  import FooterBar from '../components/Footer'
  export default {
    components: {
    HomeHeader,
    List,
    FooterBar
    },
    data () {
      return {
        items: [
          { price: "111", title: "鱼丸1"},
          { price: "112", title: "鱼丸2"},
          { price: "113", title: "鱼丸3"},
          { price: "121", title: "鱼丸11"},
          { price: "131", title: "鱼丸12"},
          { price: "211", title: "鱼丸13"},
          { price: "311", title: "鱼丸21"},
          { price: "311", title: "鱼丸21"},
        ]
      }
    }
}
</script>

<style>
  .content {
    max-width: 640px;
    margin: 0 auto;
    overflow: hidden;
  }
  .cont_ul {
    padding-top: 0.05rem;
    margin: 0 -0.12rem;
  }
  .cont_ul:after {
    content: "";
    display: block;
    height: 0;
    width: 0;
    clear: both;
  }
  .nonespace {
    height: 1rem;
  }
</style>

