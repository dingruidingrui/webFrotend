<template>
  <div class="community_box">
    <div class="row">
      <el-col :span="16" class="left-home">
          <div class="carousel_box">
            <el-carousel :interval="5000" arrow="always" height="350px">
              <el-carousel-item v-for="item in imagesbox" :key="item.id">
                <img :src="item.idView" class="image" />
              </el-carousel-item>
            </el-carousel>
          </div>


        <!-- 列表头、分割线区域 -->
        <div class="divider_box">
          <span class=""><i class="el-icon-menu square"></i></span>
          <span class="main-title">文章</span>
          <span class="vertical-line"></span>
          <span class="sub-title">Article</span>
          <span class="view-more">
            <a href="https://www.baidu.com">查看更多<i class="el-icon-caret-right"></i></a>
          </span>
        </div>

        <div>
          <!-- 文章列表区域 -->
          <div
            class="card_list"
            v-for="list in articleList.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            :key="list.article.id">
            <el-card>
              <h5>
                <router-link
                  class="card_title"
                  :to="{
                    name: 'BlogDetail',
                    params: { blogId: list.article.id },
                  }"
                >
                  <span>{{ list.article.title }}</span>
                </router-link>
              </h5>
              <div class="card_detail">
                <div class="rol">
                  <i class="el-icon-user"></i>
                  <span>作者</span>
                  <span>{{ list.author }}</span>
                </div>
                <div class="rol">
                  <i class="el-icon-time"></i>
                  <span>发表于</span>
                  <span>{{ list.article.created }}</span>
                </div>
                <div class="rol" style="border-right: 1.2px solid #ccc">
                  <i class="el-icon-s-unfold"></i>
                  <span>分类</span>
                  <span>{{ list.article.categories }}</span>
                </div>
                <div class="rol" style="border-right: 1.2px solid #ccc">
                  <i class="el-icon-view"></i>
                  <span>阅读量</span>
                  <span>{{ list.statistic.hits }}</span>
                </div>
                <div class="rol">
                  <i class="el-icon-chat-dot-round"></i>
                  <span>评论数</span>
                  <span>{{ list.statistic.commentsNum }}</span>
                </div>
              </div>
              <div class="card_desc">
                <p>
                  {{ list.article.smallText }}
                  <!-- {{list.article.content}} -->
                </p>
              </div>
              <div>
                <el-tag type="success">{{ list.article.categories }}</el-tag>
              </div>
            </el-card>
          </div>

          <div class="mpage">
            <el-pagination
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
              :current-page="currentPage"
              :page-size="pageSize"
              layout="total,  prev, pager, next, jumper"
              :total="articleList.length">
            </el-pagination>
          </div>
        </div>
      </el-col>
      <el-col :span="8" class="right-home">
        <div class="detail_box">
          <div>
            <h3>~欢迎来到电影社区~</h3>
            <div>
              <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </div>

            <div>
              <span style="color: #40485b">{{ user.name }}</span>
            </div>
            <div class="maction">
              <span>
                <router-link to="/community" style="text-decoration: none">
                  <el-link type="info" :underline="false">主页</el-link>
                </router-link>
              </span>
              <el-divider direction="vertical" ></el-divider>
              <span >
              <router-link to="/blog/add" style="text-decoration: none">
                <el-link type="success" :underline="false">发表博客</el-link>
              </router-link>
            </span>
              <el-divider direction="vertical"></el-divider>
              <span >
              <router-link to="/login" style="text-decoration: none">
                <el-link type="danger" :underline="false" @click="back">退出</el-link>
              </router-link>
            </span>
            </div>
          </div>
        </div>

        <!-- 最热阅读推荐列表 -->
        <div class="classify_box">
          <h5>最热阅读</h5>
          <div class="list_box">
            <ul>
              <div class="desk">
                <p>忆点点，每天进步亿点点</p>
                              <div class="blogdesk">
                                <img src="../../assets/img/view_/blogdesk.jpg" alt="" />
                              </div>
                              <span>一直以来都有写博客的习惯，原因很简单，记录和分享。前后经历了CSDN，HEXO等，CSDN给人感觉广告太多，而且不是自己...</span>
              </div>


              <li v-for="item in hotAritcleList" :key="item.article.id">
                <router-link :to="{
                    name: 'BlogDetail',
                    params: { blogId: item.article.id }, }">
                  <div class="title">{{ item.article.title }}</div>
                  <div class="date">
                    <span><i class="el-icon-time"></i>{{ item.article.created | moment }}</span>
                    <span class="stat_list">
                      <i class="el-icon-view"></i>{{ item.statistic.hits }}
                      <i class="el-icon-chat-dot-square"></i>{{ item.statistic.commentsNum }}
                      <i class="el-icon-star-off"></i>{{ item.statistic.likes }}
                    </span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <!-- 分类标签区域 -->
        <div class="classify_box">
          <h5>标签墙</h5>
          <div class="tag_box">
            <el-tag
              v-for="item in tagArr"
              :key="item.id"
              effect="plain"
              :type="typeArr[Math.floor(Math.random() * typeArr.length)]">
              <i class="el-icon-collection-tag"></i>
              {{ item.className }} [ {{ item.num }} ]
            </el-tag>
          </div>
        </div>

        <div class="calendar_box">
          <h5>日历</h5>
          <el-calendar v-model="value"></el-calendar>
        </div>
      </el-col>
    </div>

  </div>
</template>

<script>
    export default {
        name: "community-home",

      data(){
          return{
            currentPage:1,//初始页
            pageSize:5, // 每页的数据
            user:{
              name:'叮叮当',
              gender:'男',
              intro:'哥只是个传说',
              place:'上海市杨浦区邯郸路220号',
              industry:'计算机',
              work:'程序员',
              education:'复旦大学',
            },
            // 文章列表
            articleList: [
              {article:{id:0,title:'article1',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article2',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article3',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article4',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article5',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article6',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article7',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article8',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article9',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
              {article:{id:0,title:'article10',created:'2021-5-18',categories:'story',smallText:'123456789'},author:'dr',statistic:{hits:123,commentsNum:32}},
            ],
            // 文章总数
            total: 0,
            // 日历数据
            value: new Date(),
            // 轮播图内容
            imagesbox: [
              { id: 0, idView: require('../../assets/community/美国队长.jpg'), title: '图片1' },
              { id: 1, idView: require('../../assets/community/冰雪女王.jpg'), title: '图片2' },
              { id: 2, idView: require('../../assets/community/天气之子.jpg'), title: '图片2' },
              { id: 3, idView: require('../../assets/community/绯色子弹.jpg'), title: '图片4' }
            ],
            // 是否隐藏col
            isHidden: false,
            // 是否展示轮播图
            // 标签数组
            tagArr: [
              {id:'0',className:'test',num:10},
              {id:'1',className:'here',num:156},
              {id:'2',className:'hahhaha',num:321},
              {id:'3',className:'tech',num:45},
              {id:'4',className:'hehe',num:67},
              {id:'5',className:'laalal',num:53},
              {id:'6',className:'yun',num:90},
              {id:'7',className:'slds',num:3},
            ],
            // 标签类型颜色
            typeArr: ['', 'success', 'info', 'danger', 'warning'],
            // 推荐文章参数
            hotArticle: {
              row: 5, // 返回行数，默认5
              condition: 1 // 1点击、2评论、3点赞
            },
            // 推荐文章列表
            hotAritcleList: [
              {article:{id:'0',title:'nihao',created:'2021-12-14'},statistic:{hits:'123',commentNum:'32',likes:'53'}},
              {article:{id:'1',title:'nihao',created:'2021-12-14'},statistic:{hits:'123',commentNum:'32',likes:'53'}},
              {article:{id:'2',title:'nihao',created:'2021-12-14'},statistic:{hits:'123',commentNum:'32',likes:'53'}},
              {article:{id:'3',title:'nihao',created:'2021-12-14'},statistic:{hits:'123',commentNum:'32',likes:'53'}},
              {article:{id:'4',title:'nihao',created:'2021-12-14'},statistic:{hits:'123',commentNum:'32',likes:'53'}},
            ]
          }
      },
      methods:{
        handleSizeChange(val) {
          this.pagesize = val;
          console.log(this.pagesize)  //每页下拉显示数据
        },

        handleCurrentChange(val){
          this.currentPage = val;
          console.log(this.currentPage)  //点击第几页
        }
      },

    }
</script>

<style lang="less" scoped>
a:hover {
  text-decoration: none;
}
.community_box {
  min-height: 1800px;
  opacity: 0.9 !important;
  .mpage {
    margin: 0 auto;
    text-align: center;
  }
}

.carousel_box {
  margin-top: -40px;
  .image {
    border-radius: 20px;
    width: 100%;
    height: inherit;
    background-size: cover;
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
    border: 1px solid #eee;
    padding: 5px;
  }
}
.divider_box {
  margin: 5% 0;
  .square {
    vertical-align: middle;
    font-size: 34px;
  }
  .main-title {
    display: inline-block;
    vertical-align: middle;
    font-size: 22px;
    padding: 0 10px;
    color: #000;
  }
  .sub-title {
    display: inline-block;
    vertical-align: middle;
    font-size: 18px;
    padding-left: 10px;
    color: #333;
  }
  .vertical-line {
    display: inline-block;
    vertical-align: middle;
    height: 20px;
    width: 1px;
    background-color: #333;
  }
  .view-more {
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    padding-left: 10px;
    padding-top: 1px;
    a {
      font-weight: 500;
      color: #409eff;
      cursor: pointer;
    }
  }
}

.calendar_box {
  margin-top: 4%;
  border-radius: 3px;
  border: 1px solid #eee;
  // background-color: #fff;
  background: rgba(255, 255, 255, 0.3);
  h5 {
    font-size: 18px;
    color: #333;
    text-align: left;
    border-left: 5px solid #409eff;
    border-right: none;
    padding: 2% 5% 3%;
  }
  .el-calendar {
    background: rgba(255, 255, 255, 0.3) !important;
  }
}

.detail_box {
  margin-bottom: 4%;
  text-align: center;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
  min-height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.classify_box {
  margin-top: 4%;
  padding-bottom: 4%;
  // min-height: 20%;
  border-radius: 3px;
  border: 1px solid #eee;
  // background-color: #fff;
  background: rgba(255, 255, 255, 0.3);

  h5 {
    font-size: 18px;
    color: #333;
    text-align: left;
    border-left: 5px solid #409eff;
    border-right: none;
    padding: 2% 5% 3%;
  }
  .tag_box {
    padding: 0% 5%;
    .el-tag {
      margin: 2%;
    }
  }
  .list_box {
    padding: 0% 8%;
    ul {
      padding: 0 !important;
      list-style: none;
      li {
        cursor: pointer;
        padding: 2% 2%;
        border-top: 1px solid #eee;
        transition: all 0.5s;
        border-radius: 2%;
        a {
          color: #333;
          text-decoration: none;
          transition: all 0.5s;
        }
        a:hover {
          color: rgb(117, 147, 238);
        }
        .router-link-active {
          text-decoration: none;
        }
      }
      li:hover {
        margin: 0 -2%;
        background: rgb(226, 250, 220);
        color: rgb(117, 147, 238);
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        span {
          color: rgb(248, 98, 236);
        }
      }
      .desk {
        margin-bottom: 3%;
        span {
          text-align: justify;
          color: #888;
          font-size: 13px;
          line-height: 20px;
        }
        .blogdesk {
          height: 100px;
          width: inherit;
          cursor: pointer;
          overflow: hidden;
          img {
            height: inherit;
            width: 100%;
            transition: all 0.9s;
          }
          img:hover {
            transform: scale(1.1);
          }
        }
      }
    }
    .title {
      // border-top: 1px solid #eee;
      // margin-top: 2%;
    }
    .date {
      margin-top: 2%;
      font-size: 13px;
      line-height: 18px;
      font-weight: 100;
      color: #888;
      display: flex;
      justify-content: space-between;

      .stat_list {
        font-size: 0.7rem;
        line-height: 20px;
        i {
          margin-left: 5px;
          margin-right: 2px;
        }
      }
    }
  }
}

@media only screen and (max-width: 1000px) {
  .calendar_box {
    width: 0;
    display: none;
  }
  .detail_box {
    width: 0;
    display: none;
  }
  .classify_box {
    width: 0;
    display: none;
  }
  .mpage {
    width: inherit;
    overflow: hidden;
  }
}

.el-avatar {
  border: 1px solid rgb(243, 219, 190);
  background-color: rgb(252, 251, 249);
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  padding: 8px;
  position: relative;
  img {
    border-radius: 50%;
    width: 90%;
    height: 90%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
}

.card_list .el-card{
  background: rgba(255, 255, 255, 0.3);
  border-radius: 10px;
  min-height: 200px;
  margin: 0 !important;
  margin-bottom: 5% !important;
}

.card_list {
  .el-card {
    background: rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
    min-height: 200px;
    margin: 0 !important;
    margin-bottom: 5% !important;

    .card_title {
      color: #606266;
      font-size: 1.6rem;
    }
    .card_title:hover {
      color: #007bff;
      text-decoration: none;
    }
    .card_detail {
      width: 100%;
      font-size: 12px;
      color: #999;
      padding: 10px 0;
      .rol {
        float: left;
        margin-right: 8px;
        i {
          margin-right: 4px;
        }
        span {
          margin-right: 5px;
        }
      }
    }
    .card_desc {
      width: 100%;
      color: #555;
      font-size: 16px;
      line-height: 2;
      padding-top: 2%;

      p {
        width: 85%;
        overflow: hidden;
        display: -webkit-box; //将元素设为盒子伸缩模型显示
        -webkit-box-orient: vertical; //伸缩方向设为垂直方向
        -webkit-line-clamp: 2; //超出3行隐藏，并显示省略号
      }
    }
  }
}

</style>

<style scoped lang="less">
.el-calendar-day {
  height: 100% !important;
}
.row {
  margin: 0 !important;
  padding: 0 !important;
}

.left-home{
  padding: 80px;
}
.right-home{
  padding:50px;
}
</style>
