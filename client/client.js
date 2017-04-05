let Fingerprint2 = require('fingerprintjs2');
let UA = require('ua-device');


let iframe = document.createElement('iframe');
iframe.src="iframe.html";

//帆布指纹
let FingerPrint;
if(localStorage.FingerPrint){
  FingerPrint = localStorage.FingerPrint;
}else{
  new Fingerprint2().get(function(result, components){
    localStorage.FingerPrint = result;
  });
}

//首次访问时间
let SCreateTime = new Date().getTime();

//UserAgent
let UserAgent = navigator.userAgent;
let output = new UA(UserAgent);
//设备
let DevicePLA = output.device.type;    //平台
let Device = output.device.model;      //类型
let DeviceVER = undefined;             //型号不好拿

//操作系统
let OS = output.os.name;
let OSVER = output.os.version.original;

//浏览器
let Browser = output.browser.name;
let BrowserVER = output.browser.version.original;

//应用
let APPID = document.querySelector('#APPID')&&document.querySelector('#APPID').getAttribute('value');
let APPName = document.querySelector('#APPName')&&document.querySelector('#APPName').getAttribute('value');
let APPVER = document.querySelector('#APPVER')&&document.querySelector('#APPVER').getAttribute('value');

//url
let URL = location.href;

let options = {
	SCreateTime,
	FingerPrint,
	UserAgent,
	DevicePLA,
	Device,
	DeviceVER,
	OS,
	OSVER,
	Browser,
	BrowserVER,
	APPID,
	APPName,
	APPVER,
	URL
}

iframe.name = JSON.stringify(options)
iframe.style.display = 'none'; 
document.body.appendChild(iframe);