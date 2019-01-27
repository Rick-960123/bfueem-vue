<template>
  <div id="app">
    <Layout v-if="!isLogin">
        <Header id="header">
          <div class="header_left">
            <div class="monitor_logo"></div>
            <div class="project_title">西北干旱荒漠区煤炭基地生态安全监测平台</div>

          </div>
          <div class="header_right">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <span class="welcome_you" style="width:50px; margin-right: 20px">欢迎您</span>
              <Dropdown transfer trigger="click" @on-click="handleClickUserDropdown">
                <a href="javascript:void(0)">
                  <span class="main-user-name" style="color: white">{{this.userName}}</span>
                  <Icon type="arrow-down-b" style="color: white"></Icon>
                </a>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">个人中心</DropdownItem>
                  <DropdownItem name="changeback" divided>更换主题</DropdownItem>
                  <DropdownItem name="loginout" divided>退出登录</DropdownItem>
                </DropdownMenu>
              </Dropdown>
              <div  class="head_img">
                <!--<Avatar :src="userInfo.avatar" style="width:48px;height: 48px; border-radius: 50%"></Avatar>-->
                <img src='./assets/img/touxiang.jpg' style="width:48px;height: 48px; border-radius: 50%"/>
              </div>

              <input type="file" accept="image/*" @change="handleFile" class="hiddenInput"/>
            </Row>
            <</div>
        </Header>
        <Layout>
            <Sider hide-trigger class="layout_silder">
              <Menu  active-name="1-2" :open-names="['1']" style="width:260px;"
              @on-select="handleMenuChange"
                     @on-open-change="handleSubMenuChange">
                <MenuItem name="1">
                  <Icon type="home"></Icon>
                  首页
                </MenuItem>
                <MenuItem name="2">
                  <Icon type="ios-paper"></Icon>
                  科研进程
                </MenuItem>
                <Submenu name="3">
                    <template slot="title">
                        <Icon type="ios-people"></Icon>
                        监测站
                    </template>
                    <MenuItem name="3-1">实时监测</MenuItem>
                    <MenuItem name="3-2">历史查询</MenuItem>
                    <MenuItem name="3-3">单站分析</MenuItem>
                </Submenu>
                <MenuItem name="4">
                  <Icon type="earth"></Icon>
                  官方气象
                </MenuItem>
                <MenuItem name="5">
                  <Icon type="android-create"></Icon>
                  数据录入
                </MenuItem>
                <MenuItem name="6">
                  <Icon type="android-settings"></Icon>
                  设备管理
                </MenuItem>
                <MenuItem name="7">
                  <Icon type="email-unread"></Icon>
                  联系我们
                </MenuItem>
            </Menu>
            </Sider>
            <Content >
              <router-view ></router-view>
            </Content>
        </Layout>
        <Footer id="foot">
          <ul class="footer">
            <li><Icon type="ios-email"></Icon><span >邮箱:mark_yanlei@qq.com</span></li>

            <li><Icon type="ios-telephone"></Icon><span>电话:62336913</span></li>
            <li><Icon type="location">地址</Icon><span>地址:北京林业大学清华东路35号</span></li>
          </ul>
       </Footer>
    </Layout>

       <div v-if="isLogin">

      <router-view> </router-view>
    </div>
  </div>
</template>
<script>
  import Login from './components/Login'
export default {
  name: 'App',
  data(){
    return{
      isLogin:false,
      userName:'',
      userInfo: {
        // avatar: 'http://img.zcool.cn/community/0196a156c937e46ac7252ce68a8504.png'
         avatar: './assets/img/picture1.jpg'
      }
    }
  },
//https://i.loli.net/2017/08/21/599a521472424.jpg
  mounted(){
    if(window.location.href.indexOf('login')!=-1 || window.location.hash=='#/'){
      //console.log("----"+window.location.href)
      this.isLogin=true
      console.log("****登陆"+this.isLogin);
      //接受登陆界面的用户名
      Bus.$on('userSignIn', data => {
        //console.log(data);
        this.userName = data;
      });
      //没有登陆页面直接进入主页
    }else{
      this.isLogin=false
     // console.log("****首页"+this.isLogin);
    };
    Bus.$on('showNavigation', data => {
      //console.log(data);
      this.isLogin = data;
    });
  },
  components:{
    'Login':Login,
  },

  methods:{
    handleMenuChange:function(name){
        console.log(name.toString())
      switch (name.toString()) {
          case '1':
              this.$router.push("/index-project");
              break;
        case '2':
          this.$router.push("/index-process");
          break;
          case '3-1':
            this.$router.push("/monitor-map");
            break;
          case '3-2':
            this.$router.push("/monitor-condition");
            break;
          case '3-3':
            this.$router.push("/history-show");
            break;
          case '4':
            this.$router.push("/official-weather");
            break;
         case '5':
           console.log(123);
          this.$router.push("/map");
          break;
        case '6':
          this.$router.push("/editabletable");
          break;
        case '7':
          console.log(123);
          this.$router.push("/messageboard");
          break;
      }
    },
    handleSubMenuChange(name,val){
        console.log(name)
      console.log(val)
    },
    exit:function () {
      this.$router.push('/login');
    },
    tologin(msg){
      this.username=msg
    },
    handleClickUserDropdown (name) {
      if (name === 'ownSpace') {
        this.$router.push('/ownspace')
      } else if (name === 'loginout') {
        // 退出登录
        this.isLogin = true;
        this.$router.push('/login');
      }else if(name==='changeback'){
        document.getElementById('header').style.backgroundColor='#2b85e4'
         document.getElementById('foot').style.backgroundColor='#2b85e4'
      }
    },
    uploadHeadImg: function () {
      this.$el.querySelector('.hiddenInput').click()
    },
    // 将头像显示
    handleFile: function (e) {
      let $target = e.target || e.srcElement
      let file = $target.files[0]
      var reader = new FileReader()
      reader.onload = (data) => {
        let res = data.target || data.srcElement
        this.userInfo.avatar = res.result
      }
      reader.readAsDataURL(file)
    },
  }
}
</script>

<style>
html,body{
    width:100%;
    min-width:1340px;
    font-family:'Microsoft YaHei','Hiragino Sans GB',Helvetica,Arial,'Lucida Grande',sans-serif;
    background-color: #edeef2;
    color:#333;
    font-size: 14px;
}
.ivu-layout-header {
  background: mediumseagreen;
  padding: 0 50px;
  height: 64px;
  line-height: 64px;
}
.header{
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.fl{
  float: left
}
.header_left{
  float:left;
  width:550px;
  height:64px;
  line-height: 64px;
  color:#fff;
}
.monitor_logo{
  float:left;
  width:48px;height: 48px;margin-top:6px;
  background: url('./assets/img/logo.png');
  background-size:48px 48px;
}
.project_title{
  float: left;
  width:490px;
  height: 64px;
  margin-left: 10px;
  font-size: 24px;
  font-weight: 600;
}
.header_right{
  width:400px;height: 64px;float:right;
  line-height: 64px;
  color:#fff;
}
.welcome_you{
  text-align: center;
  margin-left: 5px;
  width:60px;height: 64px;float:left;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.make_icon{
  font-size: 24px;
  margin:20px 10px;
  cursor: pointer;
}
.make_icon:hover{
  color:#2d8cf0;
}
.log_out{
  cursor: pointer;
}
.log_out:hover{
  color:#2d8cf0;
}
.layout_silder{
  width:260px !important;min-width:260px !important;max-width:260px !important;
  min-height:1000px;
  background: #fff;
}
.ivu-layout-footer{
  background:mediumseagreen;
}
.main_common_box{
  width:100%;
  padding:20px 30px;
}
.content-common{
  padding: 15px 30px;
}
.ivu-layout-footer{
  color: lightgrey;
  padding: 10px 50px;
}
.footer {
  padding: 0 auto;
  margin: 0 auto;
  text-align: center;
}
.footer li {
  list-style: none;
  display: inline-block;
  width: 30%;
  text-align: center;
  vertical-align: top;
  font-size: 25px;
}
.footer li span {
  display: block;
  margin: 0px auto;
  white-space: normal;
  font-size: 14px;
  text-align: center;
  color: whitesmoke;
}
.caption {
color: dimgray;
  float: right;
  margin-left: 10px;
}
  .head_img{
    margin-left: 15px;

  }
  .isload{
   float: right;
  }
</style>
