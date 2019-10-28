import Vue from 'vue'
import App from './App'
import './static/css/icon.css'
import './static/css/main.css'
import './static/css/animation.css'
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
