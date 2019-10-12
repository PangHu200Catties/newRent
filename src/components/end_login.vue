<template>
  <div id="hello">
    <img src="../assets/2.jpg" height="200px" width="200px"/>
    <h1><font color="red">{{ msg }}</font></h1>
    <el-form :inline="true" :model="admin" class="demo-form-inline">
      <el-form-item label="账号:">
        <el-input v-model="admin.ausername" placeholder="账号"></el-input>
      </el-form-item><br/>
      <el-form-item label="密码:">
        <el-input v-model="admin.apassword" placeholder="密码"></el-input>
      </el-form-item><br/>
      <el-form-item>
        <el-button type="info" @click="fun1()">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HelloWorld',
    data () {
      return {
        msg: "Welcome to Your Nine's House",
        admin:{
          ausername:'',
          apassword:''
        }
      }
    },
    methods:{
      fun2:function () {
        this.$router.push({name:'resgiter'})
      },
      fun1:function () {
        var url="api/endlogin"
        axios.post(url,this.admin).then(res=>{
            alert(res.data.alertto)
           /* this.$router.push({name:res.data.topage,query:{aa:this.admin.ausername}})*/
          this.$router.push({name:res.data.topage})
        })
      }
    }
  }
</script>


