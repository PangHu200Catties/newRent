<template>
  <div class="body">
      <div >
      <el-header class="body"><h1><span>{{house.htitle}}</span></h1></el-header>
     <el-container  class="body">
      <el-aside width="40%" class="el-aside">

            <!--<div class="div1">
              <el-image class=bigimg  :src="house.pic1" :preview-src-list="srcList"></el-image><br/>&ndash;&gt;-->
              <div >
                <el-image v-if="active === 1|active === 0" class="bigimg"
                  :src="house.pic1"
                  :preview-src-list="srcList">
                  <br>
                </el-image>
                <el-image v-if="active === 2" class="bigimg"
                          :src="house.pic2"
                          :preview-src-list="srcList">
                  <br>
                </el-image>
                <el-image v-if="active === 3" class="bigimg"
                          :src="house.pic3"
                          :preview-src-list="srcList">
                  <br>
                </el-image>
                <el-image v-if="active === 4" class="bigimg"
                          :src="house.pic4"
                          :preview-src-list="srcList">
                  <br>
                </el-image>


             <div class="div2">
                <div class="imgxx" @mouseover="jin1(1)" >
                  <el-image class="imgww" :src="house.pic1"></el-image>
                </div>
                <div class="imgxx" @mouseover="jin1(2)">
                  <el-image class="imgww" :src="house.pic2"></el-image>
                </div>
                <div class="imgxx" @mouseover="jin1(3)" >
                  <el-image class="imgww" :src="house.pic3"></el-image>
                </div>
                <div class="imgxx" @mouseover="jin1(4)">
                  <el-image class="imgww" :src="house.pic4"></el-image>
                </div>
              </div>

              </div>
      </el-aside>

    <el-main >
          <div class="el-main">
            <el-form  align="left" ref="form"  label-width="80px">
              <el-form-item label="地址:">
                <span>{{house.address}}</span>
                <a href="">房价走势</a>
              </el-form-item>
              <el-form-item label="房租:">
                <span>{{house.price}}元/月</span>
              </el-form-item>
              <el-form-item label="户型:">
                <span>{{house.type}}</span>
              </el-form-item>
              <el-form-item label="楼层:">
                <span>{{house.lever}}层</span>
              </el-form-item>
              <el-form-item label="面积:">
                <span>{{house.area}}平方米</span>
              </el-form-item>
              <el-form-item label="要求:">
                <span>{{house.request}}</span>
              </el-form-item>
            </el-form>
            <div class="tel">
              <span>{{user.tel}}</span>
            </div>
            <div class="tel">
              <el-button type="text" @click="pay(house.htitle,house.price)" size="big">线上租房</el-button>
            </div>
          </div>
        </el-main>
        <el-aside width="25%px">
          <div class="el-aside" >
            <el-image :src="user.upic"></el-image><br>
            <!--<el-form  ref="form" :model="form" label-width="80px">
            <el-form-item  label="" align="left">
              <span>{{user.realname}}</span>
            </el-form-item>
            </el-form>-->
            <span>{{user.realname}}</span><br>
            <br>
            <br>
            <el-image :src="src"></el-image>
            <div>
              <h4><span>扫码微信联系他</span></h4>
            </div>
          </div>
          </el-aside>
      </el-container>
      </div>
    <div >
      <div class="jiaju">
        <h3 class="title">房屋配套</h3>
        <i class="el-icon-monitor" style=" width: 50px;height: 50px;">电视</i>
        <i class="el-icon-toilet-paper" style=" width: 64px;height: 50px;">卫生间</i>
        <i class="el-icon-sunny" style=" width: 50px;height: 50px;">暖气</i>
        <i class="el-icon-tableware" style=" width: 50px;height: 50px;">厨房</i>
        <i class="el-icon-refrigerator" style=" width: 50px;height: 50px;">冰箱</i>
        <i class="el-icon-link" style=" width: 50px;height: 50px;">宽带</i>
      </div>
      <div class="tuijian">
          <ul class="agent-otherhouse-list">
            <li>
              <a href="https://xa.58.com/hezu/39746528807963x.shtml" target="_blank" onclick="clickLog('from=fcpc_detail_xa_jingjiren_tuijianfy_no1')">
                <div class="pic fl">
                  <img lazy_src="https://pic6.58cdn.com.cn/anjuke_58/d72303a8f693caa67856a9e48859b843?w=336&amp;h=240&amp;crop=1" src="https://pic6.58cdn.com.cn/anjuke_58/d72303a8f693caa67856a9e48859b843?w=336&amp;h=240&amp;crop=1" data-loaded="true">
                </div>
                <div class="side-right fl">
                  <p class="info-title c_555 f18">石家街地铁口 含元路 华清路立交 紫薇东进 东御兰汀 无中介</p>
                  <p class="info-area-toward c_888 f12">3室2厅2卫&nbsp;/&nbsp;22平<br>合租&nbsp;/&nbsp;精装修</p>
                  <p class="info-price c_ff552e f12"><b class="f18">650</b>&nbsp;元/月</p>
                </div>
              </a>
            </li><li>
            <a href="https://xa.58.com/hezu/39746263786020x.shtml" target="_blank" onclick="clickLog('from=fcpc_detail_xa_jingjiren_tuijianfy_no2')">
              <div class="pic fl">
                <img lazy_src="https://pic2.58cdn.com.cn/anjuke_58/3a2a5528ff39415213f566d3a07985b0?w=336&amp;h=240&amp;crop=1" src="https://pic2.58cdn.com.cn/anjuke_58/3a2a5528ff39415213f566d3a07985b0?w=336&amp;h=240&amp;crop=1" data-loaded="true">
              </div>
              <div class="side-right fl">
                <p class="info-title c_555 f18">汉城路 枣园 雅卓花园 万国远鉴名筑 远东二中 丰盛园无中介</p>
                <p class="info-area-toward c_888 f12">3室2厅2卫&nbsp;/&nbsp;21平<br>合租&nbsp;/&nbsp;精装修</p>
                <p class="info-price c_ff552e f12"><b class="f18">660</b>&nbsp;元/月</p>
              </div>
            </a>
          </li><li>
            <a href="https://xa.58.com/hezu/39746182119196x.shtml" target="_blank" onclick="clickLog('from=fcpc_detail_xa_jingjiren_tuijianfy_no3')">
              <div class="pic fl">
                <img lazy_src="https://pic8.58cdn.com.cn/anjuke_58/9627931fff7ef95e335dd57541d7c86b?w=336&amp;h=240&amp;crop=1" src="https://pic8.58cdn.com.cn/anjuke_58/9627931fff7ef95e335dd57541d7c86b?w=336&amp;h=240&amp;crop=1" data-loaded="true">
              </div>
              <div class="side-right fl">
                <p class="info-title c_555 f18">延兴门地铁口 建工路 鑫龙天然居 凯森富景雅苑 学府首座</p>
                <p class="info-area-toward c_888 f12">3室2厅2卫&nbsp;/&nbsp;22平<br>合租&nbsp;/&nbsp;精装修</p>
                <p class="info-price c_ff552e f12"><b class="f18">660</b>&nbsp;元/月</p>
              </div>
            </a>
          </li><li>
            <a href="https://xa.58.com/hezu/39746122840478x.shtml" target="_blank" onclick="clickLog('from=fcpc_detail_xa_jingjiren_tuijianfy_no4')">
              <div class="pic fl">
                <img lazy_src="https://pic5.58cdn.com.cn/anjuke_58/dffd93290e0c34173bc815f08d64b6cf?w=336&amp;h=240&amp;crop=1" src="https://pic5.58cdn.com.cn/anjuke_58/dffd93290e0c34173bc815f08d64b6cf?w=336&amp;h=240&amp;crop=1" data-loaded="true">
              </div>
              <div class="side-right fl">
                <p class="info-title c_555 f18">辛家庙地铁口 天香心苑 海璟印象城 北辰路 矿山路 汇林华城</p>
                <p class="info-area-toward c_888 f12">3室2厅2卫&nbsp;/&nbsp;22平<br>合租&nbsp;/&nbsp;精装修</p>
                <p class="info-price c_ff552e f12"><b class="f18">680</b>&nbsp;元/月</p>
              </div>
            </a>
          </li><li>
            <a href="https://xa.58.com/hezu/39710477042189x.shtml" target="_blank" onclick="clickLog('from=fcpc_detail_xa_jingjiren_tuijianfy_no5')">
              <div class="pic fl">
                <img lazy_src="https://pic1.58cdn.com.cn/anjuke_58/b33b53603f52d8660d21f0d051e14925?w=336&amp;h=240&amp;crop=1" src="https://pic1.58cdn.com.cn/anjuke_58/b33b53603f52d8660d21f0d051e14925?w=336&amp;h=240&amp;crop=1" data-loaded="true">
              </div>
              <div class="side-right fl">
                <p class="info-title c_555 f18">青龙寺 哈弗公馆 翠微苑 数码家园 理工大学隔壁 领包入住</p>
                <p class="info-area-toward c_888 f12">3室2厅2卫&nbsp;/&nbsp;25平<br>合租&nbsp;/&nbsp;精装修</p>
                <p class="info-price c_ff552e f12"><b class="f18">680</b>&nbsp;元/月</p>
              </div>
            </a>
          </li><li>
            <a href="https://xa.58.com/hezu/39700117340049x.shtml" target="_blank" onclick="clickLog('from=fcpc_detail_xa_jingjiren_tuijianfy_no6')">
              <div class="pic fl">
                <img lazy_src="https://pic6.58cdn.com.cn/anjuke_58/9b93d58c4e71250fd3c9805b653fb978?w=336&amp;h=240&amp;crop=1" src="https://pic6.58cdn.com.cn/anjuke_58/9b93d58c4e71250fd3c9805b653fb978?w=336&amp;h=240&amp;crop=1" data-loaded="true">
              </div>
              <div class="side-right fl">
                <p class="info-title c_555 f18">太白南路地铁口 沙井村高层 太白花园 甘家寨小区 拎包入住</p>
                <p class="info-area-toward c_888 f12">3室2厅2卫&nbsp;/&nbsp;25平<br>合租&nbsp;/&nbsp;精装修</p>
                <p class="info-price c_ff552e f12"><b class="f18">630</b>&nbsp;元/月</p>
              </div>
            </a>
          </li><li>
            <a href="https://xa.58.com/hezu/39700095634726x.shtml" target="_blank" onclick="clickLog('from=fcpc_detail_xa_jingjiren_tuijianfy_no7')">
              <div class="pic fl">
                <img lazy_src="https://pic4.58cdn.com.cn/anjuke_58/d6609a930c3afa6baf9c4e3742300b39?w=336&amp;h=240&amp;crop=1" src="https://pic4.58cdn.com.cn/anjuke_58/d6609a930c3afa6baf9c4e3742300b39?w=336&amp;h=240&amp;crop=1" data-loaded="true">
              </div>
              <div class="side-right fl">
                <p class="info-title c_555 f18">胡家庙 华清东路 中铁二十局 清华苑 景怡馨苑精装 拎包入住</p>
                <p class="info-area-toward c_888 f12">3室2厅2卫&nbsp;/&nbsp;25平<br>合租&nbsp;/&nbsp;精装修</p>
                <p class="info-price c_ff552e f12"><b class="f18">630</b>&nbsp;元/月</p>
              </div>
            </a>
          </li>
          </ul>
      </div>
      <div class="jiaju">

        <h3 class="title">房源描述</h3>
                <span >房间装修精美，布局合理，温馨舒适有热水可洗澡。<br>南北通透，室内采光极好，让您一进门就感到温馨舒适。<br>公用的设施有洗衣机，厨房，卫生间等等，室内干净，设施齐全，放心入住<br>小区治安良好，干净安全，让您住的安心，放心<br>周边交通便捷，地铁公交路线贯穿东西南北，给您的出行带来极大的方便<br>人员要求：男女不限,要求无不良嗜好,有正式工作,作息规律，<br>社会闲杂人士恕不接待,有很差卫生惯恕不接待,不懂得公共场合秩序,素质差的概不接待!<br>为保障合租安全，每个房间都是一房一锁，专人专管，都有专属的管理人员并提供公司的投诉客服。<br>欢迎电话咨询！！</span>

            <!--<span class="a1">房源描述</span>
            <span class="a2"><span>房间装修精美，布局合理，温馨舒适有热水可洗澡。<br>南北通透，室内采光极好，让您一进门就感到温馨舒适。<br>公用的设施有洗衣机，厨房，卫生间等等，室内干净，设施齐全，放心入住<br>小区治安良好，干净安全，让您住的安心，放心<br>周边交通便捷，地铁公交路线贯穿东西南北，给您的出行带来极大的方便<br>人员要求：男女不限,要求无不良嗜好,有正式工作,作息规律，<br>社会闲杂人士恕不接待,有很差卫生惯恕不接待,不懂得公共场合秩序,素质差的概不接待!<br>为保障合租安全，每个房间都是一房一锁，专人专管，都有专属的管理人员并提供公司的投诉客服。<br>欢迎电话咨询！！</span></span>
          -->
      </div>
      <div class="jiaju">
        <ul>
          <li><el-image  class="bigimg1"
                          :src="house.pic1"
                          :preview-src-list="srcList">
            <br>
          </el-image></li>
          <li><el-image  class="bigimg1"
                         :src="house.pic2"
                         :preview-src-list="srcList">
            <br>
          </el-image></li>
          <li><el-image  class="bigimg1"
                         :src="house.pic3"
                         :preview-src-list="srcList">
            <br>
          </el-image></li>
          <li><el-image  class="bigimg1"
                         :src="house.pic4"
                         :preview-src-list="srcList">
            <br>
          </el-image></li>
        </ul>
      </div>

    </div>
  </div>


</template>

<script>
  import axios from 'axios'
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  export default{
    components: {ElForm},


    data(){
      return {
        active:0,
        src: 'https://pic1.58cdn.com.cn/nowater/58zfjx/qrcode/house/201909/n_v261eaf46b1b4841d6a1a5fde172cb9918.jpg?w=240',
        user: {
          uid: '',
          username: '',
          upic: '',
          realname: '',
          tel: '',
          nickname: '',
        },
        house: {
          hid: '',
          uid: '',
          htitle: '',
          address: '',
          pic1: '',
          pic2: '',
          pic3: '',
          pic4: '',
          price: '',
          type: '',
          lever: '',
          area: '',
          request: '',

        },
        srcList: [],
        sizeList: ["large"]
      }

    },
    methods:{
      jin1:function(index) {
        this.active = index;
      },
      pay:function (htitle,price) {
        this.$router.push(
        {path:'/ShoppingCart',query:{name:htitle,price:price}})
      }
    },



    mounted(){
      var hid = this.$route.query.hid
      var url = "api/findByHid"
      axios.post(url, {hid: hid}).then(res => {
        if (res.data != null) {
          this.house = res.data

          this.srcList.push(this.house.pic1);
          this.srcList.push(this.house.pic2);
          this.srcList.push(this.house.pic3);
          this.srcList.push(this.house.pic4);




          var uid = this.house.uid
          var url = "api/findByUid"
          axios.post(url, {uid: uid}).then(res => {
            if (res.data != null) {
              this.user = res.data
            }
          })
        }

      })
    },


}
</script>
<style>

  .el-header, .el-footer {
    background-color: #ffffff;
    color: #333;
    text-align: left;
    line-height: 60px;
  }

  .el-aside {
    height: 100%;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 100% ;
    border: 1px;
    border-radius: 1px;

  }
  .body{
    margin:0 auto;
    width:1180px;
  }
  .el-main {
    height: 100%;
    background-color: #ffffff;
    color: #333;
    text-align: center;
    line-height: 100%;

  }

  body > .el-container {
    margin-bottom: 40px;
  }
  .div1{
   width:80%;
   height:100%;

 }
.div2{
   width:100%;
   height:100%;
 }
 .bigimg{
   width: 460px;
   height:400px;
   float:left;
 }
  .bigimg1{
    width: 400px;
    height:400px;
    float:left;
  }
 .imgxx{
   width:111px;
   height:111px;
   float:left;
   border:2px solid white;
 }
 .imgww{
   width:109px;
   height: 109px;
   float:left;
 }
 .body{
    margin-left: 5%;
    width:90%;
 }
  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
  .tel{
    height: 40px;
    background-color: orangered;
    border-radius: 4px;
    border:2px solid white;
    line-height:40px;
    width:45%;
    float:left;
  }
  .jiaju{
    margin-left: 5%;
    width:65%;
    float:left;
  }
  .tuijian{
    width:25%;
    margin-right: 5%;
    float:right;
    border: 40px;
  }

</style>


