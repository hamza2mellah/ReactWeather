var names=['hamza','mellah'];
var person={
	name:'ayoub',
	greet:function(){
		names.forEach((name)=>{
			console.log(this.name+" says hello to"+name);
		})
	}
};
person.greet();