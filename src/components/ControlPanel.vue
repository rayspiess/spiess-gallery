<template>
  <div class="control-panel">

  <el-menu
  :default-active="activeIndex"
  class="el-menu-controlpanel"
  mode="horizontal"
  @select="handleSelect"
  background-color="rgb(237, 237, 237)"
  text-color="#333333"
  active-text-color="rgb(39, 39, 39)">

  <!--  <el-menu-item index="all">all</el-menu-item> -->
  <el-menu-item index="painting">paintings</el-menu-item>
  <el-menu-item index="watercolor">watercolor</el-menu-item>
  <el-menu-item index="drawing">drawings</el-menu-item>
  <el-menu-item index="portrait">portraits</el-menu-item>
  <!--
  <el-menu-item index="sizeoptions">  <i class="el-icon-menu" :style="iconstyle"></i></el-menu-item>
  -->
<!--
<i class="el-icon-menu"></i>
  <el-menu-item index="sculpture">sculpture</el-menu-item>
  <el-menu-item index="painting"> painting</el-menu-item>
  <el-menu-item index="craft"> craft</el-menu-item>
-->

</el-menu>

   </div>
</template>
<script>

export default {
  name: 'controlpanel',
  props: {
    iconsize: String,
    item: Object,
  },
   data() {
        return {
            activeIndex: '1',
            activeName: 'first', 
            controller: {
            category: "all"
            }
        }
  },
  created() {
        console.log("controlpanel created!!");
        //this.fetchBlobs();
    },
  methods: {

    handleSelect(key) {
       // console.log(key, keyPath);
        console.log(key);

       this.$store.dispatch('changeCategory', key);
       this.$emit('change', key)
      },

      /*
     handleClick(tab, event) {
         //console.log(tab, event);
        console.log(tab);
        this.$store.dispatch('changeCategory', tab);
     //   console.log( this.$store.state.category );
       // this.$parent.$emit('clicked', tab);
      }

      */
  },
  computed: { 
     iconstyle: function() {
       if (this.iconsize=="default") {
          return "font-size:22px;";
       }
       else {
         return "font-size:16px;";
       }
        
    } 
    // overlay: function() {
       // return item.category + " " + item.url;
    //}  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  @media only screen and (max-width: 600px) {
    .el-icon-menu {
       display: none;
    }
}

.control-panel ul {
  margin: 12px 36px
}

.el-menu-controlpanel li {
    color:  #333333 !important;
        font-weight: 600;
}

.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover {
    outline: none;
    background-color: #e6e6e6 !important;
}
.el-menu--horizontal>.el-menu-item {
  height: 40px !important;
  line-height: 40px !important;
}

.el-menu-item:hover, .el-menu-item:focus {
    outline: none;
    color: #3d3d3d !important;
    background-color: #e6e6e6 !important;
}
.el-col {
    border-radius: 4px;
}
.el-row {
    background: #99a9bf;
}
</style>

