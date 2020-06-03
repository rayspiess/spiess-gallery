<template>
  <el-container>
  <el-main>
   <el-row>
     <el-col :span="24"><div class="grid-content bg-purple-dark">
     <Carousel/> 
     </div>
     </el-col>
  </el-row>
  </el-main>
</el-container>
</template>
<script>

//import Vue from 'vue'
//import ControlPanel from '@/components/ControlPanel.vue'
//import Carousel from '@/components/Carousel2.vue'

//Vue.use(VueMasonry)

export default {
  name: 'home',
  components: {
   //Carousel,
   // ControlPanel, 
  },
    props: {
      categoryx: String
  },
  data() {
      return {
        item: {
          title: "worktitle", 
          category: "category"

        },
        activeIndex: '1',
      };
    },
  computed: { 
  }
}
</script>

<style scoped>

.home .bio {
   margin: 1.5rem;
}

.home .bio p.p1 {
   font-size: 1.4rem;
}

.home .bio ul.p1 {
   font-size: 1.4rem;
}

.home .bio p.p2 {
   font-size: 1.0rem;
}

.transition-box {
    background-color: #409EFF;
  }

 .el-header { padding: 0 6px}

 .el-main { padding: 0 6px}

</style>