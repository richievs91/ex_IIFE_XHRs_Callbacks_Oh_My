"use strict"

var Predator = (function () {
  var carnivores = [];
  var herbivores = [];

  return {
    loadCarnivores: function (callback) {
      var carnLoader = new XMLHttpRequest();
      carnLoader.open("GET", "javascripts/carnivores.json");
      carnLoader.send();

      carnLoader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText).carnivores;
        callback(carnivores);
    });

   },
    loadHerbivores: function (callback) {
    	var herbLoader = new XMLHttpRequest();
    	herbLoader.open("GET", "javascripts/herbivores.json");
    	herbLoader.send();

    	herbLoader.addEventListener("load", function () {

    	  herbivores = JSON.parse(this.responseText).herbivores;
    	  callback(herbivores);
    	});
    }
 };
     

})();






// var Monkeys = (function() {

//   return {
//     getTheMonkeys: function(callbackFn) {
//       var monkeyCall = new XMLHttpRequest();
//       monkeyCall.open("GET", "monkeys.JSON");
//       monkeyCall.send();

//       monkeyCall.addEventListener("load", function() {
//         var monkeyStuff = JSON.parse(this.responseText).monkeys;
//         callbackFn(monkeyStuff);
//       });
//     }
//   }

// })();




















