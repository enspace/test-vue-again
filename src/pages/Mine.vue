<template>
  <div class="container">
    <home-header></home-header>
    <Avatar icon="person" size="large" />
    <Timeline>
        
      
            <TimelineItem color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>恭喜你今天吃了最多</span>
            </TimelineItem>
            <TimelineItem color="green">2017.12.9消费200GSD</TimelineItem>
            <TimelineItem color="red">2017.06.16消费22GSD</TimelineItem>
            <TimelineItem color="blue">2017.05.19消费130GSD</TimelineItem>
            </Timeline>

            <Timeline>
        
      
            <TimelineItem color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>恭喜你今天吃了最多</span>
            </TimelineItem>
            <TimelineItem color="green">2017.12.9消费200GSD</TimelineItem>
            <TimelineItem color="red">2017.06.16消费22GSD</TimelineItem>
            <TimelineItem color="blue">2017.05.19消费130GSD</TimelineItem>
            </Timeline>

            <Timeline>
        
      
            <TimelineItem color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>恭喜你今天吃了最多</span>
            </TimelineItem>
            <TimelineItem color="green">2017.12.9消费200GSD</TimelineItem>
            <TimelineItem color="red">2017.06.16消费22GSD</TimelineItem>
            <TimelineItem color="blue">2017.05.19消费130GSD</TimelineItem>
            </Timeline>

            <Timeline>
        
      
            <TimelineItem color="green">
            <Icon type="trophy" slot="dot"></Icon>
            <span>恭喜你今天吃了最多</span>
            </TimelineItem>
            <TimelineItem color="green">2017.12.9消费200GSD</TimelineItem>
            <TimelineItem color="red">2017.06.16消费22GSD</TimelineItem>
            <TimelineItem color="blue">2017.05.19消费130GSD</TimelineItem>
            </Timeline>

            
          
            <div class="test">
              <img src="../assets/img/footer.png" alt="aaaa">
            </div>
    
  </div>
</template>  

<script>
  import HomeHeader from '../components/HomeHeader'
  import List from '../components/List'

  export default {
    components:{
      HomeHeader
    }
  }
</script>

<style>
  .test{
    position: fixed;
    bottom: 0;
    widows: 100%;
    text-align: center;
  }

  .test > img{
      max-width: 640px;
  }
</style>

