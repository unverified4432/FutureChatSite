/*jslint browser: true*/
/*global $, jQuery, alert*/


$("document").ready(function() {
   var texts = ["News", "Here"];
   var i = 0;
    (function runIt() {
      i++;
      $('#original').fadeOut(1000, function(){
        $('#original').html(texts[i % texts.length]);
        $('#original').fadeIn(1000, function(){
          runIt()
        });
      });
    }());
});