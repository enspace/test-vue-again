<template>
  <div class="footer_bar">
    <ul class="footer_bar_ul">
      <li class="footer_bar_li">
        <router-link to="/" @click="footerhome.color=''">
          <Icon id="footerhome" type="home" color="" size="20" />
          <p>主页</p>
        </router-link>
      </li>
      <li class="footer_bar_li" >
        <router-link to="/favorite" color="" @click="this.color='#ec4b4b'">
          <Icon id="footerfavorite" type="heart" size="20" @click="color='#ec4b4b'" />
          <p>收藏</p>
        </router-link>
      </li>
      <li class="footer_bar_li">
        <router-link to="/place">
        <Icon type="location" size="20" />
        <p>地点</p>
        </router-link>
      </li>
      <li class="footer_bar_li">
        <router-link to="/mine">
        <Icon type="gear-b" size="20" />
        <p>我的</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style>
  .footer_bar {
    position: fixed;
    bottom: 0;
    background: #fff; 
    width: 100%;  
  }
  .footer_bar_ul {
    margin-left: auto;
    margin-right: auto;
    text-align: center;
  }
  .footer_bar_li {
    padding-top: 0.1rem;
    margin-left: 0.6rem;
    margin-right: 0.6rem;
    display:inline-block;
  }
  
</style>
