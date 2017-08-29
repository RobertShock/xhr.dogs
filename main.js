function runThisAfterDogsLoads(){
	var dogsData = JSON.parse(this.responseText).dogs;
	// console.log("dogs", dogsData);
	getBreeds(dogsData);
};

function shitBroke (){
	console.log("WHAT DID YOU DO?");
};

var myDawgs = new XMLHttpRequest;
myDawgs.addEventListener("load", runThisAfterDogsLoads);
myDawgs.addEventListener("error", shitBroke);
myDawgs.open("GET", "dogs.json");
myDawgs.send();


function getBreeds(dogs){
	// console.log("dogs array inside getBreeds", dogs);
	var myBreeds = new XMLHttpRequest;
	myBreeds.addEventListener("error", shitBroke);
	myBreeds.addEventListener("load", runThisAfterBreedsLoads);
	myBreeds.open("GET", "breeds.json");
	myBreeds.send();

		function runThisAfterBreedsLoads(){
			var breedsData = JSON.parse(this.responseText).breeds;
			// console.log("breeds", breedsData);
			// console.log("dogs next to breeds", dogs);
			combinedArray(dogs, breedsData);
		}
}

function combinedArray (dogsArray, breedsArray){
	// console.log("dogsArray", dogsArray);
	// console.log("breedsArray", breedsArray);
	// loop through dogs and look at breed_id
	dogsArray.forEach(function(dog){
		var currentBreedID = dog ["breed-id"];
		// console.log("dog breed_id", currentBreedID);
		breedsArray.forEach(function(breed){
			if(currentBreedID === breed.id){
				// console.log("one breed", breed);
				dog["dogBreed"] = breed.name;
				dog["basePrice"] = breed["base-price"];
				dog["description"] = breed.description;
				dog["finalPrice"] = dog.basePrice + dog["add-on-price"];
			}
		});
 	});
	// loop through breeds and find matching breed_id
	// make final price
		console.log("all the dogs", dogsArray);
		domString(dogsArray)
}


function domString(dogs){
	var reallyLongDomString = "";
	// usual stuff, loop through, make a string
	writeToDom(reallyLongDomString)
}

function writeToDom(strang){
	// put in the DOM;
}




// THE ORDER OF THE PAGE
// 1. XHR to dogs.json
// 2.calling helper function that sets up the XHR to breeds and it passes dogs.
// 3. put XHR breeds.json load function inside helper function
// 4. call combineArray






