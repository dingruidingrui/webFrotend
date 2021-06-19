<template>
  <div class="welcome">
    <!-- 面包屑导航区域 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/back' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>欢迎</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card class="box_items">
      <el-row>
        <el-col :span="6" v-for="item in staticInfo" :key="item.id">
          <div class="box_item">
            <div class="left_item">
              <el-button :type="item.type" :icon="item.icon" circle @click="goTo(item.link)"></el-button>
            </div>
            <div class="right_item">
              <div>
                <h4>{{item.theme}}: <span>{{item.num}}</span></h4>
              </div>
              <div>
                <el-progress :status="item.status" :text-inside="true" :stroke-width="20" :percentage="item.percentage"></el-progress>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>

    </el-card>

    <!-- 走马灯区域 -->
    <el-card >
      <div class="carousel_box">
        <el-carousel :interval="4000" type="card" :height="carousel_height + 'px'">
          <el-carousel-item v-for="item in imgList" :key="item.id">
            <div >
              <img :src="item.idView" class="image">
            </div>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-card>

  </div>
</template>

<script>
    export default {
        name: "newwelcome",
      data(){
          return{
            // 后台统计信息 （伪数据）
            staticInfo: [
              {
                id: 1,
                type: 'primary',
                status: 'primary',
                icon: 'el-icon-user',
                theme: '用户',
                percentage: 32,
                num: 27,
                link:'/back/userInformation'
              },
              {
                id: 2,
                type: 'success',
                status: 'success',
                icon: 'el-icon-document-copy',
                theme: '文章',
                percentage: 64,
                num: 93,
                link:'/back/userInformation'
              },
              {
                id: 3,
                type: 'danger',
                status: 'exception',
                icon: 'el-icon-chat-dot-square',
                theme: '评论',
                percentage: 83,
                num: 135,
                link:'/userInformation'
              },
              {
                id: 4,
                type: 'warning',
                status: 'warning',
                icon: 'el-icon-message',
                theme: '消息',
                percentage: 47,
                num: 56,
                link:'/userInformation'
              }
            ],

            // 走马灯图片
            imgList: [
              { id: 0, idView: require('../../../assets/img/carousel/a1.jpg'), title: '图片1' },
              { id: 1, idView: require('../../../assets/img/carousel/a2.jpg'), title: '图片2' },
              { id: 2, idView: require('../../../assets/img/carousel/a3.jpg'), title: '图片2' },
              { id: 3, idView: require('../../../assets/img/carousel/a4.jpg'), title: '图片4' }
            ],

            // 时间线
            reverse: true,
            activities: [
              {
                content: '网站体验版完成，即将考试，部分功能及优化未完待续。。。',
                timestamp: '2020-06-29'
              },
              {
                content: '网站问题修改样式，挺高用户体验',
                timestamp: '2020-06-23'
              }, {
                content: '将网站部署到阿里服务器、提供网站给测试工程师测试',
                timestamp: '2020-06-17'
              }, {
                content: '前后端开发正式开始',
                timestamp: '2020-06-07'
              }, {
                content: '个人项目基础知识学习、初步确定了小组成员分工',
                timestamp: '2020-06-03'
              }, {
                content: '实训选题、数据库结构讨论，确定了前后端分离的开发模式',
                timestamp: '2020-06-01'
              }],

            // 表格数据
            tableData: [
              {
                id: 2017030402003,
                name: '陈厚东',
                work: '项目经理、前端工程师'
              }, {
                id: 2017030402021,
                name: '林凯智',
                work: '后端工程师、数据库设计师'
              }, {
                id: 2017030402005,
                name: '陈伊娜',
                work: '前端工程师'
              }, {
                id: 2017030402009,
                name: '郭佳鹏',
                work: '测试工程师'
              }, {
                id: 2017030402014,
                name: '赖源雄',
                work: '资料收集、文档编辑'
              }],
            carousel_height: 350
          }
      },
      methods:{
          goTo(name){
            this.$router.push({path:name})
          },
      }
    }

</script>

<style scoped>

.box_items{
  box-sizing: border-box;
  /*height: 100px;*/
}

.box_items .box_item{

  padding: 10px;
  border: 1px solid #eee;
  transition: all 0.8s;
  min-height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.box_items .box_item .left_item{
  width: 30%;
}

.box_items .box_item .left_item .el-button{
  width: 60px;
  height: 60px;
  outline: none;
  font-size: 30px;
}
.box_items .box_item .right_item{
  width: 70%;
}

.box_items .box_item .right_item .span{
  color: #666 ;
}

.box_items .box_item:hover{
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}




.carousel_box{
  margin: 20px 5px;
}
.carousel_box .image{
  border-radius: 20px;width: 100%;height: inherit;background-size:cover;background-color: #fff; box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04); border: 1px solid #eee;padding:5px;
}

 /deep/.el-timeline{
    padding-top: 5%;
  }


  radio /deep/ el-radio-group{
     padding-top: 5px;
   }
</style>

<!--新版样式-->
<style lang="less" scoped>
.welcome{
  padding: 10px;
  min-width: 1000px;
  .el-breadcrumb{
    margin: 20px;
    font-size: large;
  }
}

</style>
