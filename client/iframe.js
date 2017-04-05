let service = require('./util/service');


let options = JSON.parse(window.name);
if(localStorage.LSID){
	let data = {
		LSID:localStorage.LSID,
		APPID:options.APPID,
		APPName:options.APPName,
		APPVER:options.APPVER,
		URL:options.URL
	}
	service.update(data).then((result) => {
		
	})
}else{
	service.add(options).then((result) => {
		result = {
		    "LSID": "39c4c5df-4246-4948-9404-f20ec1357e0f"
		}
		localStorage.LSID = result.LSID;
	})
}

