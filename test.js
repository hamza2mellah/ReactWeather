
function getPromise(location){
	 return new Promise(function(resolve,reject){
         setTimeout(function(){
             resolve(70);
             reject('city not found');
        },4000);
       
	 })
	      };
  getPromise('casa').then(function(temp){	      
	      console.log('temp',temp);
	      },
	   function(err)
	      {
	       console.log('err',err)
	      }
	      )

	