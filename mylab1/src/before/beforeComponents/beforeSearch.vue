<template>
  <div id="search">
    <div class="container">
      <el-input placeholder="请输入内容" v-model="input" class="input-with-select" @keyup.enter.native="contact">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
    export default {
        name: "before-search",
      data(){
          return{
            input:'',
          }
      },

      methods:{
          contact(){
            alert("nihao!")
          }
      }
    }
</script>

<style scoped>
#search{
  height: 700px;
  background-image: url("../../assets/搜索界面/2021927.jpg");
  background-size: cover;
}

  .container{
    width: 50%;
    margin: auto;
    padding: 200px 0;
  }

  .el-input{
    /*border:2px solid;*/
    /*border-color: blue;*/
  }
</style>
