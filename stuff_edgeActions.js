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

      Symbol.bindElementAction(compId, symbolName, "${_Text3}", "click", function(sym, e) {
         window.open("http://www.adobe.com", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy3}", "click", function(sym, e) {
         window.open("http://www.adobe.com", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy4}", "click", function(sym, e) {
         window.open("http://www.adobe.com", "_self");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_Text3Copy5}", "click", function(sym, e) {
         window.open("http://www.adobe.com", "_self");

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

})(jQuery, AdobeEdge, "EDGE-274924497");