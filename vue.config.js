module.exports = {
    devServer: {

// var url  = 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image';


      proxy: {
        '/api': {
          target: 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image',
          pathRewrite: {'^/api' : ''},
          secure: false
        }
      },
    },
  }