module.exports = {

    devServer: {
      proxy: {
        '/.netlify/functions/images' : {
          target: 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resourcesimages/',
          // changeOrigin: true,
         // target: 'http://jsonplaceholder.typicode.com/',
         // secure: false,
          pathRewrite: {
            '/.netlify/functions/images' : '',
         },
        '/api2': {
          target: 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources',
          // changeOrigin: true,
         // target: 'http://jsonplaceholder.typicode.com/',
         // secure: false,
          pathRewrite: {
           '/api2': '',
         },
        },
        '/api': {
          target: 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image?max_results=20',
         // changeOrigin: true,
         // target: 'http://jsonplaceholder.typicode.com/',
         // secure: false,
          pathRewrite: {
           '/api': '',
         },
        },
        },
      },
  }