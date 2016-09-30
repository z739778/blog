require('font-awesome/css/font-awesome.css')
require('simple-line-icons/css/simple-line-icons.css')

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import configRouter from './router/index'
Vue.use(VueRouter)
const router = new VueRouter()
configRouter(router)
router.start(Vue.extend(App), '#app')
