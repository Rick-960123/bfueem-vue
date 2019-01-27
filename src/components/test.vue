<template>
  <div>
    <h1>标题一<small>小标题</small></h1>
    <p><mark>政治路线确定之后，干部就是决定因素。关键在培养和造就高素质的干部队伍。7月4日，习近平在全国组织工作会议上指出：选拔、管理、使用工作。”请随“学习中国”小编一起学习。</mark><del></del>四百苏打饼覅<ins>苏菲是水电费告</ins>诉粉丝的弗格森</p>
    <p>实现中华民族伟大复兴的中国梦，关键在党，关键在人，<strong>“为政之要，莫先于用人。”</strong>四百苏打饼覅苏菲是水电费告诉粉丝的弗格森</p>
    <p class="text-left">慕课网</p>
    <p class="text-center">慕课网</p>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banner,index) in bannerPicArray" :key="index">
          <img v-lazy="banner.imageUrl" width="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <h1>表格</h1>
    <table class="table table-striped table-bordered table-hover">
      <tr>
        <th>表头1</th>
        <th>表头2</th>
        <th>表头3</th>
        <th>表头2</th>
        <th>表头3</th>
      </tr>

      <tr class="table-active">
        <td>哈哈</td>
        <td>呵呵</td>
        <td>嘻嘻</td>
        <td>呵呵</td>
        <td>嘻嘻</td>
      </tr>
      <tr class="table-warning">
        <td>哈哈</td>
        <td>呵呵</td>
        <td>嘻嘻</td>
        <td>呵呵</td>
        <td>嘻嘻</td>
      </tr>
    </table>
    <van-button type="primary">主要按钮</van-button>
    <div class="type-bar">
      <div v-for="(cate,index) in category" :key="index"  >
        <img :src="cate.image" width="100%">
        <p>{{cate.mallCategoryName}}</p>
      </div>
  </div>
    <div class="recommend">
      <div class="re-title">
        商品推荐
      </div>
      <div class="re-body">

        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
              <div class="recommend-item" >
                <img :src="item.image" >
                  <div>{{item.goodsName}}</div>
                  <div>￥{{item.price}}（￥{{item.mallPrice}}）</div>

              </div>

          </swiper-slide>

        </swiper>

      </div>
    </div>
    <div>
      <swiperDefault></swiperDefault>
    </div>



</div>
</template>

<script>
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
  import swiperDefault from'./swiper/swiperDefault'
  // import 'bootstrap/dist/js/bootstrap.js'
  // import 'bootstrap/dist/css/bootstrap.css'
    export default {
        name: "test",
        data(){
          return {
            category: [],
            recommendGoods: [],
            swiperOption:{
              slidesPerView:4
            },
            bannerPicArray:[
              {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
              {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
              {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
            ]
          }
       },
      components:{
          swiper,swiperSlide,swiperDefault
      },
      created(){
          axios({
            url:"https://www.easy-mock.com/mock/5b3c1bcf640ebb688b7d102d/Smilevue/index",
            method:'get',
                })
            .then(response=>{
            console.log(response)
              if(response.status==200){
              this.category=response.data.data.category;
                this.recommendGoods=response.data.data.recommend;
              }
        })
            .catch(error=>{
              console.log(error)
            })
      }
    }
</script>

<style scoped>
  .swiper-area{
    clear:both;
    max-height: 600px;
    overflow: hidden;
  }
.type-bar{
  background-color: #fff;
  margin: .3rem .3rem .3rem .3rem;
  border-radius: .3rem;
  font-size: 14px;
  display: flex;
 flex-direction: row;
  flex-wrap: nowrap;
}
.type-bar div{
  padding: .3rem;
  font-size: 12px;
  text-align: center;
}
.recommend{
background-color: #0f0f0f0f;
  margin-top: .3rem;
 }
.re-title{

  border-bottom: 1px solid #eee;
  font-size: 14px;
  padding: .2rem;
  color: deeppink;

}
  .re-body{
    border-bottom: 1px solid #eee;

  }
  .recommend-item{
width: 99%;
    border-right:1px solid #eee;
    font-size:12px ;
    text-align: center;


  }
</style>
