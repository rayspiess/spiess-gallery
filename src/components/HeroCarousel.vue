<template>
  <div class="hero">
    <el-row type="flex" class="row-bg" justify="center">

    <el-col :xs="24" :sm="12" :md="14" :lg="14" :xl="14"  style="background:#fafafa;" >
  
    <transition name="el-fade-in-linear">
    <div v-show="show" class="transition-show">

    <el-carousel @change="newslide"
        ref="carousel"
        height="400px" 
        trigger="click"
        :initial-index="imageindex"
        indicator-position="none" 
        :autoplay="false">
      <el-carousel-item v-for="item in imagelist" 
         
         :key="item.public_id">

      <cld-image :publicId="item.public_id" class="hero-image" >
      <cld-transformation flags="force_strip" width="420" crop="scale" />
      </cld-image>

      </el-carousel-item>
    </el-carousel>

    </div >
    </transition>

    <el-card class="box-card hidden-sm-and-up">
    <h2>{{title}}</h2>
    <p>Artist: {{artist}}<br/>
    Address: {{address}}
    </p>
    </el-card>

    </el-col>

  <el-col :xs="0" :sm="12" :md="10" :lg="10" :xl="10" class="hero-info" >

    <el-card class="box-card hidden-xs-only">
    <h2>{{title}}</h2>
    <p>Artist: {{artist}}<br/>
    Address: {{address}}
    </p>
    </el-card>
  </el-col>

  </el-row>
  </div>
</template>
<script>

//  https://4columns.org/d-souza-aruna/lorna-simpson

import 'element-ui/lib/theme-chalk/base.css';

export default {
  name: 'Hero',
    components: {
   //   imagesizes: Imagesizes
    },
  props: {
    images: Array,
  }, 
  data () {
    return {
      show: false,
      showMasonry:false,
      info: null,
      jsonData: [],
      max_results: 10,
      next_cursor: null,
      selectedImageID: "",
      selected_image_index: 0
    }
  },
  mounted () {
    this.show = true;
  },
  methods: { 

    newslide:function(event) { 
      console.log("newslide: " + event);

      console.log("newslide image: " + this.imagelist[event].public_id);

      //  console.log("newslide: " + this.imageArray[event].public_id );
     // this.$refs.carousel.setActiveItem(event);
      this.$emit('changeimageid', this.imagelist[event].public_id);
    }

  },
  computed: { 
    
    imageindex : function() {

     // this.$refs.carousel.setActiveItem(this.selected_image_index);
      return this.selected_image_index;
    },

    imagelist: function() {
      let thisDoc = this;

      var image_array = this.images;

      image_array.filter(function (item, index) {

          if (item.selected == true) {
            console.log("image: " + item + " index: " + index)
            thisDoc.$refs.carousel.setActiveItem(index);
            
            thisDoc.selectedImageID = item.public_id;
           // thisDoc.$emit('changeimageid', item.public_id);
          } 
      })

      return image_array;
    },

    public_id:function() { 
       if (typeof this.imageObject != "undefined") {
        return this.imageObject.public_id
      }
      else {
        return '';
      }
    },

    title: function() { 

           if (typeof this.imageObject != "undefined") {
      return this.imageObject.title
            }
      else {
        return '';
      }

    },
    artist: function() { 
             if (typeof this.imageObject != "undefined") {
      return this.imageObject.artist
            }
      else {
        return '';
      }
    },
    address: function() { 
       if (typeof this.imageObject != "undefined") {
      return this.imageObject.address
                  }
      else {
        return '';
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

.hero-image {
    border: solid 4px #fafafa;
    box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
    display: inline-block;
    line-height: 0;
    max-width: 100%;
    transition: box-shadow 200ms ease-out;
    border-radius: 0;
    margin-bottom: 1rem;
}

.hero-info { 
  background:#fafafa;
  text-align: left;
}

  .transition-box {
    /* */
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