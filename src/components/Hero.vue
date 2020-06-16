<template>
  <div class="hero">
    <el-row type="flex" class="row-bg" justify="center">

    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="12"  style="background:#eaeaea;" >
  
    <transition name="el-fade-in-linear">
    <div v-show="show" class="transition-show">

    <cld-image :publicId="public_id" class="hero-image" >
      <cld-transformation flags="force_strip" width="420" crop="scale" />
    </cld-image>

    </div >
    </transition>

    <el-card class="box-card hidden-sm-and-up">
    <h2>{{title}}</h2>
    <p>Artist: {{artist}}<br/>
    Address: {{address}}
    </p>
    </el-card>


    </el-col>

  <el-col :xs="0" :sm="12" :md="12" :lg="12" :xl="12" class="hero-info" >

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
    imageObject: Object
  }, 
  data () {
    return {
      show: false,
      showMasonry:false,
      info: null,
      jsonData: [],
      max_results: 10,
      next_cursor: null,
    }
  },
  mounted () {
    this.show = true;
  },
  methods: { 

  },
  computed: { 
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

.hero-image {
    border: solid 4px #fefefe;
    box-shadow: 0 0 0 1px rgba(10, 10, 10, 0.2);
    display: inline-block;
    line-height: 0;
    max-width: 100%;
    transition: box-shadow 200ms ease-out;
    border-radius: 0;
    margin-bottom: 1rem;
}

.hero-info { 
  background:#eaeafa;
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