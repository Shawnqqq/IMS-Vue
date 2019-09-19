<template>
  <div class="sort-insert-section">
    <div class="sort-insert-title">编辑分类</div>
    <form class="sort-insert-form"> 
      <div class="sort-input">
        <p class="sort-input-title">名称</p>
        <input :class="{active:nameRule}" type="text" placeholder="请输入姓名" v-model="value.name">
        <p class="sort-input-name-message" :class="{active:nameRule}">内容不能为空</p>
      </div>
    </form>
    <button class="sort-insert-btn" @click="handleEdit()">提交</button>
  </div>
</template>

<script>
import sortService from "@/global/service/sort";

export default {
  data(){
    return{
      value:'',
      nameRule:false
    }
  },
  created(){
    let id = this.$route.params.id;
    sortService.single(id).then(res =>{
      this.value = res.data[0]
    })
  },
  methods:{
    handleEdit(){
      let id = this.$route.params.id;
      let islock = true;
      if(!(/\S/.test(this.value.name))){
        this.nameRule = true
        islock = false
      }else{
        this.nameRule = false
      }

      let params = {
        name: this.value.name
      }

      if(islock){
        sortService.update(id,params).then(res =>{
          if(res.code === 200){
            alert(res.message)
            this.$router.push({name:'sort'})
          }else{
            alert(res.message)
          }
        })
      }
    }
  }
}
</script>

<style scoped>
.sort-insert-section{
  display: flex;
  flex-direction: column;
  margin: 30px;
}
.sort-insert-title{
  height: 35px;
  border-bottom: 1px solid #9999992d;
}
.sort-insert-form{
  margin: 40px 0 0 30px;
  display: flex;
  flex-direction: column;
}
.sort-input{
  display: flex;
  height: 80px;
  width: 280px;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.sort-input input{
  width: 200px;
  height: 32px;
  border: 1px solid #3790cc;
  font-size: 12px;
  color: #888;
  border-radius: 3px;
  line-height: 30px;
  padding: 5px;
  outline: none;
}
.sort-input input.active{
  border: 1px solid #e42d15;
}
.sort-input-title{
  font-size: 15px;
  color: #455;
}
.sort-insert-btn{
  margin: 15px 0 0 120px;
  width: 140px;
  height: 40px;
  background-color: #0080ff;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 2px;
}
.sort-input-name-message,.sort-input-phone-message,.sort-input-password-message{
  display: none;
  position: absolute;
  top: 60px;
  left: 85px;
  font-size: 12px;
  color: #e42d15;
}
.sort-input-name-message.active{
  display: block;
}
</style>