function runThisAfterDogsLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
};

function runThisAfterBreedzLoads(){
	var data = JSON.parse(this.responseText).breedz;
	console.log("breedz", data);
};

function shitBroke (){
	console.log("WHAT DID YOU DO?");
};

var myDawgs = new XMLHttpRequest;
myDawgs.addEventListener("load", runThisAfterDogsLoads);
myDawgs.addEventListener("error", shitBroke);
myDawgs.open("GET", "dogs.json");
myDawgs.send();

var myBreedz = new XMLHttpRequest;
myBreedz.addEventListener("load", runThisAfterBreedsLoads);
myBreedz.addEventListener("error", stillBroke);
myBreedz.open("GET", "breeds.json");
myBreedz.send();


