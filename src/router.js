import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'

Vue.use(Router)

/*
const ImageUrl = {
  template: '<div>User {{ $route.params.id }}</div>'
}
*/

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: function(resolve) {
        require(['./views/Home.vue'], resolve);
      }
    },
    {
      path: '/work',
      name: 'home',
      component: function(resolve) {
        require(['./views/Home.vue'], resolve);
      }
    },
    
      { 
      // gallery/2019/06/2019-04-02_14-31-57-0500.jpg
      path: '/mural/blm/:id', 
      component: function(resolve) {
        require(['./App.vue'], resolve);

      //  this.$store.dispatch('changeCategory', "craft");
      //  console.log( this.$store.state.category );

      },
       props: (route) => ({ category: "all", muralid: route.params.id }) 
    },   
      
  ]
})
