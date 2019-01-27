<template>
  <div>
    <div class="title">
      留言板
    </div>
    <div class="container">
      <div class="Messagebox">
        <form>
          <div class="form-group">
            <label for="Name">姓名:</label>
            <input v-model="name" type="text" class="form-control" id="Name" placeholder="闫磊">
            <label for="IphoneNumber">联系电话:</label>
            <input v-model="phonenumber" type="text" class="form-control" id="IphoneNumber" placeholder="010-62336913">
            <label for="exampleFormControlInput1">邮箱:</label>
            <input v-model="email" type="email" class="form-control" id="exampleFormControlInput1" placeholder="mark_yanlei@qq.com">
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">问题和意见:</label>
            <textarea v-model="question" class="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
          </div>
        </form>
        <button type="button" class="btn btn-primary "  @click="handleRegister">提交</button>
      </div>
    </div>

  </div>

</template>

<script>
    export default {
        name: "message-board",
      data(){
          return{
            name:'',
            phonenumber:'',
            email:'',
            question:''
          }

        },
        methods: {
          handleRegister() {
            if (this.name && this.phonenumber&& this.email&&this.question) {
              this.$Message.success('提交成功!');
              this.name=''
              this.phonenumber=''
              this.email=''
              this.question=''
            }else {
              this.$Message.success('请补充完整信息!');
            }
          }
        }}
</script>

<style scoped>

  .title{
  font-weight: bold;
    font-size: 20px;
    background-color: mediumseagreen;
    height: 60px;
    margin-top:30px;
    text-align: center;
    line-height: 60px;
    color: whitesmoke;
    opacity:0.7;
  }
.container{
  border-radius: 3px;
  border: gainsboro 1px solid;
  padding: 20px 30px;
  margin: 40px auto;
}
</style>
