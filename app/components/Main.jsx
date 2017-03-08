var React=require('react');
var {Link,IndexLink}=require('react-router');

var Nav=require('Nav');

var Main=React.createClass({
	getInitialState:function() {
	  return{
		  name:'kk'
	    }
	},
	search:function(e){
      e.preventDefault();
      alert('hello hamza');
	},
	handleChange:function(e){
	   e.preventDefault();
	   var text=this.refs.text.value;
       this.setState({
        	name:text
       })
	},
	render:function(){
		var nam=this.state.name;
		return(
            <div>
                 <div className='top-bar'>	
				<div className='top-bar-left'>
				   <ul className='menu'>
				     <li className='menu-text'>React weather app</li>
				     <li>
				    	<IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold'}} >accueil</IndexLink>
				     </li>
				     <li>
				    	<Link to='/weather' activeClassName='active' activeStyle={{fontWeight:'bold'}} >getWeather</Link>
				    	</li>
				   </ul>
				    </div>
                <div className='top-bar-right'>
				    <form onSubmit={this.search}>
				    	<ul className='menu'>
				    		<li>
				    			<input type='search' onChange={this.handleChange} placeholder='search weather' ref='text'/>
				    		</li>
				    		<li>
				    			<input type='submit' className='button' value='get Weather'/>
				    		</li>
				    	</ul>
				    </form>	
				</div>
			  </div><br/>
			<div className='row'>		   
			   <div className='columns medium-6  large-4 small-centered'>
			    	 {this.props.children}
			   </div>
              
			    
			</div>
        </div>
		)
	}
})


module.exports=Main;

		
					 