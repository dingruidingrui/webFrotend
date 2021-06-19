<template>
  <div id = "back">
    <el-container class="container_box">
      <el-header style="height:70px"><myNav/></el-header>
      <el-container>
        <el-aside width="240px">
          <!-- 侧边菜单条 -->
          <asideNav />

        </el-aside>
        <el-main>
          <div class="content">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  import myNav from '@/back/backComponents/backHeader'
  // import asideNav from "./backComponents/asideNav";
  import asideNav from "./backComponents/backMyAside";


    export default {
        name: "backComponents",

      components:{
          myNav,
        asideNav
      },

      data(){
          return{
            // 是否折叠
            // isCollapse: true,
          }
      },

      methods: {
      },

      mounted () {
        // 监听屏幕大小，宽度小于1000将隐藏右边的栏目
        window.onresize = () => {
          return (() => {
            // console.log(document.body.clientWidth)
            if (document.body.clientWidth < 1200) {
              this.isCollapse = true
            } else {
              this.isCollapse = false
            }
          })()
        }
      }


    }
</script>

<style scoped>
a{
  text-decoration: none;
}

.el-main{
  padding: 0;
  background: lightgray;
}
.el-header{
  padding: 0;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index:10;
}

.el-aside{
  position: sticky;
  top: 0;
}


.content{
  margin: 50px;
  background: white;
}
</style>
