<template>
  <div id="App">
    <el-container>
      <el-header class="el-header" style="" height="70px"><font size="4px" color="#5f9ea0" id="cc">{{header}}{{this.ausername}}</font>
        <el-dropdown  class="bb"  >
          <router-link :to="{name:'homepage',query:{username:this.ausername}}" style="color: white;text-decoration:none;">返回首页</router-link>
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
                  <span slot="title"><font size="4px">成为房东</font></span>
                </el-menu-item>
                <el-menu-item index="2" @click="landlord()">
                  <i class="el-icon-document"></i>
                  <span slot="title"><font size="4px">房屋详情</font></span>
                </el-menu-item>
                <!--<el-menu-item index="3" @click="landlord()">-->
                  <!--<i class="el-icon-document"></i>-->
                  <!--<span slot="title"><font size="4px">房屋修改</font></span>-->
                <!--</el-menu-item>-->
                <!--<el-submenu index="3">-->
                  <!--<template slot="title" >-->
                    <!--<i class="el-icon-location"></i>-->
                    <!--<span><font size="4px">房屋管理</font></span>-->
                  <!--</template>-->
                  <!--<el-menu-item index="3-1" @click="tonohouse()"><font size="4px">成为房东</font></el-menu-item>-->
                  <!--<el-menu-item index="3-2" @click="todohouse()"><font size="4px">房屋详情</font></el-menu-item>-->
                  <!--<el-menu-item index="3-3" @click="toaudit()"><font size="4px">房屋审核</font></el-menu-item>-->
                <!--</el-submenu>-->
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
        header:'欢迎：',
        ausername:''
      }
    },
    mounted:function () {

      this.ausername = this.$route.query.username
    },
    methods: {

      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      tousers:function () {
        this.$router.push({name:'houseinf',query:{username:this.ausername}})
      },
      landlord:function () {
        this.$router.push({name:'houseList',query:{username:this.ausername}})
      },
      tonohouse:function () {

      },
      todohouse:function () {
      },
      toaudit:function () {
        this.$router.push({name:'end_checkhouse',query:{username:this.ausername}})
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
    color: white;
  }
  #cc{
    float:left;
  }
</style>
