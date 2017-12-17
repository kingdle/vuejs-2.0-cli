import Vue from 'vue'
import App from './App'
import Router from 'vue-router'
import axios from 'axios'
import  VueAxios from 'vue-axios'
import Todos from './components/Todos'
import Todo from './components/Todo'


Vue.use(VueAxios, axios)
Vue.use(Router)


const routes = [
    {
        path: '/',
        name: 'todos',
        component: Todos
    },
    {
        path: '/todo/:id',
        name: 'todo',
        component: Todo
    }
]
const router =new Router({
    routes
})

new Vue({
    el: '#app-hd',
    template: '<App/>',
    components: {App},
    router
})
