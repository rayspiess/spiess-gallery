const axios = require('axios');
exports.handler = (event, context, callback) => {

  // number to fetch 
  // tags 

  const tags = event.queryStringParameters.tags || "drawing";
  var  url;

  if ( typeof tags !== 'undefined' && tags !== '' && tags !== 'all' ) {
  //       https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image/tags/drawing
    url = 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image/tags/' + tags;
  }
  else {
    // all images
    url = 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image';
  }



   axios.get(url,  {
    headers: {
      'Authorization': 'Basic OTE3OTc1MjM0Mzc4Mzk3OkZvcVFDcVF6bHVEOXRJN1FacmkwRHRfY1R0bw=='
    }

  })
    .then((res) => {
      callback(null, {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(err);
    });
};