<template>
  <div>
    <!--查询标签-->
    <el-form :inline="true"  class="demo-form-inline">
      <el-button type="primary" id="aa" @click="flush()">刷新<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-form-item>
        <el-input v-model="search" placeholder="按真实姓名查询"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" @click="findBy()">搜索</el-button>
      </el-form-item>
    </el-form>
    <!--用户信息展示-->
    <el-table
      :data="users"
      style="width: 100%">
      <el-table-column
        label="用户编号"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.uid}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="登录名"
        width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.username}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="密码"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.password}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="头像"
        width="200">
        <template slot-scope="scope">
          <span style="margin-left: 10px"><!--{{scope.row.upic}}-->
            <img :src="scope.row.upic" width="50px" height="50px"/>
          </span>
        </template>
      </el-table-column>
      <el-table-column
        label="真实姓名"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.realname}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="手机号"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.tel}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="昵称"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.nickname}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="创建时间"
        width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.ucreamtime}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!--<el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="fun3(scope.row.uid)">修改</el-button>-->
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="fun2(scope.row.uid)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <br/><br/>


    <el-pagination
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="pagesize"
      layout="total, prev, pager, next"
      :total="total">
    </el-pagination>
  </div>
</template>
<script>
  import axios from 'axios'
  export default{
    data(){
      return{
        users:[
        ],
        currentPage:1,
        pagesize:5,
        total:5,
        search:'',
        ustatus:1
      }
    },
    mounted:function () {
      this.findUser()
    },
    methods:{
      handleCurrentChange:function (r) {
        this.currentPage=r;
        this.findUser();
      },
      flush:function () {
        this.findUser();
      },
      findUser:function () {
        var url='api/endfinduser/'+this.ustatus+"/"+this.currentPage+"/"+this.pagesize;
        axios.get(url).then(res=>{
          this.users=res.data.list;
          this.total=res.data.total;

        })
      },
      fun2:function (uid) {
        this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url='api/enddeleteuser/'+uid;
          axios.get(url).then(res=>{
            if (res.data!=null) {
              this.findUser()
            }
          })
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });
      },
      findBy:function () {
        var url='api/endsearchuser/'+this.search+"/"+this.ustatus+"/"+this.currentPage+"/"+this.pagesize;
        axios.get(url).then(res=>{
          this.users=res.data.list;
          this.total=res.data.total;
        })
      }
    },
  }
</script>
<style>
  #aa{
    margin-right:850px;
  }
</style>
