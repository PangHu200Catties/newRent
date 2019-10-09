<template>




    <el-container>

      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">消息</span>
          </el-menu-item>
          <el-menu-item index="2" >
            <i class="el-icon-document"></i>
            <span slot="title">房源管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title">问答</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <span slot="title">个人信息</span>
          </el-menu-item>
        </el-menu>

      </el-aside>
      <el-container>
        <el-header>系统消息</el-header>
        <el-main>Main</el-main>
      </el-container>
    </el-container>

</template>
<style>
  .el-header {
    background-color: #545c64;
    color: #fff;
    text-align: left;
    line-height: 60px;
  }

  .el-aside {
    background-color: #545c64;
    color: #333;
    text-align: center;
    line-height: 700px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 640px;
  }



</style>
<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
