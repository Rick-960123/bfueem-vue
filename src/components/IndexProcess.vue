<template>
  <div class="main_common_box">
    <Layout :style="{padding: '0 24px 24px'}">
      <Breadcrumb :style="{margin: '12px -22px'}">
        <BreadcrumbItem>科研进程</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{padding: '30px', minHeight: '280px', width:'100%' ,background: '#fff'}">
        <Carousel autoplay v-model="value2" :autoplay-speed="8000"  :height="400" loop>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/lunbo1.png" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/lunbo2.png" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/lunbo3.png" alt="">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/lunbo5.png" alt="">
            </div>
          </CarouselItem>
        </Carousel>
      </Content>

    </Layout>
    <Breadcrumb :style="{margin: '-10px 8px'}">
      <BreadcrumbItem>科研新闻</BreadcrumbItem>
    </Breadcrumb>
    <div class="news">
      <Row :gutter="22" type="flex">
        <Col span="16" class="demo-tabs-style1" style="border: 2px solid ;border-color: mediumseagreen; border-radius: 5px ;opacity:0.8; padding:16px;">
        <Tabs type="card">
          <TabPane label="近期">
            <ul>
              <li><span>2018-05-30</span>习近平在北京大学考察时讲话</li>
              <li><span>2018-05-28</span>习近平在中国科学院第十九次院士大会、中国工程院第十四次院士大会上的讲话</li>
            </ul>
          </TabPane>
          <TabPane label="近一年">
            <ul>
                <li><span>2018-05-30</span>习近平在北京大学考察时讲话</li>
                <li><span>2018-05-28</span>习近平在中国科学院第十九次院士大会、中国工程院第十四次院士大会上的讲话</li>
            </ul>
          </TabPane>
        </Tabs>
        </Col>
        <Col span="8" class="demo-tabs-style1" style=" border: 2px solid ;border-color: mediumseagreen; border-radius: 5px ; opacity:0.8;padding:16px;">
        <Tabs type="card">
          <TabPane label="全部新闻">
            <ul>
              <li v-for='value,index in news'>{{value}}</li>
            </ul>
            <Button type="text" @click="showNews"></Button>
          </TabPane>
        </Tabs>
        </Col>
      </Row>
    </div>
    <Breadcrumb :style="{margin: '12px 12px'}">
      <BreadcrumbItem>科研进度</BreadcrumbItem>
    </Breadcrumb>
    <div class="progress">
      <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width: 50%">50%</div>
    </div>
    <BackTop></BackTop>
  </div>
</template>

<script>
  export default {
    name: 'IndexProcess',
    data () {
      return {
       value2:0,
        news:[
        '习近平在北京大学考察时讲话',
        '习近平在中国科学院第十九次院士大会、中国工程院第十四次院士大会上的讲话',
        '创新决胜未来海外关注习近平院士大会上的讲话',
          '习近平为上合组织发展指明方向大会讲话金句',
          '国际社会热切期待上合组织青岛峰会',
          '中俄智库高端论坛在京举行',
          '中国空间站国际合作正式开启',
          '创新决胜未来海外关注习近平院士大会上的讲话',
          '习近平为上合组织发展指明方向大会讲话金句',
          '国际社会热切期待上合组织青岛峰会',
          '创新决胜未来海外关注习近平院士大会上的讲话',
          '习近平为上合组织发展指明方向大会讲话金句',
          '国际社会热切期待上合组织青岛峰会',


        ]
      }
    },
    methods:{
      showNews(){
        this.$Message.success('查询新闻成功!');
        this.$router.push('/newsShow');
      }
    }
  }
</script>

<style scoped>
  .main_common_box span{
    text-align: left;
    font-weight: 600;
    font-size: 14px;
  }
  .am-slider .am-slides>li {
    /*display: none;*/
    -webkit-backface-visibility: hidden;
    position: relative;
    list-style: none;
  }
  .am-slider .am-slides img {
    width:100%;
    height: 450px;margin-top:20px;
    background-size:1200px 450px;
  }

  img {
    box-sizing: border-box;
    vertical-align: middle;
  }
  .demo-carousel img{
    width: 100%;
  }

  .article-protect-tab span {
    border: 1px solid #aaa;
    width: 120px;
    display: inline-block;
    text-align: center;
    height: 30px;
    line-height: 30px;
    border-radius: 22px;
    font-size: 14px;
    font-weight: 700;
    margin: 0 1rem;
    cursor: pointer;
  }
  .article-protect-body img {
    max-width: 40%;
    float: left;
  }
  .article-protect-body ul {
    margin: 0;
    width: 53%;
    display: inline-block;
    float: right;
    text-align: center;

  }
  .article-protect-body ul li {
    display: block;
    text-indent: 2em;
    border-bottom: 1px dashed #b0b0b0;
    margin-top: 10px;
  }
  .article-protect-body ul li a,p{
    margin: .5rem 0 1rem;
    /*font-size: 1.4rem;*/
    font-size: 14px;
  }
  .article-content ul li h3 {
    color: #000;
    display: inline-block;
  }
  .article-protect-body ul li span {
    float: right;
    color: #000;
    font-weight: 600;
  }

  .news{
    padding: 20px;
    margin: 5px 5px 14px 14px;
    /*background: rgb(227, 232, 238);*/
    /*border: gray 1px solid;*/
    /*border-radius: 2px;*/
  }
  .news ul {
    width: 100%;
    padding-left:20px;
  }
  .news ul li{
    width: 100%;
    font-size: 14px;
    float:left;
  }
  .news Button{
    float:right;
  }
  .news ul li span {
    font-size: 16px;
    float:right;
  }
  .news demo-tabs-style1 {
    height: 120px;
    margin-top: -16px;

  }

  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-content > .ivu-tabs-tabpane {
    background: #fff;
    padding: 16px;
  }

  .demo-tabs-style1 > .ivu-tabs.ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab {
    border-color: transparent;
  }

  .demo-tabs-style1 > .ivu-tabs-card > .ivu-tabs-bar .ivu-tabs-tab-active {
    border-color: #fff;
  }


</style>





