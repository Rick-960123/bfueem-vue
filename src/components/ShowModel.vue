<template>

  <div class="show-model-content" :style="{top:height+'px', left: width+'px'}" >
    <div class="show-model-title" >
      <label>第{{index}}监测点(id：{{monitorDataOne[index-1].device_id}})</label>

      <label type="close" class="close-btn" @click="closeModel">关闭</label>
    </div>
    <div>
      <ul :index="index">
        <li>气压：{{monitorDataOne[index-1].pressure}}kpa</li>
        <li>温度：{{monitorDataOne[index-1].temper}}℃</li>
        <li>SO2：{{monitorDataOne[index-1].so2}}ppm</li>
        <li>总辐射：{{monitorDataOne[index-1].radiation}}</li>
        <li>湿度：{{monitorDataOne[index-1].humidity}}%</li>
        <li>NO：{{monitorDataOne[index-1].no}}ppm</li>
        <li>pm1：{{monitorDataOne[index-1].pm1}}ug/m3</li>
        <li>pm10：{{monitorDataOne[index-1].pm10}}ug/m3</li>
        <li>pm2.5：{{monitorDataOne[index-1].pm2_5}}ug/m3</li>
        <li>pm100：{{monitorDataOne[index-1].pm100}}ug/m3</li>
        <li>风速：{{monitorDataOne[index-1].wind_speed}}m/s</li>
        <li>风向：{{monitorDataOne[index-1].wind_direction}}度</li>
        <li style="width:260px;">最新更新时间：{{monitorDataOne[index-1].created_at}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewAreaInfo',
    props: {
      visible: Boolean,
      width: Number,
      height: Number,
      index: Number,
      monitorDataOne: Array,
      marker1:Array,

    },
    data () {
      return {

        panelWidth: String,
        panelHeight: String,
      }
    },
    mounted () {
      this.panelWidth = this.width + 'px'
      this.panelHeight = this.height + 'px'
    },
    methods: {
      cancel(){
        console.log("emit")
      },
      closeModel(){

        this.$emit('handleCloseModal',this.index)
      }

    }
  }
</script>

<style>
  .show-model-content{
    padding:10px;
    width:290px;
    min-height:180px;
    position: absolute;
    z-index:8;
    border:1px solid #eee;
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 0px 3px #ccc,-2px 0px 3px #ccc;
    opacity: 0.8;
    font-size: 14px;
    margin: 0px 20px;
  }
  .show-model-title{
    font-size:14px;
    color:#000;
    width:100%;
    height:26px;
    color:#0066FF;
    font-weight:bold;
  }
  .close-btn{
    display: block;
    font-size: 12px;
    width: 26px;
    height:16px;
    float:right;
    cursor: pointer;
    color:firebrick;
    margin-top:3px;
  }
  .close-btn:hover{
    color:#2d8cf0;
  }
  .re-btn{
      display: block;
      font-size: 12px;
      width: 26px;
      height:16px;
      float:right;
      cursor: pointer;
      color:#0066FF;
      margin-top:3px;
    }
  .show-model-content ul li {
    float:left;
    width:120px;
    list-style: none;
  }
</style>
