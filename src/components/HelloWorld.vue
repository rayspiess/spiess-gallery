<template>

  <div class="hello">
<transition name="el-fade-in-linear">
 <div v-show="show" class="transition-show">

<cld-image publicId="drawings/2018-12-03_16-53-00-0600_urkrgd.jpg" >
  <cld-transformation flags="force_strip" width="520" crop="scale" />
</cld-image>

</div >
</transition>

<div class="image-masonry">
<masonry
  id = "masonryimages" 
  :cols="{default: 4, 1200: 3, 1000: 2, 600: 1}"
  :gutter="{default: '20px', 1200: '15px',1000: '10px'}"
  >
   <div v-for="image in imageList" v-bind:key="image.asset_id">
      <thumbnail :item="image"  />
  </div>
</masonry>
</div>

    <h1>{{ msg }}</h1>
    <p>
      A test sandbox for a Vue.js, Cloudinary, Netlify gallery<br>
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

import Thumbnail from '@/components/Thumbnail.vue'
import VueMasonry from 'vue-masonry-css'
import 'element-ui/lib/theme-chalk/base.css';

Vue.use(VueMasonry)

export default {
  name: 'HelloWorld',
    components: {
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
      max_results: 10,
      next_cursor: null,
      item: {
        index: '1',
        title: 'title', 
        category: 'cat',
        filename: 'filename',
        thumbnail: ''
      },
    }
  },
  mounted () {
    this.show = true;
    this.getImagesList();
    //this.jsonData = this.getImageListFromJSON();
  },
  methods: { 

    getImagesList: function() {
   //   let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/resources/image`;

   let baseUrl =  '/api2/image';
   let tags = '/tags/painting';
   let maxResults = 'max_results=10';
   let urlParams = '?'+maxResults;

   let url =  baseUrl + tags;

    // let url =  'https://spiess-gallery.netlify.app/.netlify/functions/images';

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

     return axios(requestObj)
        .then(response => {
          this.results = response.data;
          console.log(this.results);
          this.jsonData  = response.data.resources;
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
           console.log("finally");

        });
    },

    getImageListFromJSON: function()  {

      var jsonString = '{"resources":[{"asset_id":"fe0de4aa3f9e7e0bb9c7f92ecb24406f","public_id":"drawings/2017-12-05_16-21-16-0600_pzwwdr","format":"jpg","version":1589830886,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:41:26Z","bytes":2369961,"width":3959,"height":2116,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830886/drawings/2017-12-05_16-21-16-0600_pzwwdr.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830886/drawings/2017-12-05_16-21-16-0600_pzwwdr.jpg","metadata":{"edc7qdj4drqbzess34ac":"Flowers","ntdq5ufb450ggzu1gcjx":"ink on paper","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"drawing","a3h4lf5atjhlz7j3qola":["wflowh56qlx7z9ql8tsf"]}},{"asset_id":"9b06afcd4fa33a8a451a63cfa0edca6e","public_id":"drawings/2018-12-03_16-53-00-0600_urkrgd","format":"jpg","version":1589830865,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:41:05Z","bytes":3611387,"width":2873,"height":2720,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830865/drawings/2018-12-03_16-53-00-0600_urkrgd.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830865/drawings/2018-12-03_16-53-00-0600_urkrgd.jpg","metadata":{"edc7qdj4drqbzess34ac":"Flowers #2","ntdq5ufb450ggzu1gcjx":"ink on paper","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"Drawing","a3h4lf5atjhlz7j3qola":["wflowh56qlx7z9ql8tsf"]}},{"asset_id":"17b419e44d87dbb38753a56bfc9335f8","public_id":"paintings/2018-10-23_11-15-48-0500_jecesb","format":"jpg","version":1589830798,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:39:58Z","bytes":1771478,"width":2737,"height":2107,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830798/paintings/2018-10-23_11-15-48-0500_jecesb.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830798/paintings/2018-10-23_11-15-48-0500_jecesb.jpg","metadata":{"ntdq5ufb450ggzu1gcjx":"oil on canvas","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","bz7fyusjn0s6enzzlg0y":5,"fqipndld6jajuzwbzqsf":7}},{"asset_id":"376171c24152048918895f9d81c9fdff","public_id":"portraits/2019-11-05_Phil_ikeilc","format":"jpg","version":1589830769,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:39:29Z","bytes":2009408,"width":1817,"height":1938,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830769/portraits/2019-11-05_Phil_ikeilc.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830769/portraits/2019-11-05_Phil_ikeilc.jpg","metadata":{"edc7qdj4drqbzess34ac":"Phil","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"fb7221057a5540f224333bd89aebad0e","public_id":"portraits/2019-12-10_CassidyB_a5pbj8","format":"jpg","version":1589830738,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:58Z","bytes":1218362,"width":1703,"height":1378,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830738/portraits/2019-12-10_CassidyB_a5pbj8.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830738/portraits/2019-12-10_CassidyB_a5pbj8.jpg","metadata":{"edc7qdj4drqbzess34ac":"Cassidy","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"18a6b4d1a303670c2b358e4df1e1f78e","public_id":"portraits/2019-10-29_Kiersten_g0b5xg","format":"jpg","version":1589830724,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:44Z","bytes":2836902,"width":1996,"height":2436,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830724/portraits/2019-10-29_Kiersten_g0b5xg.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830724/portraits/2019-10-29_Kiersten_g0b5xg.jpg","metadata":{"edc7qdj4drqbzess34ac":"Kiersten as Medusa","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"a1ecdd0ce6f39b25d3ec0580f9688280","public_id":"portraits/2019-10-08_Phil_dyk1mv","format":"jpg","version":1589830719,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:39Z","bytes":3318216,"width":2688,"height":3753,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830719/portraits/2019-10-08_Phil_dyk1mv.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830719/portraits/2019-10-08_Phil_dyk1mv.jpg","metadata":{"edc7qdj4drqbzess34ac":"Phil","ntdq5ufb450ggzu1gcjx":"oil on canvas","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"317c2c808d88edb4ad8bcc57266a6fc3","public_id":"portraits/2019-09-24_Naveen_znzcvx","format":"jpg","version":1589830700,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:20Z","bytes":1457025,"width":2394,"height":3339,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830700/portraits/2019-09-24_Naveen_znzcvx.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830700/portraits/2019-09-24_Naveen_znzcvx.jpg","metadata":{"edc7qdj4drqbzess34ac":"Naveen","ntdq5ufb450ggzu1gcjx":"oil  on canvas","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"3c08014f4f94c695d980630033004328","public_id":"portraits/IMG_2835b_eo9g5c","format":"jpg","version":1589830655,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:37:35Z","bytes":2868874,"width":2078,"height":2326,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830655/portraits/IMG_2835b_eo9g5c.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830655/portraits/IMG_2835b_eo9g5c.jpg","metadata":{"edc7qdj4drqbzess34ac":"Mira","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"dd10c72359a0d8f232bb3bdae23a5128","public_id":"portraits/2018-12-04_RichardB_u3ykev","format":"jpg","version":1589830617,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:36:57Z","bytes":299634,"width":1013,"height":2293,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830617/portraits/2018-12-04_RichardB_u3ykev.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830617/portraits/2018-12-04_RichardB_u3ykev.jpg","metadata":{"edc7qdj4drqbzess34ac":"Richard","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"e0993216aa9539863cdc4c383562f54e","public_id":"portraits/IMG_1914_cfdkjr","format":"jpg","version":1589830567,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:36:07Z","bytes":892230,"width":2635,"height":2147,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830567/portraits/IMG_1914_cfdkjr.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830567/portraits/IMG_1914_cfdkjr.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"8a2edb3b893056cb4ca47a2ada54a708","public_id":"portraits/IMG_1034b_dcdhf3","format":"jpg","version":1589830540,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:35:40Z","bytes":2397450,"width":2464,"height":2512,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830540/portraits/IMG_1034b_dcdhf3.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830540/portraits/IMG_1034b_dcdhf3.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"070cf3b5e02f1ee0ad35aad924abaedd","public_id":"portraits/IMG_0959_ffls8g","format":"jpg","version":1589830503,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:35:03Z","bytes":2241184,"width":1884,"height":2343,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830503/portraits/IMG_0959_ffls8g.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830503/portraits/IMG_0959_ffls8g.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"9f8df096142ebacc668eaafcfb944f07","public_id":"portraits/IMG_0993_ogsvhl","format":"tiff","version":1589830469,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:34:29Z","bytes":5048972,"width":2223,"height":1671,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830469/portraits/IMG_0993_ogsvhl.tiff","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830469/portraits/IMG_0993_ogsvhl.tiff","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"ff6971a2dc3f5e75e5749a97b838ed50","public_id":"portraits/IMG_1662_iz2nvr","format":"jpg","version":1589830412,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:33:32Z","bytes":1265007,"width":1428,"height":1791,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830412/portraits/IMG_1662_iz2nvr.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830412/portraits/IMG_1662_iz2nvr.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"d0f929b553a468094db08843fc6e4968","public_id":"portraits/IMG_1485b_u8rc7q","format":"jpg","version":1589830401,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:33:21Z","bytes":2236201,"width":1840,"height":2529,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830401/portraits/IMG_1485b_u8rc7q.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830401/portraits/IMG_1485b_u8rc7q.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"56538bdf295875fef7dacd309a247860","public_id":"paintings/DSCF3581_hxvydl","format":"jpg","version":1589830345,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:32:25Z","bytes":449912,"width":1674,"height":1410,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830345/paintings/DSCF3581_hxvydl.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830345/paintings/DSCF3581_hxvydl.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"8d94dae43cc8162de860ddce60658635","public_id":"paintings/DSCF3640b_c4k2rf","format":"jpg","version":1589830333,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:32:13Z","bytes":390423,"width":1226,"height":986,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830333/paintings/DSCF3640b_c4k2rf.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830333/paintings/DSCF3640b_c4k2rf.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"7c449466d9803cd01123462fcf0c0cc0","public_id":"paintings/DSCF3601_xvfxxd","format":"jpg","version":1589830305,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:31:45Z","bytes":428165,"width":1298,"height":1273,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830305/paintings/DSCF3601_xvfxxd.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830305/paintings/DSCF3601_xvfxxd.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"7cef4c811edbfc18492da67960363586","public_id":"paintings/DSCF3592_mpio59","format":"jpg","version":1589830298,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:31:38Z","bytes":266581,"width":1070,"height":1070,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830298/paintings/DSCF3592_mpio59.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830298/paintings/DSCF3592_mpio59.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}}],"next_cursor":"b460504e77df6bdbf4f5b705c572670745581db7122e7641e373431c0377e45e"}';    

      var jsonObject = JSON.parse(jsonString);
      this.showMasonry = true;

      return jsonObject.resources;
    }
  },
  computed: { 
    imageList: function() {
        //let thisDoc = this;

        var image_array = this.jsonData;
        // var image_array = []
        
        image_array.filter(function (item) {

          item.index = '1';
          item.title = item.metadata.edc7qdj4drqbzess34ac;
          item.category = item.metadata.wwkoznngvyehgg3je78w;
          item.filename = 'filename';
          item.thumbnail = '';
/*
        if (thisDoc.category=="all") {
           return item;
        }
  */
        })
        // sort 
        .sort(function (a, b) {
          return a.title < b.title ? -1 : 1;
        });
        return image_array;
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
    padding-top: 20px;
    background-color: #eaeaea;
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
