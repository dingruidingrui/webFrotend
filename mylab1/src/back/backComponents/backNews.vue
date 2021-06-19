<template>
  <div class="news">
    <div class="left">
      <div class="news-item title"><i class="el-icon-s-promotion"></i>消息中心</div>
      <div class="news-item">
        <i class="el-icon-magic-stick"></i>
        <a>艾特我的</a>
      </div>
      <div class="news-item">
        <i class="el-icon-magic-stick"></i>
        <a>收到的赞</a>
      </div>
      <div class="news-item">
        <i class="el-icon-magic-stick"></i>
        <a>系统通知</a>
      </div>
      <div class="news-item">
        <i class="el-icon-magic-stick"></i>
        <a>我的消息</a>
      </div>
      <div class="news-item">
        <i class="el-icon-magic-stick"></i>
        <a>私信存档</a>
      </div>
      <el-divider></el-divider>
      <div class="news-item">
        <i class="el-icon-s-tools"></i>
        <a>消息设置</a>
      </div>
    </div>
    <div class="right">
      <div class="right-title">
        <p>{{rightTitle}}</p>
      </div>
      <div class="right-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {
      // pageName: "introduction",
      rightTitle:'收到的赞'
    };
  },

  methods: {
    // toSim(name) {
    //   this.pageName = name;
    // },
  },
  components: {
    // introduction,
    // test,
  },
};
</script>

<style lang="less" scoped>
.news{
  background-image: url('../../assets/back/news/back.jpg');
  /*让背景图片自适应窗口*/
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;

  background-repeat:no-repeat;
  background-size:cover;
  -webkit-background-size:cover;
  -o-background-size:cover;
  background-position:center 0;

  margin: 0;
  padding: 0;
  min-width: 1000px;

  .left{
    width: 140px;
    height: 100%;
    box-sizing: border-box;
    background-color: rgba(255,255,255,0.8);
  }
  .right{
    box-sizing: border-box;
    width: 840px;
    min-height: 670px;
    background-color: rgba(255,255,255,0.5);
    .right-title{
      box-sizing: border-box;
      margin:10px;
      height: 42px;
      background-color: #fff;
      box-shadow:rgb(121 146 185 / 54%);
      border-radius: 4px;
      text-align: center;
      color: pink;
      line-height: 42px;
    }
  }

  .title{
    height:62px !important;
    align-items: center;
    display: flex;
    justify-content: center;
  }
  a{
    padding-left: 10px;
  }

  .news-item{
    height:40px;
    align-items: center;
    display: flex;
    justify-content: center;

  }
  .news-item:hover,.news-item:active{
    color: #2faee3;
  }
}
</style>
