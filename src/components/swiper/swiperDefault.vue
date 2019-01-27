<template>
<div>
  <swiper :options="swiperOption">

      <swiper-slide v-for="(item,index) in recommendGoods" :key="index">
        <div class="recommend-item" >
          <img :src="item.image" >
          <div>{{item.goodsName}}</div>
          <div>￥{{item.price}}（￥{{item.mallPrice}}）</div>

        </div>
      </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>


</div>
</template>

<script>
  import axios from 'axios'
  import 'swiper/dist/css/swiper.css'
  import {swiper,swiperSlide} from 'vue-awesome-swiper'
    export default {
        name: "swiper-default",
      data(){
          return{
            slide:[1,2,3,4,5,6],
            recommendGoods: [],
            swiperOption:{
              loop:true,
              autoplay : 1000,

              pagination:{
                el:'.swiper-pagination',
                clickable:true
              }
            }
          }
      },
      components:
        {
          swiper,swiperSlide

      },
      created(){
        axios({
          url:"https://www.easy-mock.com/mock/5b3c1bcf640ebb688b7d102d/Smilevue/index",
          method:'get',
        })
          .then(response=>{
            console.log(response)
            if(response.status==200){
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
.swiper-slide{
  text-align: center;
  padding: 3rem;
  border-bottom: 1px solid #ccc;
}
.recommend-item{
  width: 99%;
  border-right:1px solid #eee;
  font-size:12px ;
  text-align: center;


}
</style>
