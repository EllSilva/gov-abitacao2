import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
 

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_recuperar_senha from './view/home/recuperar_senha.js'
Vue.component('p-recuperar_senha', page_recuperar_senha)

Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/login', component: { template: '<p-home></p-home>' } },
    { path: '/recuperar_senha', component: { template: '<p-recuperar_senha></p-recuperar_senha>' } }
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()