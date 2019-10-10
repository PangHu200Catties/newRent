<template>
  <div >
      <div >
      <el-header class="body"><h1><span>{{house.htitle}}</span></h1></el-header>
     <el-container  class="body">
      <el-aside width="40%" class="el-aside">

            <!--<div class="div1">
              <el-image class=bigimg  :src="house.pic1" :preview-src-list="srcList"></el-image><br/>&ndash;&gt;-->
              <div >
                <el-image class="bigimg"
                  :src="house.pic1"
                  :preview-src-list="srcList">
                  <br>
                </el-image>

             <!-- <div class="div2">-->
                <div class="imgxx" >
                  <el-image class="imgww" :src="house.pic1"></el-image>
                </div>
                <div class="imgxx" >
                  <el-image class="imgww" :src="house.pic2"></el-image>
                </div>
                <div class="imgxx" >
                  <el-image class="imgww" :src="house.pic3"></el-image>
                </div>
                <div class="imgxx" >
                  <el-image class="imgww" :src="house.pic4"></el-image>
                </div>
              <!--</div>-->

              </div>
      </el-aside>

    <el-main >
          <div class="el-main">
            <el-form  align="left" ref="form" :model="form" label-width="80px">
              <el-form-item label="地址:">
                <span>{{house.address}}</span>
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
              <span>联系电话:{{user.tel}}</span>
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
  </div>
</template>
<script>
  import axios from 'axios'
  import ElForm from "../../node_modules/element-ui/packages/form/src/form";
  export default{
    components: {ElForm},
    data: () => ({
      show: true
    }),
    data(){
      return {
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
        circleUrl: [],
        sizeList: ["large"]
      }

    },

    mounted(){
      var hid = this.$route.params.hid
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
              this.circleUrl.push(this.user.upic)
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
 .imgxx{
   width:100px;
   height:100px;
   float:left;
   border:2px solid black;
 }
 .imgww{
   width:96px;
   height: 95px;
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
    height: 80px;
    background-color: chartreuse;
    border-radius: 4px;
    border: 2px;
    line-height: 80px;
  }

</style>


