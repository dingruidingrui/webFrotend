<template>
  <div class="myAside">
    <div class="item">
      <i class="el-icon-user"></i>
      <span slot="title"><a href="/#/back/userInformation">用户信息</a></span>
    </div>
    <div class="item">
      <i class="el-icon-reading"></i>
      <span slot="title"><a href="/#/back/browsingRecords">历史浏览</a></span>
    </div>
    <div class="item">
      <i class="el-icon-reading"></i>
      <span slot="title"><a href="/#/back/browsingRecords">数据中心</a></span>
    </div>
    <div class="item">
      <i class="el-icon-circle-plus-outline"></i>
      <span slot="title">新增图谱</span>
    </div>
    <div class="item">
      <i class="el-icon-place"></i>
      <span slot="title"><a href="/#/community">我的社区</a></span>
    </div>
    <div class="item">
      <i class="el-icon-view"></i>
      <span><a href="/#/back/searchResults">关系图谱</a></span>
    </div>
    <div class="item">
      <i class="el-icon-chat-dot-round"></i>
      <span slot="title"><a href="/#/news">消息中心</a></span>
    </div>
    <div class="item">
      <i class="el-icon-setting"></i>
      <span slot="title">功能设置</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "backMyAside"
}
</script>

<style lang="less" scoped>
.myAside{
  width: 200px;
  position: fixed;
  a{
    text-decoration: none;
    color: #333;
  }
  a:hover{
    color: white;
  }
  .item{
    width: 200px;
    height: 50px;
    margin-top: 10px;
    line-height: 50px;
    align-items: center;
    &:hover{
      background-color: #b4d7ff;
    }
  }
  //item:hover{
  //  background-color: black;
  //
  //}
}
</style>
