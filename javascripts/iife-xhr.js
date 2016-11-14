"use strict";
function showCarnivores (carnivoreData) {
	var carns = document.getElementById("carnivores");

	carnivoreData.forEach( function(carnivore) {

		carns.innerHTML += carnivore + "<br>";
	});
		// console.log("carnivore name: ", carnivoreData);
}

function showHerbivores (herbivoreData) {
	var herbs = document.getElementById("herbivores");

	herbivoreData.forEach( function (herbivore) {

		herbs.innerHTML += herbivore + "<br>";
	});
		// console.log("herbivore name: ", herbivoreData);
}

Predator.loadCarnivores(showCarnivores);

Predator.loadHerbivores(showHerbivores);



// function outputMonkeys(monkeyData) {
//   monkeyData.forEach( function(monkey) {
//     console.log("monkey name: ", monkey );
//   });
// }

// Monkeys.getTheMonkeys(outputMonkeys);
















