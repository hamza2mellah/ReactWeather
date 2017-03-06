var React=require('react');
var ReactDOM=require('react-dom');
var {Router,Route,IndexRoute,browserHistory}=require('react-router');
var Main=require('Main');
var Nav=require('Nav');
var Weather=require('Weather');



ReactDOM.render(
	<Router history={browserHistory}>
	   <Route path='/' component={Main}>
	   	   <IndexRoute component={Nav}/>
	   	   <Route path='Weather' component={Weather}/>
	   </Route>
    </Router>,
document.getElementById('app'));
        