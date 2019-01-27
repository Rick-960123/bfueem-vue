<template>
  <div class="main_common_box">
    <Layout :style="{padding: '0 24px 24px'}">
      <Breadcrumb :style="{margin: '12px -22px'}">
        <BreadcrumbItem>科研简介</BreadcrumbItem>
      </Breadcrumb>
      <Content :style="{padding: '30px', minHeight: '430px', width:'100%' ,background: '#fff'}">
        <Carousel autoplay v-model="value2" :autoplay-speed="8000"  :height="400" loop>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="../assets/img/lunbo5.png" alt="">
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
              <img src="../assets/img/lunbo1.png" alt="">
            </div>
          </CarouselItem>
        </Carousel>
      </Content>
    </Layout>
    <div class="index-main-title">
      <span>项目情况</span>

      <p>西北干旱荒漠区位于国家生态安全格局“两屏三带”的北方防沙带，是国家“一 带一路”的重点建设区域，该区干旱风大、植被退化、土地沙化严重，生态系统极其脆弱。国家规划的14个大型煤炭基地中的神东和宁东煤炭基地位于该区域，占地4.2万平方公里，煤炭产能超过2.7亿吨。随着区域内煤炭开采规模和强度不断增大，生态安全问题日益严重。煤炭开采导致生态系统结构变异、生态过程 阻断、生态功能退化、生态稳定性减弱，对区域协调发展产生不利影响。</p>
      <p>目前干旱荒漠区煤炭开发对区域生态影响规律研究尚不系统，矿区生态恢复技术研发相对滞后，已有的生态恢复技术和模式难以支撑煤炭基地的生态修复与综合整治。 因此，研究西北干旱荒漠区煤炭开发对区域生态影响规律，构建矿区受损生态系统恢复与重建技术体系，在典型区域进行规模化研究示范，为西北干旱荒漠区煤炭基地生态安全保障提供科技支撑，对于实现矿区生态恢复、改善生态环境质量、 保障“两屏三带”区域生态安全具有重大意义。</p>
    </div>
    <div class="index-main-body">
      <span>风景环境</span>

      <ul>
        <li><img src="../assets/img/scene1.png"><p>沙漠之树</p></li>
        <li><img src="../assets/img/scene2.jpg"><p>沙漠花海</p></li>
        <li><img src="../assets/img/scene3.jpg"><p>坚强的树苗</p></li>
      </ul>
      <!--<p>这里需要填什么内容</p>-->
    </div>
    <div>
      <div class="contact-header">
        <h1>联系我们</h1>
      </div>
      <ul class="contact-icon">
        <li><span></span><span>邮件:</span><span>mark_yanlei@qq.com</span></li>
        <li><span></span><span>电话:</span><span>010-62336913</span></li>
        <li><span></span><span>公司地址:</span><span>北京市海淀区清华东路35号</span></li>
      </ul>
    </div>
  </div>
  <!-- Collect the nav links, forms, and other content for toggling -->

</template>

<script>

  export default {
    name: 'IndexProject',
    data() {
      return {
        value2:0
      }
    },
    methods:{
      handleChange:function(){
        this.$router.push("/IndexProcess");

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
  .index-main-title {
    padding: 20px 0 ;

  }
  .index-main-title p {
    color: dimgray;
    font-size: 14px;
    text-indent: 2em;
    margin: 20px;
  }

  .content-header  ul li {
    padding: 10px;
    padding-top: 10px;
    text-decoration: none;


  }
.index-main-body{
  margin-top: 60px;

}
  .index-main-body li {
    width: 31.33%;
    list-style: none;
    display: inline-block;
    text-align: center;
    margin:20px 8px;
    overflow: hidden;
  }
  .index-main-body>p {
    width: 100%;
    margin-top: 8em;
    text-align: center;
    font-size:12px;
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
  .article-protect-body {
    width: 100%;
    height: 350px;
    padding: 0 20px;
  }
  .article-protect-body img {
    max-width: 40%;
    float: left;
  }
  .article-protect-body ul {
    margin: 0;
    width: 50%;
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
  .news-info {
    max-width: 100%;
    height:500px;
    text-align: center;
    overflow: auto;
    /*margin-bottom: 10rem;*/
    margin: 0px 24px;
  }
  .news-info h2 {
    display: block;
    width: 100px;
    margin: 40px auto;
    padding: 3px 0;
    border-bottom: 2px solid #000;
    font-size: 14px;
  }
  .news-info>div ul {
    float: left;
    margin: 0;
    padding: 0;
    width: 100%;
  }
  .news-info>div ul li {
    width: 100%;
    list-style: none;
    float: left;
    margin-bottom: 23px;
  }

  .news-info>div ul li img {
    width: 172px;
    float: left;
  }
  .news-info>div ul li p {
    float: left;
    width: 71%;
    text-align: center;
    color: black;
    margin: 5px 0 0 10px;
  }

  .news-info>div ul li span {
    float: left;
    width: 71%;
    text-align: center;
    color: #ababab;
    margin: 5px 0 0 10px;
  }
  .news-info>div ul li a {
    border: 1px solid #999;
    color: #000;
    display: block;
    width: 90px;
    text-align: center;
    height: 28px;
    float: right;
  }

  .contact-header{
    margin-top: 50px;
    text-align: center;
  }
  .contact-icon {
     max-width: 1100px;
     margin: 30px auto;
     padding: 0;
     text-align: center;
     white-space: nowrap;
   }
  .contact-icon li {
    list-style: none;
    display: inline-block;
    width: 30%;
    text-align: center;
    vertical-align: top;
  }
  .contact-icon li span {
    display: block;
    margin: 10px auto;
    white-space: normal;
    font-size: 12px;
    text-align: center;
  }
  .contact-icon>li:nth-child(1)>span:nth-child(1) {
    width: 70px;
    height: 70px;
    background: url(../assets/img/contact1.png) center center/contain no-repeat;
  }
  .contact-icon>li:nth-child(2)>span:nth-child(1) {
    width: 70px;
    height: 70px;
    background: url(../assets/img/contact2.png) center center/contain no-repeat;
  }
  .contact-icon>li:nth-child(3)>span:nth-child(1) {
    width: 70px;
    height: 70px;
    background: url(../assets/img/contact3.png) center center/contain no-repeat;
  }
</style>

