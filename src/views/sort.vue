<template>
  <div class="sort-section" id="sort-section">
    <a-button class="sort-insert" type="primary" icon="plus-circle" @click="handleCreate()">添加分类</a-button>
    <ul class="sort-title">
      <li class="sort-title-item">id</li>
      <li class="sort-title-item">名称</li>
      <li class="sort-title-item">操作</li>
    </ul>
    <ul class="sort-list" v-for="(item,index) in sortData" :key="item.id">
      <li class="sort-list-item">{{item.id}}</li>
      <li class="sort-list-item">{{item.name}}</li>
      <li class="sort-list-item">
        <a-button type="primary" @click="handleEdit(item.id)" icon="edit"></a-button>
        <a-button type="danger" @click="handleDelete(item.id,index)" icon="close"></a-button>
      </li>
    </ul> 
  </div>
</template> 

<script>
import sortService from "@/global/service/sort";

export default {
  data(){
    return{
      sortData:[]
    }
  },
  created(){
    sortService.list().then(res =>{
      this.sortData = res.data
    })
  },
  methods:{
    handleEdit(id){
      this.$router.push({name:'sortEdit',params:{id:id}})
    },
    handleCreate(){
      this.$router.push({name:'sortCreate'})
    },
    handleDelete(id,index){
      let question = confirm('确定删除此分类？')
      if(question){
        sortService.delete(id).then(res =>{
          if(res.code === 200){
            alert(res.message)
            this.sortData.splice(index,1)
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
  width:120px;
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