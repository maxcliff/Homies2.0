//Globals
var liquid = {
	nonVeg: ["Chicken Broth", "Beef Broth", "Pork Broth", "Bone Broth", "Turkey Broth"],
	veg: ["Vegatable Broth", "Coconut Broth", "Umami Broth", "Tomato Broth", "Onion and Garlic Broth"]
};
var protein = {
	nonVeg: ["Chicken", "Beef", "Pork", "Turkey", "Veal"],
	veg: ["Black Beans", "Pinto Beans", "Lentils", "Kidney Beans", "Navy Beans"],
};
var vegetables =
	["tomatoes, chopped chiles, bell peppers, corn, potatoes",
    "sweet potatoes, pumpkin, parsley, onion, corn",
    "onion, carrot, celery, zucchini, potatoes",
    "onion, kale, basil, tomatoes, potatoes",
    "sweet potatoes, carrot, onion, celery, kale"];

var spices=[
"salt, pepper, chili powder, chives, coriander",
"salt, pepper, paprika, chives, cumin",
"salt, pepper, ginger, oregano, chives",
"salt, pepper, chili powder, lemon grass, sumac",
"salt, pepper, chili powder, five spice, cumin"];


var recipe = [];

var title = function(){
	$(".trash").addClass("hinge");
	$(".great").hide().delay(1500).show(300);
};
$(function(){
	$(".great").hide();
	setTimeout(title, 1000);
});
// Takes in a ceiling number then returns 0 through the argument passed through.
var getRandomInt = function(max) {
	return Math.floor(Math.random() * Math.floor(max));
};

var baseGen = function() {
	//Establish variables
	var vegBool = $("#vegBox").is(":checked");
	var numPro, numLiq, totPro, totLiq;

	if (vegBool) { // checks if the user is a vegetarian then adds protein and liquid to recipe

		numPro = getRandomInt(protein.veg.length);
		numLiq = getRandomInt(liquid.veg.length);

		recipe.push(protein.veg[numPro]);
		recipe.push(liquid.veg[numLiq]);

	} else {

		totPro = protein.nonVeg.concat(protein.veg);
		totLiq = liquid.nonVeg.concat(liquid.veg);

		numPro = getRandomInt(totPro.length);
		numLiq = getRandomInt(totLiq.length);

		recipe.push(totPro[numPro]);
		recipe.push(totLiq[numLiq]);
	}

};

var vegGen = function() {

    var numVeg;

    numVeg = getRandomInt(vegetables.length);
    recipe.push(vegetables[numVeg]);

};



var spiceGen = function() {

   var numSpice;

   numSpice = getRandomInt(spices.length);

   recipe.push(spices[numSpice]);



};

var generator = function() {

	$("ul").empty();
	recipe = []; // Reset

	//Call our functions to generate random recipe
	baseGen();
	vegGen();
	spiceGen();

	//Print our recipe array to the screen
	for (var i = 0; i < recipe.length; i++) {
		var capRecipe = recipe[i].toUpperCase();
		var listSoup = "<li><a>" + capRecipe + "</a></li>";
		$("ul").append(listSoup);
	}

};
$("#gen").click(function(){
	generator();
	$(".modal").addClass("is-active");
	$(".modal").click(function(){
		$(".modal").removeClass("is-active");
	});
});
