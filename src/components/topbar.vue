<template>
  <div id="top">
    <div class="headerbar">
      <ul class="topbar">
        <li class="first">
          <a href="">首页</a>
        </li>
        <li> <a href="">首页</a></li>
        <li> <a href="">首页</a></li>
        <li> <a href="">首页</a></li>
        <li> <a href="">首页</a></li>

      </ul>
      <div class="userbox">
        <ul>
          <li class="username">
            <router-link to="/login" v-if="this.username=='登录'" >{{this.username}}</router-link>
            <router-link :to="{path:'/userinfo',query:{username:this.username}}" v-if="this.username!='登录'" >{{this.username}}</router-link>
          </li>
          <li>
            <router-link to="/login" v-if="this.username=='登录'">注册</router-link>
            <span v-if="this.username!='登录'" @click="loginout()" style="cursor: pointer">注销</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="header">
      <div class="headertitle">
        <a >易租网 |</a>
        <a>租房</a>
      </div>
      <div class="search-form">
        <input type="text"  v-model="search_cont" name="searchbar" class="searchbar-rent" id="search-rent" placeholder="请输入小区名称、地址…" autocomplete="off" maxlength="100"  style="color: rgb(153, 153, 153);">
        <router-link :to="{name:'search',query:{cc:this.search_cont}}"><button  class="search-button"   >搜索</button></router-link>

      </div>
    </div>



    <router-view/>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'top',
    data(){
      return{
        circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        squareUrl: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
        sizeList: ["large", "medium", "small"],
        search_cont:"",
        username:""
      }
    },
    methods:{
      loginout:function () {
        var url = "api/loginout"
        axios.get(url).then(res=>{
          this.$router.push({path:"/login"})
        })

      }
    },
    mounted:function () {
          var url="api/findusername"
          axios.get(url).then(res=>{

            this.username = res.data
          })
    }

  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    /*text-align: center;*/
    color: #2c3e50;
    margin-top: 0px;
  }
  .header{

    margin:0 auto;
    width:1180px;
    height: 68px;
  }
  .headerbar{

    margin:0 auto;
    width:1180px;
    height: 40px;
    border-bottom: solid 1px #ddd;
  }
  .topbar{

  }
  ul{
    line-height: 20px;
    list-style: none;
    margin:0;padding:0;
  }
  .topbar li{
    height:24px;
    float: left;
    padding: 10px 10px 0  10px;

  }
  .topbar .first{
    float: left;
    padding: 10px 10px 0  10px;
    border-left: none;
  }
  a{
    text-decoration: none;
    outline: none;
  }
  .userbox{
    float: right;
    text-align: center;
  } .username{
      width: 70px;
    }
  .userbox ul li{
    width: 40px;
    height: 20px;
    display: inline;
    float: left;
    margin-top: 7px;
    overflow: hidden;
  }

  .headertitle{
    float: left;
    margin-top: 18px;

    padding: 0 10px 0 15px;
    color: #62ab00;
    font-size: 24px;
    height: 25px;
    line-height: 25px;
  }
  .search-form{
    float: right;
    margin-top: 15px;
    _margin-top: -32px;
    position: relative;
    z-index: 899;
  }
  .searchbar-rent{
    font-size: 13px;
    height: 17px;
    line-height: 18px;
    width: 467px;
    padding: 7px 0 7px 13px;
    border: 1px solid #ccc;
    color: #999;
    border-radius: 3px 0 0 3px;
    vertical-align: top;
  }
  .search-button{

    width: 120px;
    background: #f60;
    color: #fff;
    font-size: 18px;
    border-radius: 0 3px 3px 0;
    letter-spacing: 4px;
    border: 0;
    height: 33px;
    cursor: pointer;
    vertical-align: top;
  }







</style>
