<template>
  <div class="outbox">
    <div class="result"><div>搜索结果</div></div>
    <div class="rent">
      <ul v-for="(h,index) in house">
        <li>
          <router-link :to="{name:'show',query:{hid:h.hid}}"><img :src="h.pic1" style="float: left;width: 210px;height: 150px;position: relative;">
          <div class="rent_info">
            <a href="" target="_blank">
              <b class="rent_title">{{h.htitle}}</b>
            </a>
            <p class="rent_details"  >
              <b class="rent_title" style="font-weight: normal">{{h.type}}</b>&nbsp
              <span>|</span>
              &nbsp<b class="rent_title" style="font-weight: normal">{{h.area}}</b>平米&nbsp
              <span>|</span>
              &nbsp<b class="rent_title" style="font-weight: normal">{{h.lever}}</b>楼
            </p>
            <address class="rent_details" >
              {{h.address}}
            </address>
          </div>
          <div class="rent_price">
            <strong>
              <b class="rent_title" style="color: #eb5f00;text-align: right;">{{h.price}}</b><span style="color: #eb5f00;text-align: right">/月</span>
            </strong>
          </div>
          </router-link>
        </li>
      </ul>
      <div class="noData" v-if="this.total==0">暂无结果</div>
    </div>
    <el-pagination
      background
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :current-page="this.params.page"
      :total="this.total">
    </el-pagination>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {

    data () {
      return {
        house:[],
        total: 0,
        params: {
          page: 1,
          size: 6
        },
        address:""
      }
    },


    methods:{

      changePage:function (page) {
        this.params.page = page;
        this.select()
      },
      select:function () {
//          这里不能加{{}}，而且要加this
         var addr = this.$route.query.cc

         var url = "api/hSearch"
        axios.post(url,{address:addr,page:this.params.page,size:this.params.size}).then(res=>{
          this.house = res.data.list
          this.total = res.data.total
          if(res.data == ""){
            this.total = 0
          }
//          if(res.data.total==0)
        })
      }

    },
    watch: {
      '$route'(address){
         this.select()
      }
    },
    mounted:function () {
      this.select()
    }

  }
</script>
}
<style>
  .result{
    border : solid 2px white;
    height: 50px;
    border-bottom: solid 2px #62ab00;

    color:green;
  }
  .result div{
    width: 130px;
    height: 40px;
    background-color: #62ab00;
    line-height: 40px;
    font-size: 20px;
    margin: 10px 0 0 0px;
    text-align: center;
    color: white;
  }
  .outbox{
    margin:0 auto;
    width:1180px;
  }
  .rent ul li{

    height: 176px;

    border-top: 1px dashed #e6e6e6;
    cursor: pointer;
  }
  .rent_info{
    float: left;
    padding-left: 20px;
    width: 865px;
    overflow: hidden;
    font-size: 14px;
    color: #797979;

  }
  .rent_title{
    height: 34px;
    line-height: 40px;
    margin-bottom: 6px;
    display: inline;
    font-size: 25px;
  }
  .rent_details{
    width: 440px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 30px;
    line-height: 30px;

  }
  .noData{
    width: 1180px;
    height: 400px;
    text-align: center;
    line-height: 200px;
    font-size: 40px;
    color: #62ab00;
  }

</style>
