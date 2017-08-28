
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
