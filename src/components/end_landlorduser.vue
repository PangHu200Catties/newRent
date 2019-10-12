<template>
  <div>
    <el-form :model="user" ref="user" label-width="100px" class="demo-ruleForm">
      <el-form-item label="头像" prop="upic">
        <img :src="user.upic" id="dd"/>
      </el-form-item>
      <el-form-item label="用户ID" prop="uid">
        <el-input v-model="user.uid" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户账户" prop="username">
        <el-input v-model="user.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="用户密码" prop="password">
        <el-input v-model.number="user.password"></el-input>
      </el-form-item>
      <el-form-item label="真实名字" prop="realname">
        <el-input v-model.number="user.realname"></el-input>
      </el-form-item>
      <el-form-item label="用户电话" prop="tel">
        <el-input v-model.number="user.tel"></el-input>
      </el-form-item>
      <el-form-item label="用户昵称" prop="nickname">
        <el-input v-model.number="user.nickname"></el-input>
      </el-form-item>
      <el-form-item label="创建时间" prop="ucreamtime">
        <el-input v-model.number="user.ucreamtime"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="returnhouse()">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
      data(){
          return {
              user:{
                  uid:'',
                  username:'',
                  password:'',
                  realname:'',
                  tel:'',
                  nickname:'',
                  ucreamtime:''
              }
          }
      },
      mounted:function () {
          var uid=this.$route.params.uid
          var url='api/endfinduserbyid/'+uid
          axios.get(url).then(res=>{
              this.user=res.data;
          })
      },
      methods:{
          returnhouse:function () {
              this.$router.push({name:'end_index'})
          }
      }
  }
</script>
<style>
  #dd{
    float: left;
    width: 100px;
    height: 100px;
  }
</style>
