<template>
  <el-menu  class="el-menu-demo" mode="horizontal">
    <el-menu-item  index="0">
      <el-image  :src="src"></el-image>
    </el-menu-item>
    <el-menu-item  index="1" ><a href="/#/before/beforeWelcome">首页</a></el-menu-item>
    <el-menu-item  index="2" ><a href="/#/before/beforeSearch">电影百科</a></el-menu-item >
    <el-menu-item  index="3"><a href="/#/before/aboutUs">关于我们</a></el-menu-item>
    <el-menu-item  index="4">更多详情</el-menu-item>
    <el-menu-item  index="5">
      <el-input  v-model="myinput" placeholder="请输入内容" @keyup.enter.native="contact"></el-input>
    </el-menu-item>

    <el-button type="primary" icon="el-icon-user" class="login" @click = "login">登录</el-button>
  </el-menu>
</template>

<script>
    export default {
        name: "beforeHeader",
      data(){
          return{
            src: 'https://static.allhistory.com/online/common/img/logo-ah.1598.svg',
            myinput:''
          }
      },

      methods:{
          contact(){
           console.log(this.myinput);
          },

        login(){
          this.$router.replace('/login')
        }
      }
    }

</script>

<style scoped>
  .el-image{
    margin-top: 10px;
    /*margin-bottom: 0;*/
    /*width:50px;*/
  }


.login{
  float: right;
  margin: 10px;
}

  a{
    text-decoration:none;
  }

  .el-menu{
    min-width: 1000px;
  }
</style>
