var React=require('react');


var WeatherMessage=({temp,city})=>{
        
		return(
          <h1>it is {temp} in {city}</h1>
		)
	
};
module.exports=WeatherMessage;