<template>
  <div class="hello">

<cld-image publicId="drawings/2018-12-03_16-53-00-0600_urkrgd.jpg" >
  <cld-transformation flags="force_strip" width="520" crop="scale" />
</cld-image>

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
      info: null,
      jsonData: [],
      item: {
        index: '1',
        title: 'title', 
        category: 'cat',
        filename: 'filename',
        thumbnail: ''
      },
      apiKey: '917975234378397',
      apiSecret: 'FoqQCqQzluD9tI7QZri0Dt_cTto',
      cloudName: 'spiess-co',
      formData: null
    }
  },
  mounted () {
    // axios
     // .get('https://api.coindesk.com/v1/bpi/currentprice.json')
     // .then(response => (this.info = response))

    this.getImagesList();


    //this.jsonData = this.loadJson();
  },
  methods: { 

    getFoo: function() {
      
    },

    getImagesList: function() {

   //   let cloudinaryUploadURL = `https://api.cloudinary.com/v1_1/${this.cloudName}/resources/image`;
    //  this.formData = new FormData();

     var requestObj = {
    'method': 'GET',
    'url': '/api2',
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

    getImagesListX: function() {

      //https://<API_KEY>:<API_SECRET>@api.cloudinary.com/v1_1/<CLOUD_NAME>/resources/image

      //var url  = "https://" +  this.apiKey + ":" +  this.apiSecret + "@api.cloudinary.com/v1_1/" +  this.cloudName + "/resources/image";
      //var url  = 'https://api.coindesk.com/v1/bpi/currentprice.json';
      
     // var url  = 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image';
      //var url  = '/api';
      var url  = '/api';

      console.log(url);

      return axios
      .get(url) 
      .then(response => {
        (this.info = response)
      })
      .catch(e => {
        //this.errors.push(e)
        console.log("axios error: " + e);
      })

    },

    loadJson: function()  {
     
      // var jsonString = '{"resources":[{"asset_id":"fe0de4aa3f9e7e0bb9c7f92ecb24406f","public_id":"drawings/2017-12-05_16-21-16-0600_pzwwdr","format":"jpg","version":1589830886,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:41:26Z","bytes":2369961,"width":3959,"height":2116,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830886/drawings/2017-12-05_16-21-16-0600_pzwwdr.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830886/drawings/2017-12-05_16-21-16-0600_pzwwdr.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"9b06afcd4fa33a8a451a63cfa0edca6e","public_id":"drawings/2018-12-03_16-53-00-0600_urkrgd","format":"jpg","version":1589830865,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:41:05Z","bytes":3611387,"width":2873,"height":2720,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830865/drawings/2018-12-03_16-53-00-0600_urkrgd.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830865/drawings/2018-12-03_16-53-00-0600_urkrgd.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"17b419e44d87dbb38753a56bfc9335f8","public_id":"paintings/2018-10-23_11-15-48-0500_jecesb","format":"jpg","version":1589830798,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:39:58Z","bytes":1771478,"width":2737,"height":2107,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830798/paintings/2018-10-23_11-15-48-0500_jecesb.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830798/paintings/2018-10-23_11-15-48-0500_jecesb.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"376171c24152048918895f9d81c9fdff","public_id":"portraits/2019-11-05_Phil_ikeilc","format":"jpg","version":1589830769,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:39:29Z","bytes":2009408,"width":1817,"height":1938,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830769/portraits/2019-11-05_Phil_ikeilc.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830769/portraits/2019-11-05_Phil_ikeilc.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"fb7221057a5540f224333bd89aebad0e","public_id":"portraits/2019-12-10_CassidyB_a5pbj8","format":"jpg","version":1589830738,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:58Z","bytes":1218362,"width":1703,"height":1378,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830738/portraits/2019-12-10_CassidyB_a5pbj8.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830738/portraits/2019-12-10_CassidyB_a5pbj8.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"18a6b4d1a303670c2b358e4df1e1f78e","public_id":"portraits/2019-10-29_Kiersten_g0b5xg","format":"jpg","version":1589830724,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:44Z","bytes":2836902,"width":1996,"height":2436,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830724/portraits/2019-10-29_Kiersten_g0b5xg.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830724/portraits/2019-10-29_Kiersten_g0b5xg.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"a1ecdd0ce6f39b25d3ec0580f9688280","public_id":"portraits/2019-10-08_Phil_dyk1mv","format":"jpg","version":1589830719,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:39Z","bytes":3318216,"width":2688,"height":3753,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830719/portraits/2019-10-08_Phil_dyk1mv.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830719/portraits/2019-10-08_Phil_dyk1mv.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"317c2c808d88edb4ad8bcc57266a6fc3","public_id":"portraits/2019-09-24_Naveen_znzcvx","format":"jpg","version":1589830700,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:20Z","bytes":1457025,"width":2394,"height":3339,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830700/portraits/2019-09-24_Naveen_znzcvx.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830700/portraits/2019-09-24_Naveen_znzcvx.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"3c08014f4f94c695d980630033004328","public_id":"portraits/IMG_2835b_eo9g5c","format":"jpg","version":1589830655,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:37:35Z","bytes":2868874,"width":2078,"height":2326,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830655/portraits/IMG_2835b_eo9g5c.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830655/portraits/IMG_2835b_eo9g5c.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}},{"asset_id":"ab9bb886a208ef5d57902a2a66307f3d","public_id":"portraits/IMG_2830_hrsoox","format":"jpg","version":1589830651,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:37:31Z","bytes":1726103,"width":2219,"height":2581,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830651/portraits/IMG_2830_hrsoox.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830651/portraits/IMG_2830_hrsoox.jpg","metadata":{"skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist"}}],"next_cursor":"67d95a3aeb8ed9b0d273fc90eebb837db2552da98a72400077a1953437439210"}';
      
       var jsonString = '{"resources":[{"asset_id":"fe0de4aa3f9e7e0bb9c7f92ecb24406f","public_id":"drawings/2017-12-05_16-21-16-0600_pzwwdr","format":"jpg","version":1589830886,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:41:26Z","bytes":2369961,"width":3959,"height":2116,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830886/drawings/2017-12-05_16-21-16-0600_pzwwdr.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830886/drawings/2017-12-05_16-21-16-0600_pzwwdr.jpg","metadata":{"edc7qdj4drqbzess34ac":"Flowers","ntdq5ufb450ggzu1gcjx":"ink on paper","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"drawing","a3h4lf5atjhlz7j3qola":["wflowh56qlx7z9ql8tsf"]}},{"asset_id":"9b06afcd4fa33a8a451a63cfa0edca6e","public_id":"drawings/2018-12-03_16-53-00-0600_urkrgd","format":"jpg","version":1589830865,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:41:05Z","bytes":3611387,"width":2873,"height":2720,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830865/drawings/2018-12-03_16-53-00-0600_urkrgd.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830865/drawings/2018-12-03_16-53-00-0600_urkrgd.jpg","metadata":{"edc7qdj4drqbzess34ac":"Flowers #2","ntdq5ufb450ggzu1gcjx":"ink on paper","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"Drawing","a3h4lf5atjhlz7j3qola":["wflowh56qlx7z9ql8tsf"]}},{"asset_id":"17b419e44d87dbb38753a56bfc9335f8","public_id":"paintings/2018-10-23_11-15-48-0500_jecesb","format":"jpg","version":1589830798,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:39:58Z","bytes":1771478,"width":2737,"height":2107,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830798/paintings/2018-10-23_11-15-48-0500_jecesb.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830798/paintings/2018-10-23_11-15-48-0500_jecesb.jpg","metadata":{"ntdq5ufb450ggzu1gcjx":"oil on canvas","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","bz7fyusjn0s6enzzlg0y":5,"fqipndld6jajuzwbzqsf":7}},{"asset_id":"376171c24152048918895f9d81c9fdff","public_id":"portraits/2019-11-05_Phil_ikeilc","format":"jpg","version":1589830769,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:39:29Z","bytes":2009408,"width":1817,"height":1938,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830769/portraits/2019-11-05_Phil_ikeilc.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830769/portraits/2019-11-05_Phil_ikeilc.jpg","metadata":{"edc7qdj4drqbzess34ac":"Phil","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"fb7221057a5540f224333bd89aebad0e","public_id":"portraits/2019-12-10_CassidyB_a5pbj8","format":"jpg","version":1589830738,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:58Z","bytes":1218362,"width":1703,"height":1378,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830738/portraits/2019-12-10_CassidyB_a5pbj8.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830738/portraits/2019-12-10_CassidyB_a5pbj8.jpg","metadata":{"edc7qdj4drqbzess34ac":"Cassidy","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"18a6b4d1a303670c2b358e4df1e1f78e","public_id":"portraits/2019-10-29_Kiersten_g0b5xg","format":"jpg","version":1589830724,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:44Z","bytes":2836902,"width":1996,"height":2436,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830724/portraits/2019-10-29_Kiersten_g0b5xg.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830724/portraits/2019-10-29_Kiersten_g0b5xg.jpg","metadata":{"edc7qdj4drqbzess34ac":"Kiersten as Medusa","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"a1ecdd0ce6f39b25d3ec0580f9688280","public_id":"portraits/2019-10-08_Phil_dyk1mv","format":"jpg","version":1589830719,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:39Z","bytes":3318216,"width":2688,"height":3753,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830719/portraits/2019-10-08_Phil_dyk1mv.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830719/portraits/2019-10-08_Phil_dyk1mv.jpg","metadata":{"edc7qdj4drqbzess34ac":"Phil","ntdq5ufb450ggzu1gcjx":"oil on canvas","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"317c2c808d88edb4ad8bcc57266a6fc3","public_id":"portraits/2019-09-24_Naveen_znzcvx","format":"jpg","version":1589830700,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:38:20Z","bytes":1457025,"width":2394,"height":3339,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830700/portraits/2019-09-24_Naveen_znzcvx.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830700/portraits/2019-09-24_Naveen_znzcvx.jpg","metadata":{"edc7qdj4drqbzess34ac":"Naveen","ntdq5ufb450ggzu1gcjx":"oil  on canvas","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"3c08014f4f94c695d980630033004328","public_id":"portraits/IMG_2835b_eo9g5c","format":"jpg","version":1589830655,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:37:35Z","bytes":2868874,"width":2078,"height":2326,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830655/portraits/IMG_2835b_eo9g5c.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830655/portraits/IMG_2835b_eo9g5c.jpg","metadata":{"edc7qdj4drqbzess34ac":"Mira","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by arrtist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}},{"asset_id":"dd10c72359a0d8f232bb3bdae23a5128","public_id":"portraits/2018-12-04_RichardB_u3ykev","format":"jpg","version":1589830617,"resource_type":"image","type":"upload","created_at":"2020-05-18T19:36:57Z","bytes":299634,"width":1013,"height":2293,"access_mode":"public","url":"http://res.cloudinary.com/spiess-co/image/upload/v1589830617/portraits/2018-12-04_RichardB_u3ykev.jpg","secure_url":"https://res.cloudinary.com/spiess-co/image/upload/v1589830617/portraits/2018-12-04_RichardB_u3ykev.jpg","metadata":{"edc7qdj4drqbzess34ac":"Richard","ntdq5ufb450ggzu1gcjx":"oil on board","skngunebikftmllnmwjl":"Ray Spiess","tmoq5asd3ufnglbn7vdz":"Reserved by artist","wwkoznngvyehgg3je78w":"painting","a3h4lf5atjhlz7j3qola":["d90rshs6rcqi9plcs4tp"]}}],"next_cursor":"a680bdc64dde41bb23d1cf49861905b44f5ef8c8ef7662494467087bbc998ff2"}';
    
      var jsonObject = JSON.parse(jsonString);
      
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
