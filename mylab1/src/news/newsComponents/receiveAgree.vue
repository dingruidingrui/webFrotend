<template>
  <div class="systemNews">
    <div v-for="(item,index) in agrees" :key="index" class="items">
      <div class="avatar"> <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></div>
      <div class="content">
        <div class="part1">
          <span style="color: #333;font-size: 16px;font-weight: 700;color: #8EE5EE">{{item.username}}</span>
          <span style="color: #999;font-size: 14px;font-weight: 500;">对你的评论表示很赞</span>
          <span style="color: #999;font-size: 12px;line-height: 22px;">{{item.time}}</span>
        </div>
        <div  class="part2">
          <span style="word-break: break-word;color: #666;font-size: 14px;line-height: 19px;">{{item.comment}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      agrees:[
        {username:'我会用魔法把你四岁',time:'2021年5月21日 12:13',comment:'你可真是个小天才'},
        {username:'今天干饭了吗',time:'2021年5月21日 12:13',comment:'你可真是个小天才'},
        {username:'玛卡巴卡',time:'2021年5月21日 12:13',comment:'你可真是个小天才'},
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.systemNews{
  .items{
    margin:20px 10px;
    background: #fff;
    width: 820px;
    border-radius: 4px;
    height:100px;
    display: flex;
    .avatar{
      display: flex;
      flex-direction: column;
      align-items:center;
      justify-content: center;
      margin: 20px;
    }
    .content{
      margin-top: 20px;
      width: 780px;
      text-align: left;
      margin-left: 20px;
      .part1 span{
        width: 150px;
      }
      .part2 span{
        width: 500px;
      }
      span{
        display: inline-block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
    }
  }
}
</style>
