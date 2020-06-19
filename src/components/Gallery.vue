<template>
  <div class="gallery">
  
<Hero :imageObject="pageImage[0]" /> 
   <!--  <Hero  :images="imageList"  :selectedImageID="imageID" /> -->

  <Map :images="imageList2" v-on:changeimageid="changeImageId" />

  <ControlPanel v-on:change="controlPanelClick" />

<div class="image-masonry">
<masonry
  id = "masonryimages" 
  :cols="{default: 4, 1200: 3, 1000: 2, 600: 1}"
  :gutter="{default: '20px', 1200: '15px',1000: '10px'}"
  >
   <div v-for="image in imageList" :selectedImageID="imageID" v-bind:key="image.asset_id">
      <thumbnail :item="image"  />
  </div>
</masonry>
</div>
    <h1>{{ msg }}</h1>
    <p>
      A test/dev spot for a Vue.js, Cloudinary, Netlify gallery<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'

//import {CldContext} from "cloudinary-vue";
//import {CldContext, CldImage, CldVideo, CldTransformation, CldPoster} from 'cloudinary-vue';
//import cloudinary from 'cloudinary-core';

import Hero from '@/components/Hero.vue'
//import Hero from '@/components/HeroCarousel.vue'
import Map from '@/components/Map.vue'
import ControlPanel from '@/components/ControlPanel.vue'
import Thumbnail from '@/components/Thumbnail.vue'
import VueMasonry from 'vue-masonry-css'
import 'element-ui/lib/theme-chalk/base.css';

Vue.use(VueMasonry)

export default {
  name: 'Gallery',
    components: {
      Hero,
      Map,
      ControlPanel,
      thumbnail: Thumbnail,
   //   imagesizes: Imagesizes
    },
  props: {
    msg: String
  }, 
  data () {
    return {
      show: false,
      showMasonry:false,
      info: null,
      jsonData: [],
      jsonData2: [],
      imageList: [],
      max_results: 10,
      next_cursor: null,  
      item: {
        index: '1',
        public_id: 'blm/IMG_0534_eayqbh',
        title: 'title', 
        category: 'cat',
        lat: '',
        lon: '',
        artist: '',
        artistlink:'',
        filename: 'filename',
        thumbnail: ''
      },
    }
  },
  mounted () {
    this.show = true;
   // this.item.public_id= 'blm/' + this.$route.params.id;

  if (typeof this.$route.params.id != "undefined") {
      this.item.public_id = 'blm/' + this.$route.params.id;
  }
  
  this.getImagesList()

  /*
    .then(response => {
          this.results = response.data;
          console.log(this.results);
          this.jsonData2  = response.data.resources;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
           console.log("finally");
        });
   */

    //this.jsonData = this.getImageListFromJSON();
  },
  methods: { 

    changeImageId: function(event) {
       console.log("Gallery: changeImageId: " + event);

      if (event != undefined) {

        this.item.public_id = event;
        
      }
    },

    controlPanelClick: function(event) {

       console.log("controlPanelClick: " + event);
        this.getImagesList();
    },

    getImagesList: function() {

   //   let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/resources/image`;

    let env = "local";
    //let env = "remote";
    var url = "";

   if (env=="local") {
     // local - proxy  
     let baseUrl =  '/api2/image';
     let tags = '/tags/' + this.category +'/'; //'/tags/watercolor/';
     let maxResults = 'max_results=20';
     let urlParams = '?'+maxResults;
     //  /api2/image/tags/watercolor/?max_results=20
     url =  baseUrl + tags + urlParams;
   }
   else {
    // remote/Netlify - function
    let baseUrl =  'https://spiess-gallery.netlify.app/.netlify/functions/images';
    let tags = '?tags=' + this.category;
     //  https://spiess-gallery.netlify.app/.netlify/functions/images?tags=painting
     url =  baseUrl + tags; 
   }

   console.log(url);

    var  requestObj = {
    'method': 'GET',
    'url': url, 
    'headers': {
    'Accept': 'application/vnd.api+json',
    'api-version': '2012-02-12',
    'x-ms-version': '2017-07-29',
   // 'api_key': '',
   // 'api_secret': '',
    'Authorization': 'Basic OTE3OTc1MjM0Mzc4Mzk3OkZvcVFDcVF6bHVEOXRJN1FacmkwRHRfY1R0bw=='
     }
     };

    // var image_array = [];
    var thisDoc = this;

     return axios(requestObj)
        .then(response => {
          this.results = response.data;
          console.log(this.results);
          this.jsonData  = response.data.resources;
          return this.jsonData;
        })
         .then( function(image_data) { 

           //console.log(image_data);

           image_data.filter(function (item) {
           if (typeof item.metadata != "undefined") {
             
             // public_id:"blm/IMG_0582_qbsgbb"
             
             //console.log("image_data fetch: " + item.public_id + ' -- ' +  'blm/' + thisDoc.$route.params.id);

            item.index = '1';
            item.title = item.metadata.edc7qdj4drqbzess34ac;
            item.category = item.metadata.wwkoznngvyehgg3je78w;

            item.lat =  item.metadata.hcmz1pmgo2blx0blrjhy;
            item.lng =  item.metadata.antpxblxugydxoazub0u;

            item.artist = item.metadata.yh8utc6u2hjofqbh2lbq;
            item.artistlink = item.metadata.dikazjehcdxkutysus0r;
            item.address = item.metadata.cl6f5bpdl8ye3viqkacf

            item.filename = 'filename';
            item.thumbnail = '';

           }
          })
        // sort 
         .sort(function (a, b) {
          return a.title < b.title ? -1 : 1;
         });

         thisDoc.imageList = image_data;

         })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
           console.log("getImagesList finally");

        });
    },
  },
  computed: { 

  category: function() { 

    console.log("computed category: " + this.$store.state.category );
    return this.$store.state.category;
  },

  imageID: function() {

       if (this.$route.params.id != undefined) {
          return 'blm/' + this.$route.params.id;
       }
       else {
         return this.item.public_id;
       }
    },

  imageList2: function() {
    let thisDoc = this;
    let muralId  =  this.$route.params.id;
    console.log("muralId: " +   'blm/'  + muralId );

      var image_array = this.imageList;

      image_array.filter(function (item) {

      if (typeof item.public_id != "undefined") {
          if (item.public_id == thisDoc.item.public_id) {
            item.selected = true;  
          } 
          else {
            item.selected = false;
          }
      }
      })
      return image_array;

    },

  pageImage: function() {
     //   let thisDoc = this;
      var image_array = this.imageList2;
      let muralId  =  this.$route.params.id;

      console.log("muralId: " +   'blm/'  + muralId );
      //  blm/IMG_0582_qbsgbb

    // return image_array.filter(item => item.public_id == 'blm/'  + muralId);
      
      let filtered_array = image_array.filter(function (item) {
        // console.log("muralId: " + item.public_id  + '  -  ' + 'blm/'  +  muralId );
        return (item.public_id  ==  'blm/'  + muralId   );
        //if (item.public_id  ==  'blm/'  + muralId   ) {
        //   return item;
       // }
      });

      if (filtered_array.length > 0) {
        return filtered_array;
      }
      else {
        return [{
          artist:"",
          address:"200 block of State Street",
          title:"Black Lives Matter",
          public_id:"blm/IMG_0534_eayqbh",
          url:"http://res.cloudinary.com/spiess-co/image/upload/v1592068307/blm/IMG_0534_eayqbh.jpg"
        }]
      }
      
      // return image_array;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

  .transition-box {
  }

  .transition-box2 {
    transition-property: opacity;
    transition-duration: 3s;
  }

.thumbnail img{
  width:100% !important;
}

.image-masonry {
    padding: 8px 12px;
    background-color: #eaeaea;
    margin: 0 12px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
