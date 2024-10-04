jg = {}; // NAMESPACE

// SECTION 1

jg.dark = function()	{
	document.querySelector("body").style.backgroundColor = "rgb(19,19,19)";
	document.querySelector("*").style.color = "white";
	document.querySelector("#link-one").style.color = "white";
	document.querySelector("#link-two").style.color = "white";
	document.querySelector("#link-three").style.color = "white";
	document.querySelector("#link-four").style.color = "white";
	document.querySelector("#header").style.backgroundColor = "rgb(19,19,19)";
};

jg.light = function()	{
	document.querySelector("body").style.backgroundColor = "white";
	document.querySelector("*").style.color = "rgb(19,19,19)";
	document.querySelector("#link-one").style.color = "rgb(19,19,19)";
	document.querySelector("#link-two").style.color = "rgb(19,19,19)";
	document.querySelector("#link-three").style.color = "rgb(19,19,19)";
	document.querySelector("#link-four").style.color = "rgb(19,19,19)";
	document.querySelector("#header").style.backgroundColor = "white";
};

document.querySelector("#dark").addEventListener("click", jg.dark);
document.querySelector("#light").addEventListener("click", jg.light);

// SECTION 2

jg.next = function() {
	document.querySelector("#part-one").style.display = "none";
	document.querySelector("#part-two").style.display = "flex";
};
jg.previous = function() {
	document.querySelector("#part-one").style.display = "flex";
	document.querySelector("#part-two").style.display = "none";
};

document.querySelector("#next").addEventListener("click", jg.next);
document.querySelector("#previous").addEventListener("click", jg.previous);

// SECTION 3

jg.change = function() {
	document.querySelector("#special").style.backgroundColor = "blue";
	document.querySelector("#special").style.color = "red";
	document.querySelector("#special").style.fontSize = "32px";
};

jg.reset = function() {
	document.querySelector("#special").style.backgroundColor = "teal";
	document.querySelector("#special").style.color = "aqua";
	document.querySelector("#special").style.fontSize = "16px";
};

document.querySelector("#specialButton").addEventListener("click", jg.change);
document.querySelector("#reset").addEventListener("click", jg.reset);

// SECTION 4

jg.sendMessage = function() {
	console.log("Thank you for visiting my page!");
	document.querySelector("#confirm").style.display = "block";
};

document.querySelector("#sendMessage").addEventListener("click", jg.sendMessage);