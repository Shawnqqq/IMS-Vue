<template>
  <div class="container">
    <div class="header">
      <router-link class="head-nav" to="/index">
        <img class="head-logo" src='@/assets/index-logo.png'>
      </router-link >
      <ul class="header-content">
        <router-link class="head-item" to="/index/1">技术动态</router-link>
        <router-link class="head-item" to="/index/2">八仔新闻</router-link>
        <router-link class="head-item" to="/index/4">科技热点</router-link>
        <router-link class="head-item" to="/index/6">最新资讯</router-link>
      </ul>
      <a class="login" href="/login">登录</a>
      <img class="head-image" src="@/assets/index-head.png">
    </div>
    <div class="content">
      <router-view></router-view>
    </div>
    <div class="footer">
      Copyright © 2019 极客学院体验技术部出品
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  }
}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
.container{
  background-image: url(~@/assets/index-bg.jpg);
  background-size: cover;
  background-repeat: repeat-y;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.login{
  font-size: 14px;
  color: #666;
  cursor: pointer;
  text-decoration: none;
}
.login:hover{
  color: blue;
}
.header{
  display: flex;
  align-items: center;
  background-image: url(~@/assets/head-bg.png);
  background-size: cover; 
  background-repeat: no-repeat;
  height: 90px;
}
.head-logo{
  margin-left: 30px;
  width: 180px;
}
.head-image{
  height: 90px;
}
.header-content{
  display: flex;
  flex: 1;
  padding-left: 100px;
  font-size: 13px;
  color: #777;
}
.head-item{
  width: 150px;
  color: rgb(12, 107, 131);
  font-size: 16px;
}
.footer{
  height:30px;
  width: 100%;
  text-align: center;
  font-size: 12px;
  color: #333333;
}
.content{
  flex: 1;
  padding: 20px 30px;
}
.content-title{
  text-align: center;
  font-size: 60px;
  padding-top: 120px;
}
.content-text{
  font-size: 20px;
  padding:40px 80px;
  line-height: 50px;
}
.jumpPage-container{
  display: flex;
  justify-content: space-between;
  height: 40px;
}
.jumpPage-item{
  font-size: 18px;
  color: #333;
  margin-left: 20px;
  text-decoration: none;
  cursor: pointer;
}
.jumpPage-item:hover{
  color: rgb(38, 71, 216);
  text-decoration: underline;
}
.jumpPage-time{
  font-size: 14px;
  color: #555;
  margin-right: 50px;
}
.singlePage-title{
  text-align: center;
  font-size: 28px;
}
.singlePage-time{
  text-align: center;
  font-size: 15px;
  color: #555;
  margin: 10px 0;
}
</style>