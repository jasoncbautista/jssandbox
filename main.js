var jssandbox ={};

jssandbox.Libs = [
    {name: "jQuery", version: "2.1.1", src: "libs/jquery2_1_1.min.js", desc: "jQuery..."}
    , {name: "D3", version: "v3", src: "libs/d3.v3.min.js", desc: "D3..."}
    , {name: "Backbone", version: "1.1.2"
        , src: "libs/backbone_1_1_2.js", desc: "Backbone. Depends on underscore"}
    , {name: "Underscore", version: "1.7.0", src: "libs/underscore-min_1_7_0.js"
        , desc: "Underscore..."}
];

jssandbox.loadScript = function(src){
   var head= document.getElementsByTagName('head')[0];
   var script = document.createElement('script');

   script.type= 'text/javascript';
   script.src= src;
   head.appendChild(script);
};

jssandbox.showScript = function(scriptObj){
};

// TODO: figure out way to  load scripts in their own namespaces
$(function(){

    // Bind the click event to add a new script based on a url
    $("#loadExternalScript").click(function(){
        var scriptSRC = $("#scriptName").val()
        jssandbox.loadScript(scriptSRC);
    });

   var libTemplate =  _.template( $("#lib_entry").html()  ) ;

   _.each(jssandbox.Libs, function(lib){
      var libEntry = $( libTemplate(lib)  );
         libEntry.find(".clickToAdd").click(function(){
            jssandbox.loadScript(lib.src);
         });
      libEntry.appendTo($("body"));   
      libEntry.click(function(){
           console.log("loading...", lib.name);
           jssandbox.loadScript(lib.src);
      });
   });

});
