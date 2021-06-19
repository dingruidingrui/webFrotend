<template>
  <el-menu
    class="el-menu-vertical-demo">
    <el-menu-item index="1">
      <i class="el-icon-user"></i>
      <span slot="title"><a href="/#/back/userInformation">用户信息</a></span>
    </el-menu-item>
    <el-menu-item index="2">
      <i class="el-icon-reading"></i>
      <span slot="title"><a href="/#/back/browsingRecords">历史浏览</a></span>
    </el-menu-item>
    <el-menu-item index="8">
      <i class="el-icon-reading"></i>
      <span slot="title"><a href="/#/back/browsingRecords">数据中心</a></span>
    </el-menu-item>
    <el-menu-item index="3">
      <i class="el-icon-circle-plus-outline"></i>
      <span slot="title">新增图谱</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-place"></i>
      <span slot="title"><a href="/#/community">我的社区</a></span>
    </el-menu-item>
    <el-submenu index="5">
      <template slot="title">
        <i class="el-icon-view"></i>
        <span><a href="/#/back/searchResults">关系图谱</a></span>
      </template>
      <el-menu-item index="5-2">新增图谱</el-menu-item>
      <el-menu-item index="5-1">查看图谱</el-menu-item>
    </el-submenu>
    <el-menu-item index="6">
      <i class="el-icon-chat-dot-round"></i>
      <span slot="title">消息中心</span>
    </el-menu-item>
    <el-menu-item index="7">
      <i class="el-icon-setting"></i>
      <span slot="title">功能设置</span>
    </el-menu-item>
  </el-menu>

</template>

<script>
export default {
  name: "asideNav"
}
</script>

<style lang="less" scoped>
.el-menu{
  width: 200px;
  margin: 0;
  padding: 0;

  a{
    text-decoration: none;
    color: #333;
  }
  a:active,a:hover{
    color: #00feff;
  }
}
</style>
