import Vue from 'vue'
import App from './App.vue'

import Element from 'element-ui'
//import './element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css';

// responsive classes
import 'element-ui/lib/theme-chalk/display.css';


import Cloudinary from "cloudinary-vue";


//import {CldContext, CldImage, CldVideo, CldTransformation, CldPoster} from 'cloudinary-vue';

Vue.use(Element)

import ProgressBar from 'vuejs-progress-bar'
Vue.use(ProgressBar)

Vue.use(Cloudinary, {
  configuration: { 
    cloudName: "spiess-co",
    api_key: '917975234378397', 
    api_secret: 'FoqQCqQzluD9tI7QZri0Dt_cTto'  
  }
  //             ^ cloudinary configuration options
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
