<template>
<div>
        <div class="mask">
            <img src="/static/Timg.gif"></img>
            </div>
        </div>
</div>
</template>
<script>
  export default {
    name: "Loading",
     props: {

        },
        data () {
          return {

          }
        },
        mounted () {

        },
   }
<style>
  .mask{
    padding:100px;
    width:50px;
    min-height:50px;
    position: absolute;
    z-index:8;
    border:1px solid #eee;
    border-radius: 5px;
    background: #fff;
    box-shadow: 2px 0px 3px #ccc,-2px 0px 3px #ccc;
    opacity: 0.8;
    font-size: 14px;
    margin: 0px 20px;
    text-align:center
    }
    .mask img{
    width:100%;
    height:100%;
    text-align:center
    }
</style>
