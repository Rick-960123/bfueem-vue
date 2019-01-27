<template>
  <div class="content-common">
    <Row style="line-height: 32px;">
      <Col span="24">
        <p class="fl" style="margin-left: 8px">请选择站点:</p>
        <Select v-model="siteSelect" style="width:150px;margin-left:8px;" class="fl">
          <Option v-for="item in siteList" :value="item.value"
                  :key="item.value">{{ item.label }}
          </Option>
        </Select>
        <p class="fl" style="margin-left: 8px">请选择监测项目:</p>
        <Select v-model="projectSelect" style="width:150px;margin-left:8px;" class="fl">
          <Option v-for="item in projectList" :value="item.value"
                  :key="item.value">{{ item.label }}
          </Option>
        </Select>
        <p class="fl" style="margin-left: 8px">请选择日期:</p>
        <!--<DatePicker type="daterange" split-panels placeholder="请选择日期" style="width: 200px;margin-left:5px;"-->
        <!--v-model="dateValue"></DatePicker>-->
      <DatePicker type="date" placeholder="Select date"
                  @on-change="startDateValue=$event" style="width: 150px" v-model="startDateValue"></DatePicker>
      <DatePicker type="date" v-model="endDateValue" placeholder="Select date"
                  style="width: 150px" @on-change="endDateValue=$event"></DatePicker>
      <Button type="primary" style="margin-left:15px;" @click="searchTableData"> 查询</Button>
      </Col>
    </Row>
    <Table ref="table" style="margin-top:20px;" height="800" :columns="columnsData" :data="tableData" :loading="isLoad"></Table>
    <div class="page">
      <Page :total="dataCount" :page-size="pageSize" show-total class="paging" @on-change="changepage"></Page>
    </div>
    <Button type="primary" size="large" @click="exportData()" class="export-data-btn"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
  </div>
</template>

<script>
  import store from '@/store/store'
  import Loading from './Loading'
  import {mapState} from 'vuex'
  export default {
    name: 'MonitorCondition',
    components:{
        'Loading':Loading
    },
    props: {
        onsubmit: {
          type: Function,
          default: null
        }
      },
    data () {

      return {
        isShow:true,
        isLoad:false,
        siteSelect: '1',
        projectSelect:'temper',
        siteList:[
            {'label':'监测点1','value':'1'},
            {'label':'监测点2','value':'2'},
            {'label':'监测点3','value':'3'},
            {'label':'监测点4','value':'4'},
            {'label':'监测点5','value':'5'},
            {'label':'监测点6','value':'6'}
            ],
        projectList:[
                      {'label':'大气压力(/100 kpa)','value':'pressure'},
                     {'label':'温度(℃)','value':'temper'},
                     {'label':'pm1(ug/m3)','value':'pm1'},
                     {'label':'一氧化氮(ppm)','value':'no'},
                     {'label':'二氧化硫(ppm)','value':'so2'},
                     {'label':'pm25(ug/m3)','value':'pm2_5'},
                     {'label':'pm10(ug/m3)','value':'pm10'},
                     {'label':'pm100(ug/m3)','value':'pm100'},
                     {'label':'风速(m/s)','value':'wind_speed'},
                     {'label':'风向(度)','value':'wind_direction'},
                     {'label':'总辐射','value':'radiation'},
                     {'label':'湿度(%)','value':'humidity'},
                     {'label':'电压(v)','value':'voltage'},
                     {'label':'电流(A)','value':'electricity'},
                     {'label':'耗电量(100W/h)','value':'electric_quantity'},
        ],
        projectList1:[
                             {'label':'大气压力(/100 kpa)','value':'Xairpre'},
                             {'label':'温度(℃)','value':'Xairtemp'},
                             {'label':'pm1(ug/m3)','value':'pm1'},
                             {'label':'一氧化氮(ppm)','value':'no'},
                             {'label':'二氧化硫(ppm)','value':'so2'},
                             {'label':'pm25(ug/m3)','value':'pm25'},
                             {'label':'pm10(ug/m3)','value':'pm10'},
                             {'label':'pm100(ug/m3)','value':'pm100'},
                             {'label':'风速(m/s)','value':'ws'},
                             {'label':'风向(度)','value':'wd'},
                             {'label':'总辐射','value':'Xradiation'},
                             {'label':'湿度(%)','value':'Xrelahumi'},
                             {'label':'电压(v)','value':'voltage'},
                             {'label':'电流(A)','value':'electricity'},
                             {'label':'耗电量(100W/h)','value':'electric_quantity'},
                ],
        columnsData:[{'title':'监测点ID',key:'device_id'},{'title':'检测项目值',key:'value'},
          {'title':'时间',key:'created_at'}],
        //表格中的数据
        tableData0:[],
        tableData:[],
        //一次存储接受的所有数据
        tableDate1:[],
        // 初始化信息总条数
        dataCount:0,
        // 每页显示多少条
        pageSize:300,
        startDateValue: null,
        endDateValue: null,
        store
      }
    },
      computed:{
          count(){
          return this.$store.state.GlobalObject.isLoading;
                 this.$store.state.GlobalObject.isShow;
                  }

      },
  watch:{
           count: function(ov,nv){
        this.isLoad=this.$store.state.GlobalObject.isLoading
        this.isShow=this.$store.state.GlobalObject.isShow
                               }
     },

    methods:{

      exportData(){
        this.$refs.table.exportCsv({
          filename: '原始数据'
        });
      },
      searchTableData(){
      console.log("历史查询")
        if(this.siteSelect<6){
         let postData={
                   device_id:this.siteSelect,
                   gte_created_at:this.startDateValue,
                   lte_created_at:this.endDateValue+"-23-59",
                 }

        this.$http.get('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/fluxs', postData).then(
          (response) => {

            this.tableData = []
            var key=this.projectSelect
            this.dataCount = response.total;

            for(let i=0;i<response.total;i++){


               let data={device_id:null,created_at:null,value:null}
               data.device_id= "0"+(response.data[i].device_id+1020200)
               data.created_at= response.data[i].created_at
               data.value= response.data[i][key]

              this.tableData.push(data)
              this.tableData1=this.tableData
            }

            if(this.tableData.length < this.pageSize){
              this.tableData = this.tableData1;
            }else{
              this.tableData = this.tableData1.slice(0,this.pageSize);
            }

          })
           }

      if(this.siteSelect>=6){
          let b="Xairpre"
          for(let i=0;i<this.projectList1.length;i++){
                if(this.projectSelect==this.projectList[i].value){
                          b=this.projectList1[i].value
                }
          }

          let postData={
                    id:"20009",
                    start:this.startDateValue,
                    end:this.endDateValue,
                    sensor:b
                }

              this.$http.post('https://bird.ioliu.cn/v1?url=http://123.57.12.101:3000/compare', postData).then(
                (response) => {
                  this.tableData0 = []
                  this.tableData = []
                  var key=b
                  this.dataCount = response.length;
                  for(let i=0;i<response.length;i++){

                     let data={Xid:null,Xdate:null,value:null}
                     data.device_id= "0"+(response[i].Xid-20009+2010101)
                     data.created_at= response[i].Xdate
                     if(key=="Xairpre"){data.value= response[i][key]/100}else{
                                           data.value= response[i][key]}

                    this.tableData0.push(data)


                  }
                  for(let i=this.tableData0.length-1;i>=0;i--){
                               let data={device_id:null,created_at:null,value:null}
                                            data.device_id= this.tableData0[i].device_id
                                            data.created_at= this.tableData0[i].created_at
                                            data.value= this.tableData0[i].value


                                    this.tableData.push(data)

                                    this.tableData1=this.tableData
                              }

                  if(this.tableData.length < this.pageSize){
                    this.tableData = this.tableData1;
                  }else{
                    this.tableData = this.tableData1.slice(0,this.pageSize);
                  }

                })

            }

       },

      changepage(index){
        var _start = ( index - 1 ) * this.pageSize;
        var _end = index * this.pageSize;
        this.tableData = this.tableData1.slice(_start,_end);
      }
    }
  }
</script>

<style scoped>
.export-data-btn{
  margin-top:10px;
}
.ivu-table td.table-info-column{
  background-color: #2db7f5;
  color: #fff;
}
  .page{
    margin: 20px;
    float: right;
  }
</style>
