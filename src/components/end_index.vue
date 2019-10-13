<template>
  <div id="App">
    <el-container>
      <el-header class="el-header" height="70px"><font size="6px" color="#5f9ea0" id="cc">{{header}}</font>
        <el-dropdown v-if="this.ausername=='登录'" class="bb">
          <router-link to="end_login"><span class="el-dropdown-link"><&#8194{{ausername}}&#8194></span></router-link>
          <el-dropdown-menu></el-dropdown-menu>
        </el-dropdown>
        <el-dropdown v-if="this.ausername!='登录'" class="bb">
          <span class="el-dropdown-link">{{ausername}}</span>&#8195
          <span class="el-dropdown-link" @click="logout()">注销</span>
          <el-dropdown-menu></el-dropdown-menu>

        </el-dropdown>
      </el-header>
      <el-container>
        <el-aside width="180px">
          <el-row class="tac">
            <el-col :span="12"  style="width: 100%"   >
              <el-menu
                default-active="1"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="rgb(72,85,102)"
                text-color="white"
                active-text-color="#ffd04b">

                <el-menu-item index="1" @click="tousers()">
                  <i class="el-icon-menu"></i>
                  <span slot="title"><font size="4px"> 用户管理</font></span>
                </el-menu-item>
                <el-menu-item index="2" @click="landlord()">
                  <i class="el-icon-document"></i>
                  <span slot="title"><font size="4px">房东信息</font></span>
                </el-menu-item>
                <el-submenu index="3">
                  <template slot="title" >
                    <i class="el-icon-location"></i>
                    <span><font size="4px">房屋管理</font></span>
                  </template>
                  <el-menu-item index="3-1" @click="tonohouse()"><font size="4px">未租房屋</font></el-menu-item>
                  <el-menu-item index="3-2" @click="todohouse()"><font size="4px">已租房屋</font></el-menu-item>
                  <el-menu-item index="3-3" @click="toaudit()"><font size="4px">房屋审核</font></el-menu-item>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'App',
    data(){
      return {
        header:'第九组管理平台',
        ausername:''
      }
    },
    mounted:function () {
      /* if(this.$route.query.aa!=''||this.$route.query.aa!=null){
       this.ausername=this.$route.query.aa;
       }*/
      this.findusername();

    },
    methods: {
      findusername:function () {
        var url='api/endfindusername'
        axios.get(url).then(res=>{
          this.ausername=res.data;
          if(res.data=="登录"){
            alert("请先登录")
          }
        })
      },
      logout:function () {
        var url='api/endlogout'
        axios.get(url).then(res=>{
          this.$router.push({name:'end_login'})
        })
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      tousers:function () {
        this.$router.push({name:'end_users'})
      },
      landlord:function () {
        this.$router.push({name:'end_landlord'})
      },
      tonohouse:function () {
        this.$router.push({name:'end_nohouse'})
      },
      todohouse:function () {
        this.$router.push({name:'end_dohouse'})
      },
      toaudit:function () {
        this.$router.push({name:'end_checkhouse'})
      },
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }
  .el-header, .el-footer {
    background-color: rgb(72,85,102);
    color: #333;
    line-height: 70px;
  }

  .el-aside {
    background-color:rgb(72,85,102);
    color: #333;
    /*text-align: center;*/
    line-height: 600px;
  }

  .el-main {
    background-color: #E9EEF3;

    color: #333;
    text-align: center;
    height: 600px;
  }
  .el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .bb{
    float: right;
  }
  /*#cc{
    float:left;
  }*/
</style>
