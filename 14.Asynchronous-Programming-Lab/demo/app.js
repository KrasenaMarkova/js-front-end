function postData() {
    let url = 'http://localhost:3030/jsonstore/demo';
    let options = {
        method: 'post',
        headers: {'Content-Type': 'application/json' },
        body: JSON.stringify({
            msg: 'Hello, REST service!'
        })
    };

    fetch(url, options)
	   .then(onResponse)
	   .then(onData)
	   .catch(onError);
 
	   function onResponse(res) {
		//   if (!res.ok) {
		// 	 throw new Error('Request error ' + res.status);
		//   }
		 return res.json();
	   }
 
	   function onData(data) {
            console.log(data);
	   }
 
	   function onError(err) {
		  console.error(err);
	   }
}

function getData() {
    let url = 'http://localhost:3030/jsonstore/demo';

    fetch(url)
	   .then(onResponse)
	   .then(onData)
	   .catch(onError);
 
	   function onResponse(res) {
		//   if (!res.ok) {
		// 	 throw new Error('Request error ' + res.status);
		//   }
		 return res.json();
	   }
 
	   function onData(data) {
            console.log(data);
	   }
 
	   function onError(err) {
		  console.error(err);
	   }
}