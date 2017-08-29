function runThisAfterDogsLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
};

function runThisAfterBreedsLoads(){
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);
};

function shitBroke (){
	console.log("WHAT DID YOU DO?");
};

var myDawgs = new XMLHttpRequest;
myDawgs.addEventListener("load", runThisAfterDogsLoads);
myDawgs.addEventListener("error", shitBroke);
myDawgs.open("GET", "dogs.json");
myDawgs.send();

var myBreeds = new XMLHttpRequest;
myBreeds.addEventListener("load", runThisAfterBreedsLoads);
myBreeds.addEventListener("error", shitBroke);
myBreeds.open("GET", "breeds.json");
myBreeds.send();

function combinedArray (){
	// loop through dogs and look at breed_id
	// loop through breeds and find matching breed_id
	// make final price
}


function domString(){
	// usual stuff, loop through, make a string
}

function writeToDom(){
	// put in the DOM;
}










