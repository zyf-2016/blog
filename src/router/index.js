import Vue from 'vue'
import Router from 'vue-router'
import Login from 'view/Login'
import Register from 'view/Register'
import Home from 'view/Home'
import Index from 'view/Index'
import Album from 'view/Album'
import Article from 'view/Article'
import Contact from 'view/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'index',
          component: Index
        },
        {
          path: 'album',
          component: Album
        },
        {
          path: 'article',
          component: Article
        },
        {
          path: 'contact',
          component: Contact
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        title: '登录'
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        title: '注册'
      }
    }
    // {
    //   path: '**',
    //   redirect: '/login'
    // }
  ]
})