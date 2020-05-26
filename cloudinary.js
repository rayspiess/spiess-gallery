import Vue from 'vue';
import Cloudinary, { CldImage,CldTransformation,CldContext }  from 'cloudinary-vue';

Vue.use(Cloudinary, {
    configuration: { 
        cloudName: 'spiess-co',
        api_key: '917975234378397', 
        api_secret: 'FoqQCqQzluD9tI7QZri0Dt_cTto'   
    },
    components: [ CldImage,CldTransformation,CldContext ]
})
