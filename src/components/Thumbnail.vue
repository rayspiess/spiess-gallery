<template>
  <div class="thumbnail foo">
    
  <transition name="fade" mode="out-in" >
    <div v-if="item.public_id">

    <el-button 
        @click.native = "open" 
        slot="reference">
          <!-- <img :src="item.url" :alt="item.category" class="thumbnail"><br/> -->
          <cld-image :publicId="item.public_id" >
          <cld-transformation width="485" crop="scale" />
          </cld-image>
        <strong>
        <p>{{item.title}}</p>
        <p class="subhead">{{item.category}}</p>
        </strong>
    </el-button>
    
    <el-dialog
      :visible.sync="centerDialogVisible"
      top="5vh"
      width="80%"
      center>
  <div class="dialog-image">

    <!--  :title="item.title" -->

    <!--
    <viewer :images="images">
      <img v-for="src in images" :src="src" :key="src">
   </viewer>
   -->
      <div v-viewer="options" class="images clearfix">
        <!--  <img v-for="src in images" :src="src" :key="src"> -->
          <cld-image :publicId="item.public_id" >
          </cld-image>
    </div>

    <span slot="footer" >
    <div class="dialog-footer-text">
    <p><a :href="'/image/' + item.rootfilename">{{item.title}}</a><p>
    <p>{{item.category}}</p>
    </div>
    <!--
    <el-button @click="centerDialogVisible = false">Cancel</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">Confirm</el-button>
    -->
  </span>
  </div>
    </el-dialog>

        </div>
  </transition>

   </div>
</template>

<script>

// button: small size image 
//

//https://www.npmjs.com/package/v-viewer

  import 'viewerjs/dist/viewer.css'
  import Viewer from 'v-viewer'
  import Vue from 'vue'
  Vue.use(Viewer)

export default {
  components: {
    //  Viewer
    },
  name: 'thumbnail',
  props: {
    item: Object,
  },
   data() {
        return {
          options: {
            "toolbar": true,
            "navbar": false,
            url: 'data-source'
          },
           visible: false,
           centerDialogVisible: false
        }
  }, 
  created() {
        console.log("thumbnail created!! " + this.item.title);
        //this.fetchBlobs();
    },
  methods: {

    open: function () {
            console.log("open image...");
/*
      let img = {
        title: this.item.title,
        category: this.item.category,
         url: this.item.rootfilename

        // url: "https://spiessimages2019.blob.core.windows.net/gallery2019/" + this.$route.params.year + "/" + this.$route.params.month  + "/" +  this.$route.params.id
      }
  */

      //this.$store.dispatch('changeImage', img);
      //console.log( this.$store.state.image.url );

      this.centerDialogVisible = true;
      this.visible = true;
    }, 
  },
  computed: { 
     overlay: function() {
        return this.item.category + " " + this.item.url;
    },
    images  () {
      // return this.$store.state.count;
          return [this.imageurl];
    },
    imageurl: function() {
     // v-viewer docs: https://github.com/mirari/v-viewer/blob/master/example/views/example/DirectiveExample.vue
       return this.item.url;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


.el-dialog--center .el-dialog__body {
    background-color: #Eae9E9;
}

.el-dialog__header {
    font-weight: 700;
    background-color: #f4f4f4;
}

.dialog-image img {
    width:100%
}

.dialog-footer {
    font-weight: 700;
    background-color: #f4f4f4;
}

.dialog-footer-text {
    margin: 40px 0;
    font-size: 16px;
    font-weight: 700;
}

.el-button:hover, .el-button:focus {
    color:#303030;
    border-color: #dedede;
    background-color: #fafafa;
}

p.subhead {
   color: #8a8a8a;
   font-weight:600;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
   margin: 0 10px;
}

lix {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.thumbnail-list {
  background-color: #9a9a9a;
}


.dialog-image {
  text-align: center;
}

.fullsize {
    border: solid 4px #fefefe;
    box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
    display: inline-block;
    line-height: 0;
    max-width: 600px;
    transition: box-shadow 200ms ease-out;
    border-radius: 0;
    margin-bottom: 1rem;
}
.thumbnailx {
    border: solid 1px #ededed;
    box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
    line-height: 0;
    max-width: 300px;
    transition: box-shadow 200ms ease-out;
    border-radius: 0;
    margin-bottom: 1rem;
}

.thumbnail {
    line-height: 0;
    width:100%;
    max-width: 300px;
    transition: box-shadow 200ms ease-out;
    margin-bottom: 1rem;
}


</style>
