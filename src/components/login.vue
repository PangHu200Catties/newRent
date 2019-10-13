<template>
  <div class="container">
    <el-container>


      <el-main>
        <el-header   >易租网</el-header>
        <div id="login">
          <h1>欢迎登录</h1>
          <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" style="margin: auto;width: 40%" class="demo-ruleForm">
            <el-form-item label="用户名" prop="loginName">
              <el-input type="text" v-model="ruleForm.loginName" autocomplete="off" style="width: 250px"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input type="password" v-model="ruleForm.password" autocomplete="off" style="width: 250px"></el-input>
            </el-form-item>

            <el-form-item>
              <el-select v-model="value" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
              <router-link to="/register"> <el-button  >注册</el-button></router-link>
            </el-form-item>
          </el-form>
        </div>

        <el-footer style="font-size: 15px">关于易租网 |  联系我们 |  用户协议 |  房贷计算器 |  最新问答 |  网站地图 |  最新房源 |  其它城市 |  友情链接 |  放心搜 |  推广服务 |  渠道招商 </el-footer>
      </el-main>

    </el-container>
  </div>

</template>
<style>
  body{
    margin: 0;
    padding: 0;
  }
  .el-header{
    text-align:left;
    width: 100%;
    height: 50px;
    border-bottom:solid 3px;
    color: #39A631;
    font-size: 30px;

    line-height: 2;
    padding: 0 0 0 10px ;

  }
  .el-footer{
    width: 100%;
    height: 50px;

    color: black;
    font-size: 110px;

    text-align: center;
    line-height: 60px;
    margin-top: 163px;
  }
  .el-main {
    background-color: #E9EEF3;
    background-image: url("../assets/bg.jpg");
    color: #333;
    text-align: center;
    line-height: 100px;
    line-width:40px;
  }

  #login{
    background-color: #FFFFFF;
    width: 890px;
    margin: auto;
    height:450px;
  }
</style>
<script>
  import axios from "axios"
  export default{
//    name: 'productdetailspage',
    data() {
      var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('验证码不能为空'));
        }
        setTimeout(() => {
          if (!Number.isInteger(value)) {
            callback(new Error('请输入数字值'));
          } else {
            if (value < 99999||value>1000000) {
              callback(new Error('验证码必须为6位数字'));
            } else {
              callback();
            }
          }
        }, 1000);
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm.loginName !== '') {
            this.$refs.ruleForm.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }  else {
          callback();
        }
      };
      return {
        ruleForm: {
          loginName: '',
          password: '',
          id: '',
        },
//        note: {
//          backgroundImage: "url(" + require("../../assets/save.png") + ")",
//          backgroundRepeat: "no-repeat",
//          backgroundSize: "25px auto",
//          marginTop: "5px",
//        },
        rules: {
          loginName: [
            { validator: validatePass, trigger: 'blur' }
          ],
          password: [
            { validator: validatePass2, trigger: 'blur' }
          ],
          code: [
            { validator: checkAge, trigger: 'blur' }
          ]
        },
        options: [{
          value: '选项1',
          label: '用户'
        }, {
          value: '选项2',
          label: '管理'
        }],
        value: ''
      };
    },
    methods: {
      submitForm() {
        var type = this.value;
//        alert(type);
        if ( type=="选项1") {
          var url = 'api/sysuserLogin';
          axios.post(url, this.ruleForm).then(res => {
            var r = res.data
//            alert(r);
            if (r != '登录失败') {
              //parmas传参，得用name ，用path不行
//              query传参，必须用path
              this.$router.push({path:'/homepage',query:{username:res.data}});
            } else {
              alert("登录失败,请重新输入用户名及密码!")
            }
          })
        }else{
          var url = 'api/sysAdminLogin';
          axios.post(url, this.ruleForm).then(res => {
            var r = res.data
//            alert(r);
            if (r == '登录成功') {
              this.$router.push('/end_index');
            } else {
              alert("登录失败,请重新输入用户名及密码!")
            }
          })
        }
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>
