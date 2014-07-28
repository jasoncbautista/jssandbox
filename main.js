
var jssandbox ={};


jssandbox.Libs = [
{name: "jQuery", version: "2.1.1", src: "jquery2_1_1.js", desc: "jQuery..."}
];



jssandbox.loadScript = function(src){

   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= src;
   head.appendChild(script);

};
