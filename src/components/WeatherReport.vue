<template>
  <div class="smart-area-home">
    <iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=2&num=5" width="650" height="70" frameborder="0" marginwidth="0" marginheight="0" scrolling="no"></iframe>
  </div>
</template>

<script>
  export default {
    name: 'WeatherReport',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods:{
      searchReport(){
        var Url = 'http://www.sojson.com/open/api/weather/json.shtml?city=' + '北京'
        $.ajax({
          url: 'http://api.data.cma.cn:8090/api?userId=5257674279816Z9XH&pwd=jQsl1Qd&dataFormat=json&interfaceId=getSurfEleByTimeRangeAndStaID&timeRange=[20180516090000,20180516093000]&staIDs=53512&elements=TEM,PRS,RHU,windpower,WIN_D_Avg_2mi&dataCode=SURF_CHN_MUL_HOR',
          dataType: 'jsonp',
//          data: {
//            q: "select * from json where url=\"" + Url + "\"",
//            format: 'json'
//          },
          success: function (d) {
            console.log(JSON.stringify(d))

          }, error: function (error) {
            this.$Message.error('查询出现错误')
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
