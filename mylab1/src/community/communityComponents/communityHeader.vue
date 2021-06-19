<template>
  <el-menu  class="el-menu-demo" mode="horizontal">
    <el-menu-item  index="0">
      <el-image  :src="src"></el-image>
    </el-menu-item>
    <el-menu-item  index="1" ><a href="/#/back">首页</a></el-menu-item>
    <el-menu-item  index="2" ><a href="/#/back">电影百科</a></el-menu-item >
    <el-menu-item  index="3"><a href="/#/back">关于我们</a></el-menu-item>
    <el-menu-item  index="4">更多详情</el-menu-item>
    <el-menu-item  index="5">
      <el-input  v-model="myinput" placeholder="请输入内容" @keyup.enter.native="contact"></el-input>
    </el-menu-item>

    <!--@mouseover="show=1" @mouseout="show = -1"-->
    <div class="user">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
      <!--<div v-if="show == 1" class="sec-menu">nihao</div>-->
    </div>
  </el-menu>
</template>

<script>
  export default {
    name: "community-header",
    data() {
      return {
        show: -1,
        src: 'https://static.allhistory.com/online/common/img/logo-ah.1598.svg',
        myinput:'',
      };
    },
    methods: {
      contact(){
        console.log(this.myinput);
      },

    }
  }
</script>

<style scoped>
  .el-image{
    margin-top: 10px;
    /*margin-bottom: 0;*/
    /*width:50px;*/
  }


  .user{
    float: right;
    margin: 10px;
  }

  a{
    text-decoration:none;
  }

  .sec-menu{
    position: absolute;

  }

  .el-menu{
    min-width: 1000px;
  }
</style>
