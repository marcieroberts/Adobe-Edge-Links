/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      

      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         sym.$("<link rel='stylesheet' type='text/css' href='css/transitions.css'>").appendTo("#Stage");

      });
      //Edge binding end

      

      

      

      

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'EFFECT1'
   (function(symbolName) {   
   
   })("EFFECT1");
   //Edge symbol end:'EFFECT1'

   //=========================================================
   
   //Edge symbol: 'bracket1'
   (function(symbolName) {   
   
   })("bracket1");
   //Edge symbol end:'bracket1'

   //=========================================================
   
   //Edge symbol: 'effect5'
   (function(symbolName) {   
   
   })("effect5");
   //Edge symbol end:'effect5'

   //=========================================================
   
   //Edge symbol: 'effect4'
   (function(symbolName) {   
   
   })("effect4");
   //Edge symbol end:'effect4'

   //=========================================================
   
   //Edge symbol: 'effect3'
   (function(symbolName) {   
   
   })("effect3");
   //Edge symbol end:'effect3'

   //=========================================================
   
   //Edge symbol: 'effect2'
   (function(symbolName) {   
   
   })("effect2");
   //Edge symbol end:'effect2'

   //=========================================================
   
   //Edge symbol: 'effect1'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${_Text3}", "click", function(sym, e) {
         window.open("http://www.adobe.com", "_self");

      });
         //Edge binding end

   })("effect1");
   //Edge symbol end:'effect1'

   //=========================================================
   
   //Edge symbol: 'effect6'
   (function(symbolName) {   
   
   })("effect6");
   //Edge symbol end:'effect6'

   //=========================================================
   
   //Edge symbol: 'effect7'
   (function(symbolName) {   
   
   })("effect7");
   //Edge symbol end:'effect7'

   //=========================================================
   
   //Edge symbol: 'effect8'
   (function(symbolName) {   
   
   })("effect8");
   //Edge symbol end:'effect8'

   //=========================================================
   
   //Edge symbol: 'effect9'
   (function(symbolName) {   
   
   })("effect9");
   //Edge symbol end:'effect9'

   //=========================================================
   
   //Edge symbol: 'effect10'
   (function(symbolName) {   
   
   })("effect10");
   //Edge symbol end:'effect10'

})(jQuery, AdobeEdge, "EDGE-274924497");