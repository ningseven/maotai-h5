import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import "lib-flexible/flexible";

import '@/assets/iconfont/iconfont.css'
// import iconfont from '@/assets/iconfont/iconfont.css'
// Vue.use(iconfont)
Vue.use(Vant);
Vue.config.productionTip = false;
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");