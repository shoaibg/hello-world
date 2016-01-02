
var a = 1; var b = 2; var c = 3;

(function(){
  var b = 5; var c = 6;

  (function(){
    var b = 8;
    console.log('a: ' + a + ', b: ' + b + ', c: ' + c);

    (function(){
      var a = 7; var c = 9;

      (function(){
        var a = 1; var c = 8;

      })();
    })();
  })();
})();
