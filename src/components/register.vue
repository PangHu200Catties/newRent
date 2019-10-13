<template>
  <div>
    <el-container>
      <el-header style="font-size: 30px">易租网</el-header>
      <el-main >
        <div id="register">
          <h1>注册</h1>
          <el-form :model="user" ref="ruleForm" label-width="100px" class="demo-ruleForm" style="margin: auto;width: 90%">
            <el-form-item label="昵称" prop="nickname"
                          :rules="[
      { required: true, message: '请输入昵称', trigger: 'blur' },
       { min: 2, message: '请输入不少于2个字符', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '不允许输入空格等特殊符号' }
    ]" id="nickname">
              <el-input v-model="user.nickname"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="password"
                          :rules="[
      { required: true, message: '请输入密码', trigger: 'blur' },
      { min: 6, message: '请输入不少于6个字符', trigger: 'blur' },
          { pattern: /^[A-Za-z0-9\u4e00-\u9fa5]+$/, message: '不允许输入空格等特殊符号' }
    ]">
              <el-input type="password" v-model="user.password" autocomplete="off" placeholder="6位以上，不允许含空格等特殊字符">
              </el-input>

            </el-form-item>
            <el-form-item label="邮箱" prop="username"
                          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
    ]"
            >
              <el-input type="text" v-model="user.username" autocomplete="off" style="width: 58%" placeholder="xxxx@xx.com格式"></el-input>
              <!--&lt;!&ndash;<el-button  @click="sendemail" style="width: 30%" type="success" >
                <span >获取验证码</span>&ndash;&gt;
              </el-button>-->
              <el-button icon="el-icon-message" @click="sendemail" style="width: 40%" type="success" :disabled="disabled=!show">
                <span v-show="show">获取邮箱验证码</span>
                <span v-show="!show" class="count">{{count}} s</span>
              </el-button>
            </el-form-item>

            <el-form-item label="电话" prop="tel"
                          :rules="[
      { required: true, message: '请输入电话', trigger: 'blur' },
      { min:11, max:11,message: '请输入正确的电话号码', trigger: 'blur' },
          { pattern: /^[0-9]+$/, message: '不允许输入空格等特殊符号' }
    ]">
              <el-input type="text" v-model="user.tel" autocomplete="off" placeholder="请输入11位电话号码"></el-input>
              <!--<el-button icon="el-icon-message" @click="sendtelcode" style="width: 40%" type="success" :disabled="disabled=!show">
                <span v-show="show">获取手机验证码</span>
                <span v-show="!show" class="count">{{count}} s</span>
              </el-button>-->
            </el-form-item>


            <el-form-item label="真实姓名" prop="realname"
                          :rules="[
      { required: true, message: '请输入真实姓名', trigger: 'blur' },
      { pattern: /^[\u4e00-\u9fa5]+$/, message: '请输入纯汉字姓名' }
    ]">
              <el-input type="text" v-model="user.realname" autocomplete="off" placeholder="请输入纯汉字姓名"></el-input>
            </el-form-item>


            <el-form-item label="验证码" prop="ucode"
                          :rules="[
      { required: true, message: '请输入验证码', trigger: 'blur' },
      { min: 6, message: '请输入6个字符', trigger: 'blur' },
          { pattern: /^[0-9\u4e00-\u9fa5]+$/, message: '验证码为纯数字'}
    ]">
              <el-input v-model="user.ucode" placeholder="请输入验证码" ></el-input>
            </el-form-item>


            <el-form-item>
              <el-button type="success" @click="register">提交注册</el-button>
              <el-button type="success" @click="tologin">已有账户，去登陆</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-main>
      <el-footer style="font-size: 15px">关于易租网 |  联系我们 |  用户协议 |  房贷计算器 |  最新问答 |  网站地图 |  最新房源 |  其它城市 |  友情链接 |  放心搜 |  推广服务 |  渠道招商 </el-footer>
    </el-container>
  </div>
</template>

<style>
  .el-header, .el-footer {
    background-color: #FFFFFF;
    color: #22DD22;
    text-align: left;
    text-align: center;
    line-height: 100px;
    padding: 0 0 0 10px ;
  }
  .el-main {
    background-color: #E9EEF3;
    background-image: url("../assets/save.png");
    color: #333;
    text-align: center;
    line-height: 80px;
    line-width:40px;
  }
  #register{
    background-color: #FFFFFF;
    width: 600px;
    margin: auto;
    height:550px;
    opacity: 1;
  }
  #nickname{
    margin-top: 20px;
  }
</style>

<script>
  import axios from 'axios'
  export default {
    data() {

      return {
        user: {
          nickname: '',
          password: '',
          username: '',
          realname: '',
          tel: '',
          ucode: ''
        },

        show: true,  // 初始启用按钮
        count: '',   // 初始化次数
        timer: null,
      };
    },
    methods: {
      //重置方法
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      //点击发送邮件方法
      sendemail: function () {
//          alert((this.user.username).valueOf());
//          if(!this.user.username) {
        const TIME_COUNT = 30;
        if (!this.timer) {
          this.count = TIME_COUNT;
          this.show = false;
          this.timer = setInterval(() => {
            if (this.count > 0 && this.count <= TIME_COUNT) {
              this.count--;
            } else {
              this.show = true;
              clearInterval(this.timer);  // 清除定时器
              this.timer = null;
            }
          }, 1000)
        }

        alert("发送邮件")
        var url = "api/sendemail/" + this.user.username;
        axios.get(url).then(res => {
          if (res.data == "success") {
            alert("发送成功")
          } else {
            alert("发送失败")
          }
        })
        /* }
         alert("邮箱不能为空");*/
      },

      //点击提交注册方法
      register: function () {
        var url = "api/register";
//       alert(url+"----"+this.user.toString())
        axios.post(url, this.user).then(res => {
          console.log(res.data)
          alert(res.data.aa)
          this.$router.push({name:res.data.bb })


        })
      },

      //跳转至登陆页面方法
      tologin: function () {
        this.$router.push({name: "login"})
      },

    }
  }
</script>


