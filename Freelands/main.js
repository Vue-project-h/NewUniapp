import Vue from 'vue'
import App from './App'
import './static/css/main.css'
import './static/css/icon.css'
import './static/css/animation.css'



Vue.config.productionTip = false
// Vue.prototype.base_url="http://localhost:3000"


Vue.prototype.base_url="http://localhost:3008/"
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
