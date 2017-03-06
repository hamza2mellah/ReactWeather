var React=require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage')
var OpenWeatherMap=require('OpenWeatherMap');


var Weather=React.createClass({
	getInitialState:function() {
	 return{
		 cityName:'casablanca',
		 temp:'',
		 isLoading:false
	   }
	},
    handleData:function(city){
    	this.setState({
    		isLoading:true
    	});
    	
       OpenWeatherMap.getTemp(city).then((temp)=>{      	
       	this.setState({
       		cityName:city,
       		temp:temp,
       		isLoading:false
       	})
       },(errMessage)=>{
       	alert(errMessage);
       })   
    },
	render:function(){

		var {cityName,temp,isLoading}=this.state;        
		function delta(){
			if(isLoading){
               return <h1>fetching data ....</h1>
			}
			else if (cityName && temp) {
				return <WeatherMessage city={cityName} temp={temp}/> 
			}
		}
		return(<div>
		    	<WeatherForm onSubmitData={this.handleData}/>
                {delta()}
		      </div>
               
		)
	}
});
module.exports=Weather;