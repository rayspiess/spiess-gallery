module.exports = {
  //https://res.cloudinary.com/<cloudname>/image/fetch/https://<username>:<password>@<url>

   //var url  =  'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image';
   // var = 'http://jsonplaceholder.typicode.com/';

   // 917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto
   // v1_1/spiess-co/resources/image'
   // v1_1/spiess-co/resources/image'

    devServer: {
      proxy: {
        '/api': {
          target: 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com',
         // changeOrigin: true,
         // target: 'http://jsonplaceholder.typicode.com/',
         // secure: false,
          pathRewrite: {
           '^/api': '',
         },
        },
                '/api2': {
          target: 'https://api.cloudinary.com',
         // changeOrigin: true,
         // target: 'http://jsonplaceholder.typicode.com/',
         // secure: false,
          pathRewrite: {
           '^/api2': '',
         },
        },

      },
    },
    
  }