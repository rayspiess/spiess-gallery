<template>

<div style="height: 350px;">
    <div class="info" style="height: 15%">
      <span>Center: {{ center }}</span>
      <span>Zoom: {{ zoom }}</span>
      <span>Bounds: {{ bounds }}</span>
    </div>
    <l-map
      style="height: 80%; width: 80%; margin: 0 auto;"
      :zoom="zoom"
      :center="center"
      @update:zoom="zoomUpdated"
      @update:center="centerUpdated"
      @update:bounds="boundsUpdated"
    >
      <l-tile-layer :url="url"></l-tile-layer>

     <l-marker :lat-lng="withPopup">
        <l-popup>
          <div @click="innerClick">
            I am a popup
            <p v-show="showParagraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              sed pretium nisl, ut sagittis sapien. Sed vel sollicitudin nisi.
              Donec finibus semper metus id malesuada.
            </p>
          </div>
        </l-popup>
      </l-marker>
    </l-map>
  </div>

</template>
<script>

//  https://4columns.org/d-souza-aruna/lorna-simpson

import 'element-ui/lib/theme-chalk/base.css';

import { latLng } from "leaflet";
import {LMap, LTileLayer, LMarker, LPopup } from 'vue2-leaflet';
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
      LPopup,
   //   imagesizes: Imagesizes
    },
  props: {
    msg: String
  }, 
  data () {
    return {
      url:  'https://api.mapbox.com/styles/v1/mapbox/light-v8/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoicmhzcGllc3MiLCJhIjoiY2owaW9kcmFuMDB4NTJ3dGo4MDVhdW45diJ9.EG83GRffs4CjPZ_GiYXotw',
      zoom: 16,
      center: [43.074593, -89.389564],
      withPopup: latLng(43.074593, -89.389564),
      //withTooltip: latLng(43.071592,  -89.405253),
      showParagraph: false,
      bounds: null
    }
  },
  mounted () {
  },
  methods: { 
        zoomUpdated (zoom) {
      this.zoom = zoom;
    },
    centerUpdated (center) {
      this.center = center;
    },
    boundsUpdated (bounds) {
      this.bounds = bounds;
    },
    innerClick() {
      alert("Click!");
    }
  },
  computed: { 
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