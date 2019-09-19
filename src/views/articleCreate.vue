<template>
  <div class="sort-insert-section">
    <div class="sort-insert-title">添加文章</div>
    <form class="sort-insert-form">
      <div class="article-input">
        <p class="sort-input-title">标题</p>
        <input class="article-input-name"  :class="{active:nameRule}" type="text" placeholder="请输入标题" v-model="value.name">
        <p class="article-input-name-message" :class="{active:nameRule}" id="article-input-name-message">标题不能为空</p>
      </div>
      <div class="article-input">
        <p class="sort-input-title">类型</p>
        <select id="article-input-sort" v-model="select">>
          <option  v-for="item in selectValue" :key="item.id" :value="item.id">{{item.name}}</option>
        </select>
      </div>
      <div class="article-input content-editor">
        <p class="sort-input-title">内容</p>
        <div class='editor1' id="editor">
          <ckeditor  :editor="editor" v-model="editorText">
          </ckeditor>
        </div>
      </div>
    </form>
    <button class="article-insert-btn" @click="handleCreate()">提交</button>
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
      select:'1',
      selectValue:[],
      value:{name:''},
      editor:ClassicEditor,
      editorText:'',
      nameRule:false
    }
  },
  created(){
    sortService.list().then(res=>{
      this.selectValue = res.data
    })
  },
  methods:{
    handleCreate(){
      let islock = true
      if(!(/\S/.test(this.value.name))){
        this.nameRule =true
        islock= false;
      }else{
        this.nameRule = false
      }

      if(islock){
        let params = {
          title:this.value.name,
          sort_id:this.select,
          text:this.editorText
        }
        articleService.insert(params).then(res =>{
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
.article-input-name,#articleEdit-input-name{
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
.article-input-name.active,#articleEdit-input-name.active{
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
.article-input-name-message.active{
  display: block;
}
.content-editor{
  width: 600px;
  flex:1;
}
.editor1{
  width: 500px;
  margin: 0px 0 0 20px;
}
.editor2{
  width: 600px;
  position: absolute;
  top: 30px;
  left: 50px;
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