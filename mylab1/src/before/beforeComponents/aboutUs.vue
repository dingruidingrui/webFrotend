<template>
  <div id="about-us">
    <vue-particles
      color="#98F5FF"
      :particleOpacity="1"
      :particlesNumber="150"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
      <!--color: String类型。默认’#dedede’。粒子颜色。-->
      <!--particleOpacity: Number类型。默认0.7。粒子透明度。-->
      <!--particlesNumber: Number类型。默认80。粒子数量。-->
      <!--shapeType: String类型。默认’circle’。可用的粒子外观有：“circle”,“edge”,“triangle”, “polygon”,“star”。-->
      <!--particleSize: Number类型。默认80。单个粒子大小。-->
      <!--linesColor: String类型。默认’#dedede’。线条颜色。-->
      <!--linesWidth: Number类型。默认1。线条宽度。-->
      <!--lineLinked: 布尔类型。默认true。连接线是否可用。-->
      <!--lineOpacity: Number类型。默认0.4。线条透明度。-->
      <!--linesDistance: Number类型。默认150。线条距离。-->
      <!--moveSpeed: Number类型。默认3。粒子运动速度。-->
      <!--hoverEffect: 布尔类型。默认true。是否有hover特效。-->
      <!--hoverMode: String类型。默认true。可用的hover模式有: “grab”, “repulse”, “bubble”。-->
      <!--clickEffect: 布尔类型。默认true。是否有click特效。-->
      <!--clickMode: String类型。默认true。可用的click模式有: “push”, “remove”, “repulse”, “bubble”。-->


      <!--<p class="intro"> 电影百科，知你所知</p>-->
    </vue-particles>
    <div class="intro">
      <p class="intro-content"> 我们永远都无法预知一部电影的结果。每部片子都有一道窄门，我们只能凭着自己的判断力决定是否应该跨进去。——克里什托夫·基耶斯洛夫斯基</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "about-us"
    }
</script>

<style scoped>
#about-us{
  background: #1C1C1C;
}

  .intro{
    width: 40%;
    color: white;
    z-index: 10;
    margin: 0;
    position: absolute;
    top:50%;
    left: 30%;

    line-height: 40px;
    font-size: large;

  }
  .intro-content{

  }
</style>
