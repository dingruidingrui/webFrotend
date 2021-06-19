<template>
  <div class="systemNews">
    <div v-for="(item,index) in news" :key="index" class="items">
      <div class="content">
        <div class="part1">
          <span style="color: #333;font-size: 16px;font-weight: 700;">{{item.title}}</span>
          <span style="color: #999;font-size: 12px;line-height: 22px;">{{item.time}}</span>
        </div>
        <div  class="part2">
          <span style="word-break: break-word;color: #666;font-size: 14px;line-height: 19px;">{{item.intro}}</span>
          <a href="https://baidu.com">查看详情</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      news:[
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''},
        {title:'叮！你获得了新的限时任务啦！' ,time: '2021年5月21日 12:13',intro: '你获得了一次可领取额外奖励的机会。截止2021年05月20日 23:59前，快来完成你的限时挑战吧',link: ''}

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
    position: relative;
    .content{
      position: absolute;
      top: 30%;
      width: 780px;
      text-align: left;
      margin-left: 20px;
      .part1 span{
        width: 250px;
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
      a,a:active{
        text-decoration: none;
        color: #1389bf;
        cursor: pointer;
      }
      a:hover{
        color: #7AC5CD;
      }
    }
  }
}
</style>
