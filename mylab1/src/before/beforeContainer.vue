<template>
  <div>
    <el-container>
      <el-header>    <beforeHeader /></el-header>
      <el-main>     <router-view /> </el-main>
      <el-footer><beforeFooter/></el-footer>
    </el-container>
  </div>
</template>

<script>
  import beforeHeader from '@/before/beforeComponents/beforeHeader'
  import beforeFooter from '@/before/beforeComponents/beforeFooter'
    export default {
        name: "before-container",
      components:{
          beforeHeader,
          beforeFooter
      }

    }
</script>

<style scoped>

  .el-header{
    padding: 0;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    z-index:10;
  }
.el-container{
  /*background-image:url("../assets/tempFront/back.jpg");*/
  /*background-repeat: repeat;*/
}
.el-main{
  padding: 0;
}

.el-footer{
  padding: 0;
  margin: 0;
}
</style>
