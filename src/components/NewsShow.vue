<template>
  <div class="layout">
    <Layout>
      <Content :style="{padding: '0 10px'}">
        <Breadcrumb :style="{margin: '20px 18px'}">
          <h2>恭喜你解锁新任务</h2>
        </Breadcrumb>
        <Card>
          <div style="min-height: 500px;">
            <div class="layout-header">
              <h1>{{title}}</h1>
              <span>{{time}}</span>
            </div >
            <div class="layout-content">
              <Row>
                <Col span="8">
                <div class="layout-left">
                  <ul>
                    <li><img src="../assets/img/scene2.jpg"></li>
                  </ul>
                </div>
                </Col>
                <Col span="16">
                <div class="layout-right">
                  <p>{{content}}</p>
                  <p>{{content}}</p>
                  <p>{{content}}</p>
                </div>
                </Col>
              </Row>
            </div>

          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
  export default {
    name: "newsShow",
    data(){
      return{
        title:'恭喜你解锁新任务',
        time:'2018-05-31',
        img:'../assets/img/scene2.jpg',
        content:'联系539983038@qq.com领取任务与奖励'
      }
    },
    methods:{
      back:function () {
        this.$router.push('/home');
      },
      exit:function () {
        this.$router.push('/');
      }


    }
  }
</script>
<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .header-left{
    float:left;
    width:550px;
    height:64px;
    line-height: 64px;
    color:#fff;
    padding-left: -20px;
  }
  .project_title{
    float: left;
    width:490px;
    height: 64px;
    margin-left: 10px;
    font-size: 25px;
    font-weight: 600;
  }
  .layout-header{
    margin: 10px;
    border-bottom:solid 4px gainsboro;
  }

  .layout-content{
    margin-top: 20px;
  }
  .layout-left{
    display: block;
    float: left;
    width: 100%;
  }
  .layout-left ul li {
    list-style: none;
    margin: 10px;
    vertical-align:middle
  }
  .layout-right{
    font-size: 15px;
    text-indent:2em;
    text-align: left;
    margin-left: 20px;
  }
  .layout-right p{
    margin:10px ;
  }
  h2{
    text-align: left;
    font-size: 18px;
    color: black;
  }
</style>
