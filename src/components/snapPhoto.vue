<template>
  <div class="about">

  <!-- <HelloAFrame/> -->

  <div><video ref="video" id="video" width="640" height="480" autoplay></video></div>
        <div><button id="snap" v-on:click="capture()">snap photo</button></div>
        <canvas ref="canvas" id="canvas" width="640" height="480"></canvas>
        <ul>
            <li v-for="c in captures" :key="c.src">
                <img v-bind:src="c" height="50" />
            </li>
        </ul>
  </div>
</template>

<script>

//

export default {
  name: 'About',
  data() {
            return {
                video: {},
                canvas: {},
                captures: []
            }
        },
 // components: {
  //  HelloAFrame
  // }

  methods: {
    capture() {
         // https://x-team.com/blog/webcam-capture-vue/
         // https://davidwalsh.name/browser-camera

        //this.canvas = this.$refs.canvas;
        //var context = this.canvas.getContext("2d").drawImage(this.video, 0, 0, 640, 480);
      //  this.captures.push(canvas.toDataURL("image/png"));

      var canvas = document.getElementById('canvas');
      var context = canvas.getContext('2d');
      var video = document.getElementById('video');

      context.drawImage(video, 0, 0, 640, 480);
      this.captures.push(canvas.toDataURL("image/png"));
    
    }
  },

  mounted() {

    /*
    this.video = this.$refs.video;
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
            this.video.src = window.URL.createObjectURL(stream);
            this.video.play();
        });
    }
    */

   var video = document.getElementById('video');
   if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
        video.srcObject = stream;
        video.play();
    });
}
}
}
</script>

<style>
.fullscreen {
  height: 100vh;
  position: relative;
}
</style>