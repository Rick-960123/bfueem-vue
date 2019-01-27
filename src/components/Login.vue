<template>
  <div class="bg">
    <div class="wrapper">
      <h1 style="color: white ">西北干旱荒漠区煤炭基地生态安全监测平台</h1>
      <div class="login" v-show="showLogin">
        <Form ref="formInline" label-position="left" :model="formInline" :label-width="100":rules="ruleInline">
          <Form-item prop="user" label="用户名：">
            <Input v-model="formInline.user"></Input>
          </Form-item>
          <Form-item prop="password"  label="密  码：">

            <Input v-model="formInline.password" type="password"></Input>
          </Form-item>
          <Form-item>

            <i-button  size="large"type="primary" @click.native="handleSubmit()" long>登录</i-button>
            <span style="color: white" v-on:click="ToRegister">没有账号？马上注册</span>
            &nbsp  &nbsp &nbsp  &nbsp &nbsp  &nbsp <span style="color: white" v-on:click="ToReset">修改密码</span>
          </Form-item>

        </Form>
      </div>

      <div class="Register" v-show="showRegister">
        <Form ref="formInline" label-position="left" :model="formInline" :label-width="100":rules="ruleInline">
          <Form-item prop="user" label="用户名：">
            <Input v-model="formInline.user"></Input>
          </Form-item>
          <Form-item prop="password"  label="密  码：" class="f1">

            <Input v-model="formInline.password"></Input>
          </Form-item>
          <Form-item prop="password"  label="管理员密码：">

            <Input v-model="formInline.repassword" type="password"></Input>
          </Form-item>

          <Form-item>
            <i-button size="large" type="primary"  @click.native="handleRegister()" long>注册</i-button>
          &nbsp  &nbsp <span style="color: white" v-on:click="ToLogin">已有账号？马上登录</span>
          </Form-item>
        </Form>
      </div>
       <div class="Register" v-show="showReset">
              <Form ref="formInline" label-position="left" :model="formInline" :label-width="100":rules="ruleInline">
                <Form-item prop="user" label="用户名：">
                  <Input v-model="formInline.user"></Input>
                </Form-item>
                <Form-item prop="password"  label="原密码：" class="f1">

                  <Input v-model="formInline.password" type="password"></Input>
                </Form-item>
                <Form-item  prop="password" label="新密码：">

                  <Input v-model="formInline.repassword"></Input>
                </Form-item>

                <Form-item>
                  <i-button size="large" type="primary"  @click.native="handleReset()" long>提交</i-button>
                  <span style="color: white" v-on:click="ToLogin">修改成功？马上登录</span>
                </Form-item>
              </Form>
            </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: "login",
    data() {
      return {
        user:[{
        name:'admin',
        password:'123456'
        } ],
        formInline: {
          user: '',
          password: '',
          repassword: ''
        },
        showLogin: true,
        showReset:false,
        showRegister: false,
        isLogin:false,
        ruleInline: {
          user: [{
            required: true,
            message: '请填写用户名',
            trigger: 'blur'
          }],
          password: [{
            required: true,
            message: '请填写密码',
            trigger: 'blur'
          }],
          repassword: [{
            required: true,
            message: '请重复密码',
            trigger: 'blur'
          },
            {
              type: 'string',
              min: 6,
              message: '密码长度不能小于6位',
              trigger: 'blur'
            }]
        }
      }

    },

    methods:  {

      handleSubmit() {
          if (this.formInline.user ==this.user[0].name && this.formInline.password == this.user[0].password) {
          this.$Message.success('提交成功!');
          Bus.$emit('showNavigation', false);
          this.$router.push('/index-project')
          //this.$emit('GoHome',this.isLogin);
          //this.$root.$eventHub.$emit('login-success-event')
          Bus.$emit('userSignIn', this.formInline.user);
          //console.log("----"+window.location.href)

        } else if(this.formInline.user !=""&&this.formInline.password!=""){
        let postdata={
                                                    "username":"",
                                                    "password":"",

                                              }
                         postdata.username=this.formInline.user
                         postdata.password=this.formInline.password

                        this.$http.post('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/login', postdata).then(
                                                     (response) => {
                                                     console.log(response)
                                                                   if(response.ret==true){
                                                                   this.$Message.success('登陆成功!')
                                                                    Bus.$emit('showNavigation', false);
                                                                    this.$router.push('/index-project')
                                                                    Bus.$emit('userSignIn', this.formInline.user);
                                                                   }else{this.$Message.error('登陆信息错误!')}

        })}else{
        this.$Message.error('请输入用户名密码!');}

      },
      handleReset() {
               if (this.formInline.user !=""&&this.formInline.repassword!=this.formInline.password)
                {
                let postdata={
                                            "username":"",
                                            "password":"",
                                            "new_password":""
                                      }
                 postdata.username=this.formInline.user
                                  postdata.password=this.formInline.password
                                  postdata.new_password=this.formInline.repassword
                this.$http.post('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/password_change', postdata).then(
                                             (response) => {
                                             console.log(response)
                                                           if(response.ret==true){
                                                           this.$Message.success('修改成功!')
                                                            this.ToLogin();
                                                           }
                                                          else if(response.ret==false&&response.msg=="密码错误"){
                                                          this.$Message.error('原密码错误!')
                                                          }else if(response.ret==false&&response.msg=="用户不存在"){
                                                            this.$Message.error('用户名不存在!')
                                                            }else{this.$Message.error('修改失败!')}

                                             })
                         }else{
                         this.$Message.error('新旧密码不能相同!')
                         }
      },
      handleRegister(){
        if(this.formInline.user != '' &&this.formInline.repassword=='admin' ) {
          let postdata={
                            "username":"",
                            "password":""
                      }
                  postdata.username=this.formInline.user
                  postdata.password=this.formInline.password
        this.$http.post('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/register', postdata).then(
                            (response) => {
                                          if(response.ret==true){
                                          this.$Message.success('注册成功!')
                                           this.ToLogin();
                                          }else if(response.ret==false){
                                           this.$Message.error('该用户名已被注册!')}
                                         else{this.$Message.error('注册失败!')}
                            })

        }
        else if('admin'!=this.formInline.repassword){
          this.$Message.error('请输入正确的管理员密码!')
        }else{
          this.$Message.error('请输入用户名或密码!')
        }
      },
      ToRegister(){
        this.showRegister = true
        this.showLogin = false
      },
      ToReset(){
              this.showReset = true
              this.showLogin = false
            },
      ToLogin(){
        this.showRegister = false
        this.showLogin = true
        this.showReset= false
      }

    }
  }
</script>

<style scoped>
  .bg{
    position: fixed;
    width: 100%;
    height: 100%;
    background: url("../assets/img/background.png") no-repeat center;
    background-size: cover;
  }
  .wrapper {
    margin: 100px auto;
    width: 500px;
    height: 380px;
    padding: 10px;
    box-shadow: 2px 2px 2px 3px #3d4047;
    position: absolute;
    right: 80px;
    top:160px;
    border-radius:5px;
    background-color: #0C1532;
    opacity: 0.7;


  }
  .wrapper > h1{
    text-align: center;
    vertical-align: middle;
    margin: 20px 12px;
    font-size: 30px;
  }
  .login {
    position: absolute;
    margin: 0 auto;
    padding: 200px auto;
    width: 70%;
    height: 100%;
  }
  .Register {
    margin: 0 auto;
    padding: 200px auto;
    width: 70%;
    height: 100%;
  }
  label{
    color: white;
  }
  span{cursor:pointer;}
</style>


