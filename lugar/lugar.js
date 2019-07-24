const axios = require('axios');


const getLugarLatLng = async( dir ) => {

    const encodedUlr = encodeURI( dir );
    
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedUrl }`,
        headers: {'X-RapidAPI-Key': 'd0fcebff00mshb99b3471c42cd51p11c014jsn5d5f4254a148'}
      });
    
      const resp = await instance.get();

      if (  resp.data.Results.length === 0 ) {
          throw new Error(`No hay resultados para ${ dir }`);
      }
  
      const data      = resp.data.Results[0];
      const direccion = data.name; 
      const lat = data.lat; 
      const lng = data.lon; 

      return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}
