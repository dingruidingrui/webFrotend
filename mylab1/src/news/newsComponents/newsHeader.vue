<template>
  <!--  <el-row class="nav">-->
  <!--    <el-col :span="9" class="menu">-->
  <!--      <el-menu  class="el-menu-demo" mode="horizontal">-->
  <!--        <el-menu-item  index="0">-->
  <!--          <el-image  :src="src"></el-image>-->
  <!--        </el-menu-item>-->
  <!--        <el-menu-item  index="1" ><a href="/#/back">首页</a></el-menu-item>-->
  <!--        <el-menu-item  index="2" ><a href="/#/back">电影百科</a></el-menu-item >-->
  <!--        <el-menu-item  index="3"><a href="/#/back">关于我们</a></el-menu-item>-->
  <!--        <el-menu-item  index="4">更多详情</el-menu-item>-->
  <!--      </el-menu>-->
  <!--    </el-col>-->

  <!--    <el-col :span="5" class="search">-->
  <!--      <el-input  v-model="myinput" placeholder="请输入内容" @keyup.enter.native="contact"></el-input>-->
  <!--    </el-col>-->

  <!--    <el-col :span="5" class="message">-->
  <!--      <el-badge :value="12" class="item">-->
  <!--        <el-button size="small">评论</el-button>-->
  <!--      </el-badge>-->
  <!--      <el-badge :value="3" class="item">-->
  <!--        <el-button size="small">回复</el-button>-->
  <!--      </el-badge>-->
  <!--    </el-col>-->

  <!--    <el-col :span="5" class="user">-->
  <!--      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>-->
  <!--      <el-dropdown @command="handleCommand">-->
  <!--      <span class="el-dropdown-link">-->
  <!--        user<i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
  <!--      </span>-->
  <!--        <el-dropdown-menu slot="dropdown">-->
  <!--          <el-dropdown-item icon="el-icon-plus" command="a">个人信息</el-dropdown-item>-->
  <!--          <el-dropdown-item icon="el-icon-circle-plus" command="b">退出</el-dropdown-item>-->
  <!--        </el-dropdown-menu>-->
  <!--      </el-dropdown>-->
  <!--    </el-col>-->

  <!--  </el-row>-->
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
      <el-dropdown @command="handleCommand">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-plus" command="a">个人信息</el-dropdown-item>
          <el-dropdown-item icon="el-icon-circle-plus" command="b">退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </el-menu>
</template>

<script>
export default {

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
    handleCommand(command){
      console.log("nihao");
    }

  }
}
</script>

<style lang="less" scoped>



.message{
  margin: 0;
  padding: 0;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409EFF;
}

.el-image{
  margin-top: 10px;
}


.user{
  float: right;
  margin: 0;
  margin-right: 30px;
  margin-top: 10px;
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
