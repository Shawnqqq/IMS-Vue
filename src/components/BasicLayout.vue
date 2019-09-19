<template>
  <div class="container">
    <div class="head-section">
      <img src='@/assets/logo.jpg'>
      <div class="out">
        <p class="out-text">退出系统</p>
      </div>
    </div>
    <div class="body-section">
      <div class="side-content">
        <router-link class="side-item" to="/staff"> 
          <img src='@/assets/marager.png'>
          <p>人员管理</p>
        </router-link>
        <router-link class="side-item" to="/sort">
          <img src='@/assets/sort.png'>
          <p>分类管理</p>
        </router-link>
        <router-link class="side-item" to="/article">
          <img src='@/assets/article.png'>
          <p>文章管理</p>
        </router-link>
      </div>
      <div class="layout-content">
        <div class="main-content">
          <router-view></router-view>
        </div>
        <div class="footer-content">
        Copyright © 2019 极客学院体验技术部出品
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data(){
    return{
      collapse:false
    };
  },
  methods:{
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-direction: column;
  height: 100vh;
}
.head-section{
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 2px 0px 4px 2px rgba(153, 153, 153, 0.342);
}
.head-section img{
  height: 80px;
  width: 80px;
  margin-left: 5%;
}
.out{
  display: flex;
  justify-content: center;
  margin-right: 60px;
  width: 120px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #ffffff;
  border: 1px solid #9999996c;
  border-radius: 6px;
  font-size: 14px;
  display: flex;
}
.out-text{
  color: #666666;
}
.body-section{
  display: flex;
  height: 100%;
}
.side-content{
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 100%;
  box-shadow: 0px 4px 6px 2px rgba(153, 153, 153, 0.342);
  padding-top: 50px;
}
.side-item{
  padding-left: 40px;
  display: flex;
  align-items: center;
  width: 100%;
  text-decoration: none;
}
.side-item.active{
  background-color: rgba(153, 153, 153, 0.233);
}
.side-item p{
  margin-left: 10px;
  text-align: center;
  font-size: 15px;
  line-height: 60px;
  letter-spacing: 1px;
  color:#666;
}
.side-item img{
  width:28px;
  height:28px;
}
.layout-content{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.main-content{
  flex: 1;
}
.footer-content{
  height: 30px;
  text-align: center;
  color: #999999;
  font-size: 12px;
}
</style>