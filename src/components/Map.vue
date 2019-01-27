<template>
  <div class="map">
    <div style="height:1000px;" id="home_page_map"></div>
  </div>

</template>

<script>
  import echarts from 'echarts';
  import geoData from '../map-data/get-geography-value.js';
  import cityData from '../map-data/get-city-value.js';
  export default {
    name: 'homeMap',
    data () {
      return{
        cityData: cityData
      }
    },
    mounted:function(){
      this.Creatmap();
    },
    methods: {
      Creatmap(){
        var _this = this;
        console.log('+++++'+_this);
        var convertData = function (data) {
          let res = [];
          let len = data.length;
          for (var i = 0; i < len; i++) {
            var geoCoord = geoData[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              });
            }
          }
          return res;
        };
        var map = echarts.init(document.getElementById('home_page_map'));
        const chinaJson = require('../map-data/china.json');
        echarts.registerMap('china', chinaJson);
        map.setOption({
          backgroundColor: '#FFF',
          title: {
            text: '全国采集器主要分布',
            subtext: '北京林业大学',
            sublink: 'http://www.bjfu.edu.cn/',
            left: 'center',
            textStyle: {
              color: 'grey'
            }
          },
          tooltip : {
            trigger: 'item'
          },
          geo: {
            map: 'china',
            label: {
              emphasis: {
                show: false
              },
            },
            itemStyle: {
              normal: {
                areaColor: '#EFEFEF',
                borderColor:'grey'//区块的边框颜色
              },
              emphasis: {
                areaColor: '#E5E5E5'
              }
            },

          },
          grid: {
            top: 0,
            left: '2%',
            right: '2%',
            bottom: '0',
            containLabel: true
          },
          series: [{
            type: 'scatter',
            coordinateSystem: 'geo',
            data: convertData(this.cityData),
            symbolSize: function (val) {
              return val[2] / 10;
            },
            label: {
              normal: {
                formatter: '{b}',
                position: 'right',
                show: true
              },
              emphasis: {
                show: true
                ,textStyle:{
                  color:'#fa4f04'
                }
              }
            },

            itemStyle: {
              normal: {
                color: '#2d8cf0'
              },
            }
          }]

        });
        map.on('click', function (params) {//点击事件
          console.log(params);
           _this.handleChange(params);
        });
        window.addEventListener('resize', function () {
          map.resize();
        });
      },
      handleChange(params){
        if (params.name=='乌海'){
          this.$router.push("/dataInsert");
        }else{
          this.$router.push("/error");
        }
       }
    }
  };
</script>


<style scoped>
.map{
  margin:10px;
}
</style>
