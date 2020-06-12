<template>
  <div id="app">
    <!--   <Banner /> -->
      <Map /> 
    <Gallery msg="SpiessCo Sandbox"/>

  </div>
</template>

<script>

import Map from './components/Map.vue'
import Gallery from './components/Gallery.vue'
// import Banner from './components/Banner.vue'

//import CloudinaryUpload from "./components/CloudinaryUpload";
//import UploadWidget from './components/UploadWidget.vue'

export default {
  name: 'App',
  components: {
    Map,
    Gallery, 
    // Banner, 
   //"cl-upload": CloudinaryUpload
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
