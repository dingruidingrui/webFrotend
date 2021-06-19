<template>
  <div class="login">
    <el-form class="panel" :model="ruleForm" status-icon :rules="rules"  ref="ruleForm">
      <h3 class="login_title">登录</h3>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="Username" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="Password" show-password clearable></el-input>
      </el-form-item>
      <div>
        <a>点击注册</a>
        <a>忘记密码</a>
      </div>
      <el-button  @click="submitForm('ruleForm')">登录</el-button>
    </el-form>


  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('用户名不能为空'));
      }
      setTimeout(() => {
        if (value.length < 6 || value.length > 12) {
          callback(new Error('账号长度要在6~12位之间'));
        } else {
          callback();
        }
      }, 1000);
    };

    var checkPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('密码不能为空'));
      }
      setTimeout(() => {
        if (value.length < 6 || value.length > 12) {
          callback(new Error('密码长度要在6~12位之间'));
        } else {
          callback();
        }
      }, 1000);
    };
    return {
      ruleForm:{
        username:'',
        password:'',
      },
      rules:{
        username:[
          { validator: checkUsername, trigger: 'blur' },
        ],
        password:[
          { validator: checkPass, trigger: 'blur' },
        ],
      },
    };
  },

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('submit!');
            this.$router.push('/back')
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
    }
}
</script>

<style scoped>
.login{
  background-image:url('../../assets/登录背景/起床.jpg');
  /*让背景图片自适应窗口*/
  width: 100%;
  height: 100%;
  position: fixed;

  background-repeat:no-repeat;
  background-size:cover;
  -webkit-background-size:cover;
  -o-background-size:cover;
  background-position:center 0;

  margin: 0;
  padding: 0;
  min-width: 1000px;

  /*让面板水平垂直居中显示*/
  display:flex;

  /*filter: blur(5px);*/
  z-index: 1;
}

.panel{
  margin: auto;

}

.login_title {
  margin: 0px auto;
  text-align: center;
  color: #fff;
}
.el-form-item{
  padding: 0;
  margin: 0;
}

.el-input{
margin: 10px;
  width: 250px;
  opacity: 0.4;
}

div a{
  color: white;
  margin: 55px;
}

.el-button{
  opacity: 0.8;
  color: #00FF7F;
  width: 250px;
}

</style>
