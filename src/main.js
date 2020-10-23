import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import mavonEditor from 'mavon-editor'  //引入mavon-editor 就是上面所安装的

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' // 样式文件
Vue.config.productionTip = false
Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})

hljs.highlightCode = function () {
  //自定义highlightCode方法，将只执行一次的逻辑去掉
  let blocks = document.querySelectorAll('pre code');
  [].forEach.call(blocks, hljs.highlightBlock);
};


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
