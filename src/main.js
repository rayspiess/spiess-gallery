import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'

import Element from 'element-ui'

//import './element-variables.scss'
import 'element-ui/lib/theme-chalk/index.css';
// responsive classes
import 'element-ui/lib/theme-chalk/display.css';
import Cloudinary from "cloudinary-vue";

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

//import {CldContext, CldImage, CldVideo, CldTransformation, CldPoster} from 'cloudinary-vue';
Vue.use(Vuex)
Vue.use(Element)

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

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

export const store = new Vuex.Store({
  state: {
    count: 77,
    tags: '/tags/paintingx/',
    category: 'blm',
  //  category: 'watercolor',
    // https://www.npmjs.com/package/vue-masonry-css
    masonry: {
      sizeOption: "default",
      columns: {default: 4, 1200: 3, 1000: 2, 600: 1},
      gutter: {default: '20px', 1200: '15px',1000: '10px'}
    },
  },
  mutations: {
    /*
    mutateMasonry (state, cat) {
      if (state.masonry.sizeOption=="default") {
        state.masonry.sizeOption="small"
        state.masonry.columns = {default: 5, 1200: 4, 1000: 3, 600: 1};
        state.masonry.gutter = {default: '15px', 1200: '10px',1000: '5px'};
      }
      else 
      {
        state.masonry.sizeOption="default"
        state.masonry.columns = {default: 4, 1200: 3, 1000: 2, 600: 1};
        state.masonry.gutter = {default: '20px', 1200: '15px',1000: '10px'};
      }
      console.log("mutate masonry: " + state.masonry.sizeOption );
    },
*/

    mutateCategory (state, cat) {
      // state.image.title = img.title;
      state.category = cat;
    },

    /*
    imageset (state, img) {
      state.image.title = img.title;
      state.image.category = img.category;
      state.image.url = img.url;
    },
    increment (state, n) {
      state.count += n;
    }

    */
    
  },
  actions: {
    
    changeCategory (context,  cat) {
      if (cat=="sizeoptions") {
        console.log("changeMasonry: " + cat ); // + " " + JSON.stringify(context)
       // context.commit('mutateMasonry', cat )
      }
      else {
        console.log("changeCategory: " + cat ); // + " " + JSON.stringify(context)
         context.commit('mutateCategory', cat )
      }
    }, 
  } 
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
