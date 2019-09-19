<template>
  <div class="staff-section" id="staff-section">
    <a-button class="staff-insert" type="primary" icon="plus-circle" @click="handleCreate()">添加管理员</a-button>
    <ul class="staff-title">
      <li class="staff-title-item">id</li>
      <li class="staff-title-item">姓名</li>
      <li class="staff-title-item">手机号</li>
      <li class="staff-title-item">密码</li>
      <li class="staff-title-item">操作</li>
    </ul>
    <ul class="staff-list" v-for="(item,index) in staffData" :key="item.id">
      <li class="staff-list-item">{{item.id}}</li>
      <li class="staff-list-item">{{item.name}}</li>
      <li class="staff-list-item">{{item.phone}}</li>
      <li class="staff-list-item">{{item.password}}</li>
      <li class="staff-list-item">
        <a-button type="primary" @click="handleEdit(item.id)" icon="edit"></a-button>
        <a-button type="danger" @click="handleDelete(item.id,index)" icon="close"></a-button>
      </li>
    </ul>
  </div>
</template>

<script>
import staffService from "@/global/service/staff";

export default {
  data(){
    return{
      staffData:[]
    }
  },
  created(){
    staffService.list().then(res=>{
      this.staffData = res.data
    })
  },
  methods:{
    handleEdit(id){
      this.$router.push({name:'staffEdit',params:{id:id}})
    },
    handleCreate(){
      this.$router.push({name:'staffCreate'})
    },
    handleDelete(id,index){
      let question = confirm('确定删除此管理员？')
      if(question){
        staffService.delete(id).then(res =>{
          if(res.code === 200){
            alert(res.message)
            this.staffData.splice(index,1)
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
.staff-section ,.sort-section,.artcle-section{
  display: flex;
  flex-direction: column;
  margin: 30px;
}
.staff-insert ,.sort-insert,.artcle-insert{
  margin-left:20px;
  width:140px;
  height: 40px;
}
.staff-title ,.sort-title,.artcle-title{
  margin-top: 50px;
  padding-left: 30px;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #9999992a;
}
.staff-title .staff-title-item ,.sort-title-item,.artcle-title-item{
  width: 100%;
  font-size: 14px;
  color: #000000;
}
.staff-list ,.sort-list,.artcle-list{
  width: 100%;
  height: 50px;
  padding-left: 30px;
  line-height: 50px;
  display: flex;
  border-bottom: 1px solid #9999992a;
}
.staff-list .staff-list-item,.sort-list-item{
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 14px;
  color: #777777;
}
.artcle-list-item{
  display: flex;
  align-items: center;
  width: 25%;
  font-size: 14px;
  color: #777777;
}
.artcle-text{
  width: 18%;
  margin-right: 5%;
  text-overflow: ellipsis; 
  white-space: nowrap; 
  overflow: hidden; 
}
.staff-item-edit,.sort-item-edit,.artcle-item-edit{
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: #46acf086;
  border-radius: 8px;
  outline: none;
  border: 1px solid #999999;
  font-size: 14px;
  color: #333333;
  letter-spacing: 1px;
}
.staff-item-delete,.sort-item-delete,.artcle-item-delete{
  margin-left: 5px;
  display: inline-block;
  text-align: center;
  width: 60px;
  height: 30px;
  line-height: 30px;
  background-color: #f02323ec;
  border-radius: 8px;
  outline: none;
  border: 1px solid #99999957;
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 1px;
}
</style>