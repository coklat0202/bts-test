import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

Vue.use(Router)
// const Home = () => import('./components/Home');
// const Login = () => import('. /components/Login');

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/login', name: 'Login', component: Login }
  ]
})
