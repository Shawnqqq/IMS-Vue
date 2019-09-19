<template>
  <div>
    <ul class="jumpPage-container" v-for="item in singleData" :key="item.id">
      <a class="jumpPage-item">{{item.title}}</a>
      <p class="jumpPage-time">{{item.created_time}}</p>
    </ul>
  </div>
</template>

<script>
import sortService from "@/global/service/sort";

export default {
  data(){
    return{
      singleData:[]
    }
  },
  created(){
    this.handleShow()
  },
  methods:{
    handleShow(){
      let id = this.$route.params.id;
      sortService.index(id).then(res =>{
        this.singleData = res.data
      })
    }
  }
}
</script>