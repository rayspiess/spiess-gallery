<template>

<div style="height: 300px;">
  <!--
    <div class="info" style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    -->
    <l-map
      ref="map"  
     :options="{zoomControl:false, boxZoom: false, minZoom:16.5,maxZoom:16.5 }"
      style="height: 80%; width: 95%; margin: 0 auto;"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>

   <div v-for="image in imagelist" v-bind:key="image.asset_id">
     <l-marker :lat-lng="image.latlng" >

<l-icon
    :options="{iconAnchor:   [22, 94], popupAnchor:  [-3, -76]}"
    :icon-anchor="staticAnchor"
    :class-name="image.class">
   <!-- <div class="headline">{{ customText }}</div>  -->
    <i class="el-icon-location" style="font-size:32px"></i>
</l-icon>

<!--
       <LIcon
          :options="{
            iconUrl:      '/marker-icon-black.png',
            shadowUrl:    '/marker-shadow.png',
            iconSize:     [25, 41], // size of the icon
            shadowSize:   [25, 41], // size of the shadow
            iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
            shadowAnchor: [4, 62],  // the same for the shadow
            popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
          }"/>
          -->

        <l-popup  :options="{ permanent: false, interactive: true }">
          <div @click="innerClick(image.public_id)">
         <!--   {{image.title}} -->
            <p v-show="showParagraph"> 
              <img :src="image.url" style="width:120px"/> 
            </p>
          </div>
        </l-popup>
      </l-marker>
  </div>

    </l-map>
  </div>

</template>
<script>

//  https://4columns.org/d-souza-aruna/lorna-simpson

import 'element-ui/lib/theme-chalk/base.css';
import router from '@/router'
import { latLng } from "leaflet";
//import {LMap, LTileLayer, LMarker, LTooltip } from 'vue2-leaflet';
import {LMap, LTileLayer, LMarker, LIcon, LPopup } from 'vue2-leaflet';
import { Icon } from 'leaflet';

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

export default {
  name: 'Map',
  components: {
      LMap,
      LTileLayer,
      LMarker,
      LIcon, 
      LPopup,
     // LTooltip
   //   imagesizes: Imagesizes
    },
  props: {
    images: Array,
    selectedImageID: String
  }, 
  data () {
    // convert to  decimal - https://www.fcc.gov/media/radio/dms-decimal
    return {
      url:  'https://api.mapbox.com/styles/v1/mapbox/light-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmhzcGllc3MiLCJhIjoiY2owaW9kcmFuMDB4NTJ3dGo4MDVhdW45diJ9.EG83GRffs4CjPZ_GiYXotw',
      zoom: 16.5,
      center: [43.074753, -89.391754],
      withPopup: latLng(43.074593, -89.392564),
      //withTooltip: latLng(43.071592,  -89.405253),
      showParagraph: true,
      bounds: null,
      blackicon : null,
       staticAnchor: [16, 37],
      customText: 'Foobar',
    }
  },
  mounted () {

  },
  methods: { 
     zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
       console.log("centerUpdated: " + JSON.stringify(center) );
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    },
    innerClick(public_id) {
      
    this.$emit('changeimageid', public_id);

      this.imagelist.filter(function (item) {

          if (typeof public_id != "undefined") {

          if (item.public_id == public_id) {
            item.class = 'hero';  
          } 
          else {
            item.class = '';
          }

          }
      })


     this.centerUpdated({"lat":43.07474667019842,"lng":-89.39293594576539});

     router.push({ path: '/mural/' +  public_id  })
     // alert("Click!");
    }
  },
  computed: { 
    imagelist: function() {
      //let thisDoc = this;

      var image_array = this.images;

      image_array.filter(function (item) {

          if (typeof item.lat != "undefined") {

            let latNum = Number(item.lat);
            let lngNum = Number(item.lng);

             item.latlng = latLng(latNum, -lngNum);
          }
          if (item.selected) {
            item.class = 'hero';  
          } 
          else {
            item.class = '';
          }
      })
      return image_array;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

   .hero i {
     color: #c5050c;
   }

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