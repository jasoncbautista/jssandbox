jssandbox
=========


# An extremely simple sandbox for testing out code.


var loadScript = function(src){

   var head= document.getElementsByTagName('head')[0];
   var script= document.createElement('script');
   script.type= 'text/javascript';
   script.src= 'helper.js';
   head.appendChild(script);

}
