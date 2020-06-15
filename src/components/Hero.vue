<template>
  <div class="hero">

    <el-row type="flex" class="row-bg" justify="center">

    <el-col :span="12" style="background:#eaeaea;" >
    <transition name="el-fade-in-linear">
    <div v-show="show" class="transition-show">

<cld-image :publicId="imageId" >
  <cld-transformation flags="force_strip" width="420" crop="scale" />
</cld-image>

    </div >
  </transition>
    </el-col>

  <el-col :span="12" style="background:#eaeafa;" >
    <h2>{{tile}}</h2>
    <p>Artist: {{artist}}<br/>
    Address: {{address}}
    </p>
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
    imageId: String
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