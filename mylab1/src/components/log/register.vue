<template>
  <div class="register">
    <el-form class="panel" :model="ruleForm" status-icon :rules="rules"  ref="ruleForm">
      <h3 class="register_title">注册</h3>
      <el-form-item prop="username">
        <el-input v-model="ruleForm.username" placeholder="Username" clearable></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input v-model="ruleForm.password" placeholder="Password" show-password clearable></el-input>
      </el-form-item>
      <el-form-item prop="secPassword">
        <el-input v-model="ruleForm.secPassword" placeholder="Confirm Password" show-password clearable></el-input>
      </el-form-item>
      <el-form-item prop="email">
        <el-input v-model="ruleForm.email" placeholder="Email" show-password clearable></el-input>
      </el-form-item>
      <div>
        <a>我已阅读协议</a>
        <a>已有账号登录</a>
      </div>
      <el-button @click="submitForm('ruleForm')">注册</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "register",
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

    var reCheckPass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.ruleForm.secPassword) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };


    return {
      ruleForm:{
        username:'',
        password:'',
        secPassword:'',
        email:'',
      },
      rules:{
        username:[
          { validator: checkUsername, trigger: 'blur' },
        ],
        password:[
          { validator: checkPass, trigger: 'blur' },
        ],
        secPassword:[
          { validator: reCheckPass, trigger: 'blur' },
        ],
        email:[
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] },
        ],
      },
    };
  },

  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
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
.register{
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
  width: 30%;
  min-width: 440px;
}

.register_title {
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
  margin: 25px;
}

.el-button{
  opacity: 0.8;
  color: #00FF7F;
  width: 250px;
}
</style>
