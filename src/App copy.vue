<template>
  <div id="app">

    <cl-upload class="align" />

<snap-photo />

<cld-image publicId="sample.jpg" >

 <cld-transformation width="800" height="500" gravity="south" crop="fill" />

<!-- feather mask -->
  <cld-transformation 
    width="180" height="190" 
    overlay="hexagon_feather" />
   <cld-transformation 
   y="-80" x="-150" 
   effect="cut_out" flags="layer_apply" />

<!-- face -->
   <cld-transformation overlay="testface.png" 
     width="320" height="420" 
    gravity="face" 
    flags="region_relative" 
    crop="crop" />

    <cld-transformation effect="saturation:50" />
    <cld-transformation effect="vignette" />
    
    <cld-transformation flags="layer_apply" 
    width="200" radius="max" 
    gravity="center" y="-110" x="-170" crop="scale" />

 <!-- <cld-transformation underlay="sample.jpg" effect="negate" /> -->

 <cld-transformation 
  overlay="text:arial_30:This is my picture" 
  gravity="north" 
  y="20" />
</cld-image>
    
    <HelloWorld msg="UW-Madison DoIT Sandbox"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import snapPhoto from './components/snapPhoto.vue'
import CloudinaryUpload from "./components/CloudinaryUpload";
//import UploadWidget from './components/UploadWidget.vue'

export default {
  name: 'App',
  components: {
    HelloWorld, 
    snapPhoto, 
    "cl-upload": CloudinaryUpload
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
