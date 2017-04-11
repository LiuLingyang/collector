let fetch = require('../util/fetch');

let service = {

	add(data){
		return fetch('/rest/uuid',{
			method:'POST',
			data:data
		});
	},

	update(data){
		return fetch('/rest/verify/uuid',{
			method:'POST',
			data:data
		});
	}

}

module.exports = service;