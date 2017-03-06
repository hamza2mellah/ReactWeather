var React=require('react');
var {Link,IndexLink}=require('react-router');

var Nav=require('Nav');

var Main=(props)=>{
		return(
				<div>	
				     <h1>BONJOUR</h1>		
					 <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}} >accueil</IndexLink>
				     <br/><br/>
					 <Link to='/weather' activeClassName='active' activeStyle={{fontWeight:'bold'}} >getWeather</Link>
					 <br/><br/>
					 {props.children}
				</div>
	         
			)
}


module.exports=Main;