import Vue from 'vue'
import App from './App'

// 整体框架
Vue.config.debug = true;
Vue.config.devtools = true;

//滤镜
import filters from './filters'

Object.keys(filters).forEach(function(k) {
  Vue.filter(k, filters[k]);
});

//指令
import directives from './directives'
Object.keys(directives).forEach(function(k) {
  Vue.directive(k, directives[k]);
});



//路由
import Router from 'vue-router'
import routeMap from './router.js'
Vue.use(Router);

var router=new Router();
routeMap(router);

router.redirect({
//  '*':'/query'
});

router.start(App, 'app');



