var axios=require('axios');

module.exports={
	getTemp:function(location){
          const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=3ea871eb35e13d0d47ec64bdc755ef01&q='+location;
          return  axios.get(OPEN_WEATHER_MAP_URL).then(function(res){
              return res.data.main.temp;
          },function(err){
             throw new Error(err);
          })
	}
};