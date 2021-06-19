<template>
  <div class="information">
    <div class="content">
      <!--<p>年后</p>-->
      <!--<el-divider></el-divider>-->
      <div class="content-item1">
      <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
    </div>
      <div class="content-item2">
        <h1 style="font-size: larger">{{user.name}}</h1>

        <div class="title-father">
          <span class="content-title">性别 </span>
          <span class="content-text">{{user.gender}}</span>
        </div>
        <el-divider></el-divider>
        <div class="title-father">
          <span class="content-title">个性签名 </span>
          <span class="content-text">{{user.intro}}</span>

        </div>
        <el-divider></el-divider>
        <div class="title-father">
          <span class="content-title">居住地 </span>
          <span class="content-text">{{user.place}}</span>
        </div>
        <el-divider></el-divider>
        <div class="title-father">
          <span class="content-title">行业 </span>
          <span class="content-text">{{user.industry}}</span>
        </div>
        <el-divider></el-divider>
        <div class="title-father">
          <span class="content-title">工作 </span>
          <span class="content-text">{{user.work}}</span>
        </div>
        <el-divider></el-divider>
        <div class="title-father">
          <span class="content-title">教育 </span>
          <span class="content-text">{{user.education}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "user-information",
      data(){
        return{
          user:{
            name:'叮叮当',
            gender:'男',
            intro:'哥只是个传说',
            place:'上海市杨浦区邯郸路220号',
            industry:'计算机',
            work:'程序员',
            education:'复旦大学',
          }

        }
      }
    }
</script>

<style scoped>
.information{
  min-width: 1000px;
  background: gainsboro;
  padding: 0;
  margin: 0;
  height: 700px;
  position: relative;
}

  .content{
    height: 500px;
    position: absolute;
    background: white;
    width:60% ;
    left: 20%;
    padding: 0;
    top:100px;
    display: flex;
  }

  .content-item1{
    width: 30%;
  }

.content-item2{
  width: 70%;
}

  .content-title{
    font-size: large;
    font-weight: bold;
    /*position: relative;*/
    /*float: left;*/
    /*text-align: left;*/

  }

  span{
    float: left;
  }
  .title-father{
    height: 24px;
  }

  .content-text{
    position: absolute;
    left: 60%;
  }
</style>
