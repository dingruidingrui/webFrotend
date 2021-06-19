<template>
  <div>
    <vue-particles
      color="#68aaf5"
      :particleOpacity="0.7"
      :particlesNumber="80"
      shapeType="circle"
      :particleSize="3"
      linesColor="#68aaf5"
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
    </vue-particles>

    <el-container>

      <!--导航栏-->
      <el-header>
        <myNav/>
      </el-header>

      <!--主体部分-->
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>

  </div>
</template>

<script>
  import myNav from '@/community/communityComponents/communityHeader'

    export default {
        name: "commun-container",

      components:{
        myNav,
      },


    }
</script>

<style lang="less" scoped>
  a{
    text-decoration: none;
  }

  .el-main{
    padding: 0;
  }
  .el-header{
    padding: 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index:10;
  }

  .el-container{
    position: relative;
    background: linear-gradient(to bottom right,#9cd2f1, #bbfc8f);
  }
  .el-container .main{}
  #particles-js {
    width: 100%;
    position: fixed;

    /* 设置absolute,其他DIV设置为relative，这样这个例子效果就作为背景 */
  }

</style>
