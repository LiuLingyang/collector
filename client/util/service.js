let fetch = require('../util/fetch');

let service = {

	add(data){
		return fetch('http://122.224.104.142:9913/rest/uuid',{
			method:'POST',
			mode: "no-cors",
			data:data
		});
	},

	update(data){
		return fetch('http://122.224.104.142:9913/rest/verify/uuid',{
			method:'POST',
			mode: "no-cors",
			data:data
		});
	}

}

module.exports = service;