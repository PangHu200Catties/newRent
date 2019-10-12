<template>
  <div>
    <!--用户信息展示-->
    <el-table
      :data="houses"
      style="width: 100%">
      <el-table-column
        label="房屋编号"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.hid}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="房屋资料"
        width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.htitle}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="地址"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.address}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="价格"
        width="100">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{scope.row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="房屋类型"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.type}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="楼层"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.lever}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="面积"
        width="120">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.area}}</span>
        </template>
      </el-table-column>
      <el-table-column
        label="要求"
        width="150">
        <template slot-scope="scope">
          <span style="margin-left: 10px">{{ scope.row.request}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-edit"
            @click="fun3(scope.row.hid)">通过</el-button>
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="fun2(scope.row.hid)">拒绝</el-button>
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
        houses:[],
        currentPage:1,
        pagesize:5,
        total:5,
        search:'',
        status:3
      }
    },
    mounted:function () {
      this.findhouse();
    },
    methods:{
      handleCurrentChange:function (r) {
        this.currentPage=r;
        this.findhouse();
      },
      flush:function () {
        this.findhouse();
      },
      findhouse:function () {
        var url='api/endfindhouse/'+this.status+"/"+this.currentPage+"/"+this.pagesize;
        axios.get(url).then(res=>{
          this.houses=res.data.list;
          this.total=res.data.total;

        })
      },
      fun2:function (hid) {
        this.$confirm('此操作将永久删除该条信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var url='api/enddeletehouse/'+hid;
          axios.get(url).then(res=>{
            if (res.data!=null) {
              this.findhouse()
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
      fun3:function (hid) {
        var url='api/endupdatebyhouse/'+hid;
        axios.get(url).then(res=>{
          this.findhouse();
        })
      }
    }
  }
</script>
