var React=require('react');
var OpenWeatherMap=require('OpenWeatherMap');

var WeatherForm=React.createClass({
   handle:function(e){
      e.preventDefault();
      var city=this.refs.city.value;
      if(city.length>0){

         this.props.onSubmitData(city);
      }
   },
	render:function(){
		return(
         <div className='row'>
         	<form onSubmit={this.handle}>
         		<input type='text' ref='city'/>
         		<button className='button expanded'>Click</button>
         	</form>
         </div>
		)
	}
});
module.exports=WeatherForm;