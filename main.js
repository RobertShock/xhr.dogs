
function runThisAfterDogsLoads(){
	var data = JSON.parse(this.responseText).dogs;
	console.log("dogs", data);
};

function shitBroke (){
	console.log("WHAT DID YOU DO?");
};

var myDawgs = new XMLHttpRequest;
myDawgs.addEventListener("load", runThisAfterDogsLoads);
myDawgs.addEventListener("error", shitBroke);
myDawgs.open("GET", "dogs.json");
myDawgs.send();



function runThisAfterBreedsLoads(){
	var data = JSON.parse(this.responseText).breeds;
	console.log("breeds", data);
};

function stillBroke (){
	console.log("NOW WHAT?");
};

var myDawgs2 = new XMLHttpRequest;
myDawgs2.addEventListener("load", runThisAfterBreedsLoads);
myDawgs2.addEventListener("error", stillBroke);
myDawgs2.open("GET", "breeds.json");
myDawgs2.send();