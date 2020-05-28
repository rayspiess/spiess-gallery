const axios = require('axios');
exports.handler = (event, context, callback) => {

  const requestObj = {
    'method': 'GET',
    'url': 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image',
    'headers': {
    'Accept': 'application/vnd.api+json',
    'api-version': '2012-02-12',
    'x-ms-version': '2017-07-29',
   // 'api_key': '',
   // 'api_secret': '',
    'Authorization': 'Basic OTE3OTc1MjM0Mzc4Mzk3OkZvcVFDcVF6bHVEOXRJN1FacmkwRHRfY1R0bw=='
     }
     };

  axios({
    method: 'GET',
    url: 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image',
    headers: {
      Accept: 'application/vnd.api+json',
     // api-version: '2012-02-12',
     // x-ms-version: '2017-07-29',
      // 'api_key': '',
      // 'api_secret': '',
      Authorization: 'Basic OTE3OTc1MjM0Mzc4Mzk3OkZvcVFDcVF6bHVEOXRJN1FacmkwRHRfY1R0bw=='
     }
    })
  .then(response => {
      callback(null, {
        statusCode: 200,
        body: response.data,
      });
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      // console.log("finally");
    });
};