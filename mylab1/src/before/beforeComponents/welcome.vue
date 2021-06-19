<template>
  <div class="before-welcome">
    <div class="topContainer">

    </div>

<!--      <video-->
<!--        id="myVideo"-->
<!--        class="video-js"-->
<!--        autoplay="true"-->
<!--      >-->
<!--        <source-->
<!--          src="../../assets/视频/混剪有字幕.mp4"-->
<!--          type="video/mp4"-->

<!--        >-->
<!--      </video>-->


    <div class="card-container">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/首页卡片/小罗伯特.jpg" class="image">
        <div style="padding: 14px;">
          <span class="intro-title">小罗伯特</span>
          <p class="intro-content">
            你的眼里，小罗伯特唐尼现实里是怎样的人？
          </p>
          <!--https://www.zhihu.com/question/283801094/answer/674424501-->
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/首页卡片/变形金刚.jpg" class="image">
        <div style="padding: 14px;">
          <span class="intro-title">变形金刚4</span>
          <p class="intro-content">
            如何评价《变形金刚 4》中的中国元素？
          </p>
          <!--https://www.zhihu.com/question/24289226/answer/27570664-->
        </div>
      </el-card>


      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/首页卡片/超人.jpg" class="image">
        <div style="padding: 14px;">
          <span class="intro-title">超人</span>
          <p class="intro-content">
            为什么超人比dc其他超级英雄强那么多?
          </p>
          <!--https://www.zhihu.com/question/345107750/answer/819718515-->
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/首页卡片/海王.jpg" class="image">
        <div style="padding: 14px;">
          <span class="intro-title">海王</span>
          <p class="intro-content">
            电影《海王》中有哪些细思极恐的细节？
          </p>
          <!--电影《海王》中有哪些细思极恐的细节？-->

        </div>
      </el-card>
    </div>

    <div class="card-container">
      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/首页卡片/蜘蛛侠.jpg" class="image">
        <div style="padding: 14px;">
          <span class="intro-title">超凡蜘蛛侠</span>
          <p class="intro-content">
            蜘蛛侠的丝到底是什么材料做的？
          </p>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/首页卡片/哈利波特.jpg" class="image">
        <div style="padding: 14px;">
          <span class="intro-title">哈利波特</span>
          <p class="intro-content">
            成年后再看读哈利波特，有哪些和童年不同的认识？
            <!--https://www.zhihu.com/question/429730936/answer/1571434551-->
          </p>
        </div>
      </el-card>

      <el-card :body-style="{ padding: '0px' }">
        <img src="../../assets/首页卡片/暮光之城.jpg" class="image">
        <div style="padding: 14px;">
          <span class="intro-title">暮光之城</span>
          <p class="intro-content">
            《暮光之城》在美国人眼中是怎样的一个存在？
          </p>
          <!--https://www.zhihu.com/question/27171855/answer/1210935002-->
        </div>
      </el-card>
    </div>


  </div>
</template>

<script>
  export default {
    name: "welcome",


    data() {
      return {
      }
    },

    methods: {

    }

  }
</script>

<style scoped>
.video-js{
  margin-top: 100px;
  /*width: 100%;*/
  /*object-fit: fill;*/
  /*height: 100%;*/
}

  .card-container{
    margin-top: 20px;
    display: flex;
  }

  .el-card{
    margin: 20px;
    flex:1;

  }

  .el-card:hover{
    -webkit-box-shadow: #ccc 0px 10px 10px;
    -moz-box-shadow: #ccc 0px 10px 10px;
    box-shadow: #ccc 0px 10px 10px;
  }


  .image{
    width: 100%;
  }

  .intro-title{
    font-size: 20px;
    font-weight: 900;
  }

  .time {
    font-size: 13px;
    color: #999;
  }

  .topContainer{
    height: 400px;
    overflow: hidden;
    background: black;
  }

</style>
