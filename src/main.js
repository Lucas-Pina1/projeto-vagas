import Vue from 'vue'
import App from './App.vue'
import mitt from 'mitt'

Vue.config.productionTip = false

const emitter = mitt()

const app = new Vue({
  render: h => h(App),
}).$mount('#app')

app.config.globalProperties.emitter = emitter





