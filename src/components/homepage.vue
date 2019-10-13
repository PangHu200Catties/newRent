<template>
  <div class="body">
    <el-carousel :interval="4000" type="card" height="300px">
      <el-carousel-item v-for="(item,index) in aa" :key="index">
        <h3 class="medium"><img :src="item.pic" style="width: 590px;height: 300px"/><!--{{item}}--></h3>
        <!--<img :src="pic"/>-->
      </el-carousel-item>
    </el-carousel>
  <div class="showbox">
    <ul class="showboxul">
      <li class="boxli">
        <img src="../assets/icon1.png">
        <p>安全SECURE</p>
      </li>
      <li class="boxli">
        <img src="../assets/icon2.png">
        <p>舒适COMFORT</p>
      </li>
      <li class="boxli">
        <img src="../assets/icon3.png">
        <p>贴心WARM</p>
      </li>
      <li class="boxli">
        <img src="../assets/icon4.png">
        <p>社交SOCIAL</p>
      </li>
    </ul>
  </div>
  <div class="hotrent">
    <div class="hotrenttitle">
      <p>热门租房</p>
      <span>POPULAR APARTMENTS</span>
    </div>
    <ul>
      <li>
        <router-link :to="{name:'show',query:{hid:1}}">
          <img src="../assets/4.jpg" style="width: 380px;height: 248px;border-radius: 5px;">

        <div class="hotmsg">
          <span class="hotname">南窑头</span>
          <span class="hotmoney">
            <font>￥</font>
            <em>2620</em>/月起
          </span>
          <p>
            西安市雁塔区南窑头88排8号
          </p>
        </div> </router-link>
      </li>
      <li>
        <router-link :to="{name:'show',query:{hid:1}}">
          <img src="../assets/5.jpg" style="width: 380px;height: 248px;border-radius: 5px;">

          <div class="hotmsg">
          <span class="hotname">南窑头</span>
          <span class="hotmoney">
            <font>￥</font>
            <em>2620</em>/月起
          </span>
          <p>
            西安市雁塔区南窑头88排8号
          </p>
        </div> </router-link>
      </li>
      <li>
        <router-link :to="{name:'show',query:{hid:1}}">
        <img src="../assets/6.jpg" style="width: 380px;height: 248px;border-radius: 5px;">
        <div class="hotmsg">
          <span class="hotname">南窑头</span>
          <span class="hotmoney">
            <font>￥</font>
            <em>2620</em>/月起
          </span>
          <p>
            西安市雁塔区南窑头88排8号
          </p>
        </div>
        </router-link>
      </li>
    </ul>
  </div>

    <div class="boutique">
      <div class="hotrenttitle">
        <p>精品系列</p>
        <span>BOUTIQUE SERIES</span>
      </div>
      <ul>
        <li>
          <router-link :to="{name:'show',query:{hid:1}}"><img src="../assets/pic2.jpg" style="width: 280px;height: 380px;border-radius: 5px;"></router-link>
        </li>
        <li>
          <router-link :to="{name:'show',query:{hid:1}}"><img src="../assets/1.jpg" style="width: 280px;height: 380px;border-radius: 5px;"></router-link>
        </li>
        <li>
          <router-link :to="{name:'show',query:{hid:1}}"><img src="../assets/6.jpg" style="width: 280px;height: 380px;border-radius: 5px;"></router-link>
        </li>
        <li>
          <router-link :to="{name:'show',query:{hid:1}}"><img src="../assets/7.jpg" style="width: 280px;height: 380px;border-radius: 5px;"></router-link>
        </li>
      </ul>
    </div>
    <div class="rent">
      <div class="hotrenttitle">
        <p>区域找房</p>
      </div>
      <ul v-for="(h,index) in house">
          <li>
            <router-link :to="{name:'show',query:{hid:h.hid}}"><img :src="h.pic1" style="float: left;width: 210px;height: 150px;position: relative;">
            <div class="rent_info">
              <router-link :to="{name:'show',query:{hid:1}}">
                <b class="rent_title">{{h.htitle}}</b>
            </router-link>
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
          </div></router-link>
        </li>
      </ul>
    </div>
    <el-pagination style="margin: 20px 0 50px 500px"
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
    name: 'homepage',
    data () {
      return {
        house:[],
        total: 2,
        params: {
          page: 1,
          size: 10
        },
        aa:[
          {pic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3669777138,1414949354&fm=26&gp=0.jpg'},
          {pic:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3796392365,610477099&fm=26&gp=0.jpg'},
          {pic:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3809186648,151227260&fm=26&gp=0.jpg'},
          {pic:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1926586319,1378943605&fm=26&gp=0.jpg'},
          {pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570891104546&di=bea32e4c80765eb83f65b9cdf2de1bf0&imgtype=0&src=http%3A%2F%2Fimg.paishanglai.net%2Fpublic%2Fpcimgs%2F6611%2F156014894326633.jpg'},
          {pic:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571485654&di=b0fac600dfc6da20501a1c6edb9cce21&imgtype=jpg&er=1&src=http%3A%2F%2Fimg.soufun.com%2Fnews%2F2014_08%2F28%2Fhouse%2F1409223488278_000.jpg'}
        ],
      }
    },

    methods:{
        select:function () {
          var url = "api/hListAll/"+this.params.page+"/"+this.params.size
          axios.get(url).then(res=>{
              this.total=res.data.total
              this.house=res.data.list
          })
        },
        changePage:function (page) {
          this.params.page = page;
          this.select()
        }
    },
    mounted:function () {
      this.select()
    },
  }
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .body{
    margin:0 auto;
    width:1180px;
  }
  .showbox{
    margin:0 auto;
    width:1180px;
    height: 278px;
  }
  .showboxul{
    list-style: none;
    margin:0;padding:0;
  }
  .boxli{
    float: left;
    text-align: center;
    width: 295px;
    height: 156px;
    padding-top: 60px;
  }
  .boxli p{
    font-size: 24px;
    color: #828282;
    margin-top: 40px;
    font-weight: 300;
  }
  .hotrent{
    height: 486px;
  }
  .hotrenttitle p{
    font-size: 40px;
    color: #222222;
    display: inline-block;
    font-weight: normal;
  }
  .hotrenttitle span{
    font-size: 30px;
    color: #dcdcdc;
    display: inline-block;
    margin-left: 50px;
  }
  .hotrent  ul li{
    width: 380px;
    height: 338px;
    float: left;
    margin: 0 4px;
    border:solid 1px #ddd;
  }
  .hotmsg{
    overflow: hidden;
    margin-top: 15px;
    width:380px;
    height:56px;

  }
  .hotname{
    font-size: 22px;
    color: #222222;
    float: left;
    margin-top: 5px;
  }
  .hotmoney{
    font-size: 16px;
    color: #c58d5d;
    display: inline-block;
    float: right;
    margin-top: 2px;
  }
  font{
     font-size:20px;
  }
  em{
    font-size: 30px;
    font-style: normal;
  }
  .hotmsg p{
    font-size: 16px;
    color: #828282;
    display: block;
    width: 100%;
    margin-top:33px;
    white-space: nowrap;

  }
  .boutique{
    height:520px;
  }
  .boutique li{
    float: left;
    margin:0 7px;
  }
  .rent{

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
  element.style {
    margin: 0 0 0 100px;
  }
</style>
