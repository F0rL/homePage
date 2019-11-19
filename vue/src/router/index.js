import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/blog'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      redirect: '/user/login',
      component: () => import('../views/User.vue'),
      children: [
        {
          path: 'login',
          name: 'UserLogin',
          component: () => import ('../components/User/Login.vue')
        },
        {
          path: 'Register',
          name: 'UserRegister',
          component: () => import ('../components/User/Register.vue')
        }
      ]
    },
    {
      path: '/blog',
      name: 'blog',
      component: () => import('../views/Blog.vue'),
      redirect: '/blog/list',
      children: [
        {
          path: 'list',
          name: 'blogList',
          component: () => import ('../components/blog/BlogList.vue')
        },
        {
          path: 'article/:blogId',
          name: 'blogView',
          props: true,
          component: () => import ('../components/blog/BlogView.vue')
        },    
        {
          path: 'userlist',
          name: 'userList',
          component: () => import ('../components/blog/BlogUserList.vue')
        },
        {
          path: 'draft',
          name: 'blogDraft',
          component: () => import ('../components/blog/BlogDraftList.vue')
        },
        {
          path: 'new/:blogId',
          name: 'blogNew',
          props: true,
          component: () => import ('../components/blog/BlogEditor.vue')
        }
      ]
    }
  ]
})
