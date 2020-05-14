<template>
  <div id="app">


<cld-image publicId="lunaPainting2_bhc0vs.jpg" >
  <cld-transformation width="633" crop="scale" flags="force_strip"/>
</cld-image>


    
    <HelloWorld msg="SpiessCo Sandbox"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//import snapPhoto from './components/snapPhoto.vue'
//import CloudinaryUpload from "./components/CloudinaryUpload";
//import UploadWidget from './components/UploadWidget.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, 
   // snapPhoto, 
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
