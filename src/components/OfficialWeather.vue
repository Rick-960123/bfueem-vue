<template>
  <div class="content-common">
    <Row style="line-height: 32px;">
      <Col span="24">
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
    <div  >
    <Table ref="table" style="margin-top:20px;" height="600"  :columns="columnsData1" :data="tableData1" :loading="isLoad"></Table>
    <Button type="primary" size="large" @click="exportData()" class="export-data-btn"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
    <Table ref="table" style="margin-top:20px;" height="800"  :columns="columnsData2" :data="tableData2" :loading="isLoad"></Table>
    <Button type="primary" size="large" @click="exportData()" class="export-data-btn"><Icon type="ios-download-outline"></Icon> 导出数据</Button>
     </div>

      </div>
    </template>

<script>
  import store from '@/store/store'
  import Loading from './Loading'
  import {mapState} from 'vuex'
  import axios from'axios'
  export default {
    name: "official-weather",
    components:{
            'Loading':Loading
        },
    data () {
      return {
        columnsData1:[{'title':'时间',key:'recordDate'},{'title':'风力（级）',key:'windpower'},
          {'title':'温度（℃）',key:'tem'},{'title':'气压（/百帕）',key:'pre'},{'title':'相对湿度（%）',key:'rhu'},
          {'title':'两分钟平均风向（度）',key:'win_D_Avg_2mi'},{'title':'最大风速风向（度）',key:'win_D_S_Max'},
        ],
        columnsData2:[{'title':'时间',key:'recordDate'},{'title':'极大风速风向（度）',key:'win_D_INST_Max'},
          {'title':'极大风速（m/s）',key:'win_S_Inst_Max'},{'title':'两分钟平均风速（m/s）',key:'win_S_Avg_2mi'},{'title':'过去一小时降水量（mm）',key:'pre_1h'},
          {'title':'水平能见度',key:'vis'},{'title':'天气',key:'wep_Now'}
        ],
        isShow:true,
        isLoad:false,
        tableData1:[],
        tableData2:[],
        startDateValue: '',
        endDateValue: ''
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
      console.log("官方气象")
        var start=this.startDateValue.replace(/-/ig,'');
        var end=this.endDateValue.replace(/-/ig,'');

          axios.get('https://bird.ioliu.cn/v1?url=http://101.200.32.14/api/weathers',{
            params: {
              gte_collect_at:start,
              lte_collect_at:end+"23-59"
            }
          })
            .then(response=>{
              this.tableData1= []
              this.tableData2= []

              for(let i=0;i<response.data.data.length;i++){
                let data1={windpower:null,recordDate:null,tem:null,pre:null,rhu:null,win_D_Avg_2mi:null}
                let data2={win_D_S_Max:null,win_D_INST_Max:null,win_S_Inst_Max:null,win_S_Avg_2mi:null,pre_1h:null,vis:null,wep_Now:null}
                data1.windpower= response.data.data[i].windpower
                data1.recordDate= response.data.data[i].collect_at
                data1.tem= response.data.data[i].TEM
                data1.pre= response.data.data[i].PRS
                data1.rhu= response.data.data[i].RHU
                data1.win_D_Avg_2mi= response.data.data[i].WIN_D_Avg_2mi
                data1.win_D_S_Max= response.data.data[i].WIN_D_S_Max

                data2.recordDate= response.data.data[i].collect_at
                data2.win_D_INST_Max= response.data.data[i].WIN_D_INST_Max
                data2.win_S_Inst_Max= response.data.data[i].WIN_S_Inst_Max
                data2.win_S_Avg_2mi= response.data.data[i].WIN_S_Avg_2mi
                data2.pre_1h= response.data.data[i].PRE_1h
                data2.vis= response.data.data[i].VIS
                data2.wep_Now= response.data.data[i].WEP_Now

                this.tableData1.push(data1)
                this.tableData2.push(data2)
              }
            })
            .catch(error=>{
              console.log(error)
            })


          // console.log(this.tableData)
        }
      }
  }
</script>

<style scoped>
  .export-data-btn{
    margin-top:10px;
  }
</style>
