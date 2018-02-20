//Globals
var liquid = {
	nonVeg: ["32 ounce Chicken Broth", "32 ounce Beef Broth", "32 ounce Pork Broth", "32 ounce Bone Broth", "32 ounce Turkey Broth"],
	veg: ["32 ounce Vegatable Broth", "32 ounce Coconut Broth", "32 ounce Umami Broth", "32 ounce Tomato Broth", "32 ounce Onion and Garlic Broth"]
};
var protein = {
	nonVeg: ["1 lb Chicken", "1 lb Beef", "1 lb Pork", "1 lb Turkey", "1 lb Veal"],
	veg: ["16 ounce Black Beans", "16 ounce Pinto Beans", "16 ounce Lentils", "16 ounce Kidney Beans", "16 ounce Navy Beans"],
};
var vegetables =
	["1.5 cup tomatoes, 1.5 cup chopped chiles, 1.5 cup bell peppers, 1.5 cup corn, 1.5 cup potatoes",
    "1.5 cup sweet potatoes, 1.5 cup pumpkin, 1.5 cup parsley, 1.5 cup onion, 1.5 cup corn",
    "1.5 cup onion, 1.5 cup carrot, 1.5 cup celery, 1.5 cup zucchini, 1.5 cup potatoes",
    "1.5 cup onion, 1.5 cup kale, 1.5 cup basil, 1.5 cup tomatoes, 1.5 cup potatoes",
    "1.5 cup sweet potatoes, 1.5 cup carrot, 1.5 cup onion, 1.5 cup celery, 1.5 cup kale"];

var spices=[
"salt and pepper to taste, 2 tsp curry powder, 2 tsp chili powder, 2 tsp chives, 2 tsp coriander",
"salt and pepper to taste, 2tsp paprika, 2 tsp chives, 2 tsp cumin, 2 tsp garlic powder",
"salt and pepper to taste, 2 tsp ginger, 2 tsp soy sauce, 2 tsp onion powder, 2 tsp garlic powder",
"salt and pepper to taste, 2 tsp chili powder, 2 tsp lemon grass, 2 tsp sumac, 2 tsp cumin, 2 tsp garlic powder",
"salt and pepper to taste, 2 tsp chili powder, 2 tsp five spice, 2 tsp cumin, 2 tsp jalapeno powder, 2 tsp garlic powder"];

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
