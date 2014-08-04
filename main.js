
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



$(function){
    $("#loadExternalScript").click(function(){
        var scriptSRC = $("#scriptName").val()
        jssandbox.loadScript(scriptSRC);
    });

   var libTemplate =  _.template( $("#lib_entry")  ) ;
   
   _.each(jssandbox.Libs, function(lib){
      var libEntry = $( libTemplate(lib)  );
      
         libEntry.find(".clickToAdd").click(function(){
            jssandbox.loadScript(lib.src);
         });
      libEntry.appendTo($("body"));   
   });
   });
});
