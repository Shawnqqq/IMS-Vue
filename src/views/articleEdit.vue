<template>
  <div class="sort-insert-section">
    <div class="sort-insert-title">编辑文章</div>
    <form class="sort-insert-form">
      <div class="article-input">
        <p class="sort-input-title">名称</p>
        <input id="articleEdit-input-name" type="text" :class="{active:nameRule}" v-model="value.title">
        <p class="articleEdit-input-name-message" :class="{active:nameRule}" id="articleEdit-input-name-message">内容不能为空</p>
      </div>
      <div class="article-input">
        <p class="sort-input-title">类型</p>
        <select id="articleEdit-input-sort" v-model="value.sort_id">
          <option v-for="item in selectValue" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="article-input content-editor">
        <p class="sort-input-title">内容</p>
        <div class='editor2' id="editor">
          <ckeditor  :editor="editor" v-model="value.text">
          </ckeditor>
        </div>
      </div>
    </form>
    <button class="articleEdit-insert-btn" @click="handleEdit()">提交</button>
  </div>
</template> 

<script>
import sortService from "@/global/service/sort";
import articleService from "@/global/service/article";
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default {
  name:'editor',
  data(){
    return{
      selectValue:[],
      value:{},
      editor:ClassicEditor,
      nameRule:false
    }
  },
  created(){
    let id = this.$route.params.id;
    sortService.list().then(res =>{
      this.selectValue =res.data
    })
    articleService.single(id).then(res =>{
      this.value = res.data.article[0]
    })
  },
  methods:{
    handleEdit(){
      let id = this.$route.params.id;
      let islock = true
      if(!(/\S/.test(this.value.title))){
        this.nameRule =true
        islock = false;
      }else{
        this.nameRule =false
      }

      if(islock){
        let params = {
          title:this.value.title,
          sort_id:this.value.sort_id,
          text:this.value.text
        }
        articleService.update(id,params).then(res =>{
          if(res.code === 200){
            alert(res.message)
            this.$router.push({name:'article'})
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
.article-input{
  display: flex;
  height: 80px;
  width: 500px;
  /* justify-content: space-between; */
  align-items: center;
  position: relative;
}
.article-editor{
  position: absolute;
  left: 50px;
  top: 25px;
}
.article-insert-btn,.articleEdit-insert-btn{
  margin: 50px 0 0 120px;
  width: 160px;
  height: 40px;
  background-color: #0080ff;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 2px;
}
#article-input-name,#articleEdit-input-name{
  margin-left: 20px;
  width: 400px;
  height: 32px;
  border: 1px solid #3790cc;
  font-size: 12px;
  color: #888;
  border-radius: 3px;
  line-height: 30px;
  padding: 5px;
  outline: none;
}
#article-input-name.active,#articleEdit-input-name.active{
  border: 1px solid #e42d15;
}
#article-input-sort,#articleEdit-input-sort{
  margin-left: 20px;
  width: 120px;
  height: 32px;
  border: 1px solid #3790cc;
  font-size: 12px;
  color: #888;
  border-radius: 3px;
  line-height: 30px;
  padding: 5px;
  outline: none;
}
.article-input-name-message,.articleEdit-input-name-message{
  display: none;
  position: absolute;
  top: 65px;
  left: 60px;
  font-size: 12px;
  color: #e42d15;
}
.articleEdit-input-name-message.active{
  display: block;
}
.content-editor{
  width: 600px;
  flex:1;
}
.editor1{
  width: 600px;
  position: absolute;
  top: 30px;
  left: 50px;
}
.editor2{
  width: 500px;
  margin: 0px 0 0 20px;
}

.article-paging{
  margin-top: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding-left: 40px;
}
.article-size{
  text-align: center;
  line-height: 30px;
  width: 30px;
  height: 30px;
}
</style>