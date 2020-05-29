const axios = require('axios');
exports.handler = (event, context, callback) => {

  const name = event.queryStringParameters.name || "World";

  const url = 'https://917975234378397:FoqQCqQzluD9tI7QZri0Dt_cTto@api.cloudinary.com/v1_1/spiess-co/resources/image';
  //const url ='https://jsonplaceholder.typicode.com/todos/1';
  //const url ='/v1_1/spiess-co/resources/image';

   axios.get(url,  {
    headers: {
      'Authorization': 'Basic OTE3OTc1MjM0Mzc4Mzk3OkZvcVFDcVF6bHVEOXRJN1FacmkwRHRfY1R0bw=='
    }

  })
    .then((res) => {
      callback(null, {
        statusCode: 200,
        body: JSON.stringify(res.data),
      });
    })
    .catch((err) => {
      callback(err);
    });
};