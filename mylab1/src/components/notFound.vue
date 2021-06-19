<template>
  <div class="notFound">
    <div class="content">
      <p>您查找的页面不存在哦o(╥﹏╥)o</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "notFound"
}
</script>

<style lang="less" scoped>
.notFound{

  background-image:url('../assets/404/404.jpg');
  /*让背景图片自适应窗口*/
  width: 100%;
  height: 100%;
  position: fixed;

  background-repeat:no-repeat;
  background-size:cover;
  -webkit-background-size:cover;
  -o-background-size:cover;
  background-position:center 0;

  min-width: 1000px;

  .content{
    margin-left: 30%;
    margin-top: 15%;
    background-color: rgba(255,255,255,0.5);
    color: deepskyblue;
    width: 500px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: xxx-large;
    font-weight: 700;
    font-family: Helvetica, 'Hiragino Sans GB', 'Microsoft Yahei', '微软雅黑', Arial, sans-serif;
  }
}
</style>
