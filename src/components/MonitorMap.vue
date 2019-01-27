<template>
  <div class="smart-area-home" >
    <div id="map" :style="{height: mapHeight + 'px'}"></div>
    <show-model v-if="isVisibleOne" :width="320" :height="130" :index="1"
                @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
    <show-model v-if="isVisibleTwo" :width="620" :height="130" :index="2"
                @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
    <show-model v-if="isVisibleThree" :width="920" :height="130" :index="3"
                  @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
    <show-model v-if="isVisibleFour" :width="1220" :height="130" :index="4"
                  @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
    <show-model v-if="isVisibleFive" :width="320" :height="430" :index="5"
                   @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
     <show-model v-if="isVisibleSix" :width="620" :height="430" :index="6"
                   @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>
    <show-model v-if="isVisibleSeven" :width="920" :height="430" :index="7"
                @handleCloseModal="handleCloseModal" :monitorDataOne="monitorDataOne"></show-model>

  </div>
</template>

<script>
  import { TMap } from '../common/TMap.js'
  import ShowModel from '../components/ShowModel'
  export default {
    name: 'HomePage',
    data () {
      return {
        mapHeight: 1000,
        map: null,
        loading: true,
        loadingText: '',
        panelVisible: false,
        currentCity: null,
        areaInfo: {},
        tradingArea: [],
        qqObject: null,
        isVisibleOne:false ,
        isVisibleTwo: false,
        isVisibleThree: false,
        isVisibleFour:false,
        isVisibleFive: false,
        isVisibleSix: false,
        isVisibleSeven: false,
         newInfoX:null,
        newInfoY:null,
        index:null,
        time:[],
        monitorDataOne:[{},{},{},{},{},{},{}]
      }
    },
    components:{
      ShowModel
    },
    computed: {
    },
    created () {
      this.mapHeight = document.documentElement.clientHeight-120

    },
    mounted () {
      TMap().then(qq => {
      this.searchPonitData()
      this.settime()
        this.qqObject = qq
        this.map = new qq.maps.Map(document.getElementById('map'), {
          // 地图的中心地理坐标
          center: new qq.maps.LatLng(39.709456, 106.891758),
          zoom: 15,
          panControl: false,
          zoomControl: false
        })
      }).then(QQMapPlugin => {
          this.addMarkers()
      })

    },




    methods: {
      reload(){
      if(this.isVisibleOne == true){
       this.isVisibleOne = false
           this.$nextTick(() => (this.isVisibleOne = true))}
          if(this.isVisibleTwo == true)
           {this.isVisibleTwo = false
            this.$nextTick(() => (this.isVisibleTwo = true))}
            if(this.isVisibleThree == true)
                       {
            this.isVisibleThree = false
             this.$nextTick(() => (this.isVisibleThree = true))}
             if(this.isVisibleFour == true)
                        {
             this.isVisibleFour = false
              this.$nextTick(() => (this.isVisibleFour = true))}
              if(this.isVisibleFive == true)
                         {
              this.isVisibleFive = false
               this.$nextTick(() => (this.isVisibleFive = true))}
               if(this.isVisibleSix == true)
                          {
               this.isVisibleSix = false
                this.$nextTick(() => (this.isVisibleSix = true))}
                if(this.isVisibleSeven == true)
                           {
                this.isVisibleSeven = false
                 this.$nextTick(() => (this.isVisibleSeven = true))}
      },
      settime1(){
            let a=window.location.href;
            if(a=="http://www.bfueem.com/#/monitor-map"||a=="http://101.200.32.14/#/monitor-map"||a=="http://localhost:8080/#/monitor-map"){
                      this.searchPonitData()
                     }
            },
      settime(){

      setInterval(this.settime1, 60000);
      setInterval(this.reload, 60000);
      },
      addMarkers(){
        let qq = this.qqObject
        let position1 = new qq.maps.LatLng(39.709456, 106.891758)
        let position2 = new qq.maps.LatLng(39.708713, 106.907615)
        let position3 = new qq.maps.LatLng(39.712444, 106.910855)
        let position4 = new qq.maps.LatLng(39.786770, 106.857447)
        let position5 = new qq.maps.LatLng(39.698300, 106.813523)
        let position6 = new qq.maps.LatLng(40.006431, 116.346598)
        let marker1 = new qq.maps.Marker({
          position: position1,
          map: this.map,
        })
        var label1 = new qq.maps.Label({
          position: position1,
          map: this.map,
          content:'<div  class="mapde" >监测点1</div>'
        });
        label1.setStyle({backgroundColor:"mediumseagreen",border:"none","border-radius":"8px"});
        let marker2 = new qq.maps.Marker({
          position: position2,
          map: this.map
        })
        var label2 = new qq.maps.Label({
          position: position2,
          map: this.map,
          content:'<div class="mapde" >监测点2</div>'
        });
        label2.setStyle({backgroundColor:"mediumseagreen",border:"none","border-radius":"8px"});
        let marker3 = new qq.maps.Marker({
          position: position3,
          map: this.map
        })
        var label3 = new qq.maps.Label({
          position: position3,
          map: this.map,
          content:'<div class="mapde">监测点3</div>'
        });
        label3.setStyle({backgroundColor:"mediumseagreen",border:"none","border-radius":"8px"});
        let marker4 = new qq.maps.Marker({
                  position: position4,
                  map: this.map
                })
                var label4 = new qq.maps.Label({
                  position: position4,
                  map: this.map,
                  content:'<div class="mapde" >监测点4</div>'
                });
                label4.setStyle({backgroundColor:"mediumseagreen",border:"none","border-radius":"8px"});
         let marker5 = new qq.maps.Marker({
                   position: position5,
                   map: this.map
                 })
                 var label5 = new qq.maps.Label({
                   position: position5,
                   map: this.map,
                   content:'<div class="mapde" >监测点5</div>'
                 });
                 label5.setStyle({backgroundColor:"mediumseagreen",border:"none","border-radius":"8px"});
          let marker6 = new qq.maps.Marker({
                    position: position6,
                    map: this.map
                  })
                  var label6 = new qq.maps.Label({
                    position: position6,
                    map: this.map,
                    content:'<div class="mapde" >监测点6</div>'
                  });
                  label6.setStyle({backgroundColor:"mediumseagreen",border:"none","border-radius":"8px"});
        var pixel=null
        qq.maps.event.addListener(marker1, 'click', ()=> {

          this.isVisibleOne=true
          pixel = marker1.getProjection().fromLatLngToContainerPixel(position1)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index = 1
          this.searchPonitData()

        })
        qq.maps.event.addListener(marker2, 'click', ()=>{
          this.isVisibleTwo=true
          pixel = marker2.getProjection().fromLatLngToContainerPixel(position2)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index=2
          this.searchPonitData()
        })
        qq.maps.event.addListener(marker3, 'click', ()=>{
          this.isVisibleThree=true
          pixel = marker3.getProjection().fromLatLngToContainerPixel(position3)
          this.newInfoX = pixel.getX()
          this.newInfoY = pixel.getY()
          this.index=3
          this.searchPonitData()

        })
        qq.maps.event.addListener(marker4, 'click', ()=>{
        this.isVisibleFour=true
                  pixel = marker4.getProjection().fromLatLngToContainerPixel(position4)
                  this.newInfoX = pixel.getX()
                  this.newInfoY = pixel.getY()
                  this.index=4
                  this.searchPonitData()

                })
         qq.maps.event.addListener(marker5, 'click', ()=>{
                   this.isVisibleFive=true
                   pixel = marker5.getProjection().fromLatLngToContainerPixel(position5)
                   this.newInfoX = pixel.getX()
                   this.newInfoY = pixel.getY()
                   this.index=5
                   this.searchPonitData()

                 })
          qq.maps.event.addListener(marker6, 'click', ()=>{
                    this.isVisibleSix=true
                    pixel = marker6.getProjection().fromLatLngToContainerPixel(position6)
                    this.newInfoX = pixel.getX()
                    this.newInfoY = pixel.getY()
                    this.index=6
                    this.searchPonitData()

                  })
           qq.maps.event.addListener(marker7, 'click', ()=>{
                     this.isVisibleSeven=true
                     pixel = marker7.getProjection().fromLatLngToContainerPixel(position7)
                     this.newInfoX = pixel.getX()
                     this.newInfoY = pixel.getY()
                     this.index=7
                     this.searchPonitData()

                   })
        this.mapPanTo(position1)
      },
      mapPanTo: function (position) {
        let map = this.map
        map.panTo(position)
      },
      searchPonitData(){

      console.log("实时监测")
          let postData1={device_id:1}
          this.$http.get('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/fluxs/newest', postData1)
          .then((response) => {

          this.monitorDataOne[0]=response
          this.monitorDataOne[0].device_id="01020201"

            })

         let postData2={device_id:2}
                 this.$http.get('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/fluxs/newest', postData2)
                 .then((response) => {

                 this.monitorDataOne[1]=response
                  this.monitorDataOne[1].device_id="01020202"

                   })

        let postData3={device_id:3}
                  this.$http.get('https://bird.ioliu.cn/v2?url=http://101.200.32.14/api/fluxs/newest', postData3)
                  .then((response) => {

                  this.monitorDataOne[2]=response
                  this.monitorDataOne[2].device_id="01020203"

                    })


        let postData4={device_id:4}
                  this.$http.get('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/fluxs/newest', postData4)
                  .then((response) => {

                  this.monitorDataOne[3]=response
                  this.monitorDataOne[3].device_id="01020204"
                    })


        let postData5={device_id:5}
                         this.$http.get('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/fluxs/newest', postData5)
                         .then((response) => {

                         this.monitorDataOne[4]=response
                          this.monitorDataOne[4].device_id="01020205"
                           })


        let postData6={	"id":"20009" }
                                    this.$http.post('https://bird.ioliu.cn/v1?url=http://123.57.12.101:3000/lastdata', postData6)
                                    .then((response) => {
                                                 this.monitorDataOne[5].pressure=response[0].Xairpre/100
                                                 this.monitorDataOne[5].temper=response[0].Xairtemp
                                                 this.monitorDataOne[5].created_at=response[0].Xdate
                                                 this.monitorDataOne[5].id=response[0].Xid
                                                 this.monitorDataOne[5].device_id="02010101"
                                                 this.monitorDataOne[5].radiation=response[0].Xradiation
                                                 this.monitorDataOne[5].humidity=response[0].Xrelahumi
                                                 this.monitorDataOne[5].pm10=response[0].pm10
                                                 this.monitorDataOne[5].pm2_5=response[0].pm25
                                                 this.monitorDataOne[5].pm100=response[0].pm100
                                                 this.monitorDataOne[5].so2=response[0].so2
                                                 this.monitorDataOne[5].wind_direction=response[0].wd
                                                 this.monitorDataOne[5].wind_speed=response[0].ws

                                      })


                 let postData7={	"id":"200010" }
                             this.$http.post('https://bird.ioliu.cn/v1?url=http://123.57.12.101:3000/lastdata', postData7)
                             .then((response) => {
                                          this.monitorDataOne[6].pressure=response[0].Xairpre/100
                                          this.monitorDataOne[6].temper=response[0].Xairtemp
                                          this.monitorDataOne[6].created_at=response[0].Xdate
                                          this.monitorDataOne[6].id=response[0].Xid
                                          this.monitorDataOne[6].device_id="02010102"
                                          this.monitorDataOne[6].radiation=response[0].Xradiation
                                          this.monitorDataOne[6].humidity=response[0].Xrelahumi
                                          this.monitorDataOne[6].pm10=response[0].pm10
                                          this.monitorDataOne[6].pm2_5=response[0].pm25
                                          this.monitorDataOne[6].pm100=response[0].pm100
                                          this.monitorDataOne[6].so2=response[0].so2
                                          this.monitorDataOne[6].wind_direction=response[0].wd
                                          this.monitorDataOne[6].wind_speed=response[0].ws


                               })


      },
      handleCloseModal(index){
        if(index=='1'){
         this.isVisibleOne=false

        }
        if(index=='2'){

          this.isVisibleTwo=false
        }
        if(index=='3'){

          this.isVisibleThree=false
        }
         if(index=='4'){

                  this.isVisibleFour=false
                }
           if(index=='5'){

                    this.isVisibleFive=false
                  }
          if(index=='6'){

                   this.isVisibleSix=false
                 }
          if(index=='7'){

                   this.isVisibleSeven=false
                 }

      }
    }
  }
</script>

<style>
  .smart-area-home{
    height:100%;
    box-sizing: border-box;
    padding:20px 20px 35px 20px !important;
    background-color: #fff;
  }
.mapde{
  width: 60px;
  height: 20px;
  text-align:center;
  background-color:mediumseagreen;
  color: white;

}
</style>
