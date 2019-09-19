const homePage = () =>
  import(/* webpackChunkName: "homePage" */ "@/views/homePage");    //展示页
const jumpPage = () =>
  import(/* webpackChunkName: "jumpPage" */ "@/views/jumpPage");    //详情页
const staff = () =>
  import(/* webpackChunkName: "staff" */ "@/views/staff");    //人员管理
const sort = () =>
  import(/* webpackChunkName: "sort" */ "@/views/sort");    //分类管理
const article = () =>
  import(/* webpackChunkName: "article" */ "@/views/article");    //文章管理
const staffEdit = () =>
  import(/* webpackChunkName: "staffEdit" */ "@/views/staffEdit");    //人员管理编辑
const staffCreate = () =>
  import(/* webpackChunkName: "staffCreate" */ "@/views/staffCreate");    //人员管理添加
const sortEdit = () =>
  import(/* webpackChunkName: "sortEdit" */ "@/views/sortEdit");    //分类管理编辑
const sortCreate = () =>
  import(/* webpackChunkName: "sortCreate" */ "@/views/sortCreate");    //分类管理添加
const articleEdit = () =>
  import(/* webpackChunkName: "articleEdit" */ "@/views/articleEdit");    //文章管理编辑
const articleCreate = () =>
  import(/* webpackChunkName: "articleCreate" */ "@/views/articleCreate");    //文章管理添加
import BasicLayout from "@/components/BasicLayout";
import index from "@/components/index";

export default[
  {
    path:'/',
    component:index,
    name:'',
    children:[
      {
        path:'/index',
        component:homePage,
        name:'index'
      },
      {
        path:'/index/:id',
        component:jumpPage,
        name:'indexSingle'
      }
    ]
  },
  {
    path:'/admin',
    component:BasicLayout,
    name:'admin',
    children:[
      {
        path:'/staff',
        name:'staff',
        component:staff,
      },
      {
        path:'/staff/edit/:id',
        name:'staffEdit',
        component:staffEdit
      },
      {
        path:'/staff/create',
        name:'staffCreate',
        component:staffCreate
      },
      {
        path:'/sort',
        name:'sort',
        component:sort
      },
      {
        path:'/sort/create',
        name:'sortCreate',
        component:sortCreate
      },
      {
        path:'/sort/edit/:id',
        name:'sortEdit',
        component:sortEdit
      },
      {
        path:'/article',
        name:'article',
        component:article
      },
      {
        path:'/article/create',
        name:'articleCreate',
        component:articleCreate
      },
      {
        path:'/article/edit/:id',
        name:'articleEdit',
        component:articleEdit
      }
    ]
  }
]