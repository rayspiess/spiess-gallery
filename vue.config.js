module.exports = {
  //https://res.cloudinary.com/<cloudname>/image/fetch/https://<username>:<password>@<url>
   //var url  =  'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image';
   // var = 'http://jsonplaceholder.typicode.com/';

    devServer: {
      proxy: {
        '^/api': {
          target: 'http://jsonplaceholder.typicode.com/',
         // changeOrigin: true,
         // target: 'http://jsonplaceholder.typicode.com/',
         // secure: false,
          pathRewrite: {
           '^/api': '',
         },
        }
      },
    },
    
  }