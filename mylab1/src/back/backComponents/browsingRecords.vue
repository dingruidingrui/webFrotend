<template>
  <div>
    <el-page-header @back="goBack" content="浏览记录">
    </el-page-header>

    <!--正序查看-->
    <div class="radio">
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>

    <div class="cantainer">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in records.slice((currentPage-1)*pageSize,currentPage*pageSize)"
          :key="index"
          :timestamp="activity.time"
          placement="top">
          <el-card>
            <h4>{{activity.content}}</h4>
            <p>{{activity.action}}</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>

      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="pageSize"
        layout="total,  prev, pager, next, jumper"
        :total="records.length">
      </el-pagination>
    </div>

  </div>
</template>

<script>
    import ElTimeline from "element-ui/packages/timeline/src/main";

    export default {
      components: {ElTimeline},
      name: "browsing-records",

      data(){
          return{
            currentPage:1,//初始页
            pageSize:5, // 每页的数据

            reverse:true,

            //浏览记录，假数据
            records:[
              {time:'2018/4/12',content:'更新 Github 模板',action:'王小虎 提交于 2018/4/12 20:46'},
              {time:'2018/4/3',content:'更新 Github 模板',action:'王小虎 提交于 2018/4/3 20:46'},
              {time:'2018/4/2',content:'更新 Github 模板',action:'王小虎 提交于 2018/4/2 20:46'},
              {time:'2018/3/28',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/28 20:46'},
              {time:'2018/3/25',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/25 20:46'},
              {time:'2018/3/24',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/24 20:46'},
              {time:'2018/3/22',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/22 20:46'},
              {time:'2018/3/21',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/21 20:46'},
              {time:'2018/3/20',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/20 20:46'},
              {time:'2018/3/19',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/19 20:46'},
              {time:'2018/3/18',content:'更新 Github 模板',action:'王小虎 提交于 2018/3/18 20:46'},
            ]

        }
      },

      methods:{
        goBack() {
          console.log('go back');
        },
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

<style scoped>

</style>
