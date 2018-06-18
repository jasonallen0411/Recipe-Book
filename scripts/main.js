$("#searchBtn").click(function(){
	var string = $("#searchInput").val();
	var url = "https://api.edamam.com/search?app_id=38c25904&app_key=0e9730623102e47165236bd327802907&count=10&q=" + string;

	$.getJSON(url, function(result){

		for(var i=0; i < result.hits.length; i++){
			$("#recipeArea").append('<div class="recipe"><h2>' + result.hits[i].recipe.label + "<button id='plus'> + </button>" + '</h2> <img width="300px" src="' + result.hits[i].recipe.image + '" /><ul id="recipe' + i + '"></ul></div>');
		
			for(var l=0; l < result.hits[i].recipe.ingredients.length; l++){
				$("#recipe" + i).append('<li>' + result.hits[i].recipe.ingredients[l].text + '</li>');
			}

		}

		$(".recipe").click(function(){
			$(this).toggleClass("show");
		});
	});
});

$("#pizzaBtn").click(function(){
	var url = "https://api.edamam.com/search?app_id=38c25904&app_key=0e9730623102e47165236bd327802907&count=10&q=pizza";

	$.getJSON(url, function(result){

		for(var i=0; i < result.hits.length; i++){
			$("#recipeArea").append('<div class="recipe"><h2>' + result.hits[i].recipe.label + "<button id='plus'> + </button>" + '</h2> <img width="300px" src="' + result.hits[i].recipe.image + '" /><ul id="recipe' + i + '"></ul></div>');
		
			for(var l=0; l < result.hits[i].recipe.ingredients.length; l++){
				$("#recipe" + i).append('<li>' + result.hits[i].recipe.ingredients[l].text + '</li>');
			}

		}

		$(".recipe").click(function(){
			$(this).toggleClass("show");
		});
	});
});

$("#pastaBtn").click(function(){
	var url = "https://api.edamam.com/search?app_id=38c25904&app_key=0e9730623102e47165236bd327802907&count=10&q=pasta";

	$.getJSON(url, function(result){

		for(var i=0; i < result.hits.length; i++){
			$("#recipeArea").append('<div class="recipe"><h2>' + result.hits[i].recipe.label + "<button id='plus'> + </button>" + '</h2> <img width="300px" src="' + result.hits[i].recipe.image + '" /><ul id="recipe' + i + '"></ul></div>');
		
			for(var l=0; l < result.hits[i].recipe.ingredients.length; l++){
				$("#recipe" + i).append('<li>' + result.hits[i].recipe.ingredients[l].text + '</li>');
			}

		}

		$(".recipe").click(function(){
			$(this).toggleClass("show");
		});
	});
});

$("#steakBtn").click(function(){
	var url = "https://api.edamam.com/search?app_id=38c25904&app_key=0e9730623102e47165236bd327802907&count=10&q=steak";

	$.getJSON(url, function(result){

		for(var i=0; i < result.hits.length; i++){
			$("#recipeArea").append('<div class="recipe"><h2>' + result.hits[i].recipe.label + "<button id='plus'> + </button>" + '</h2> <img width="300px" src="' + result.hits[i].recipe.image + '" /><ul id="recipe' + i + '"></ul></div>');
		
			for(var l=0; l < result.hits[i].recipe.ingredients.length; l++){
				$("#recipe" + i).append('<li>' + result.hits[i].recipe.ingredients[l].text + '</li>');
			}

		}

		$(".recipe").click(function(){
			$(this).toggleClass("show");
		});
	});
});

$("#chickenBtn").click(function(){
	var url = "https://api.edamam.com/search?app_id=38c25904&app_key=0e9730623102e47165236bd327802907&count=10&q=chicken";

	$.getJSON(url, function(result){

		for(var i=0; i < result.hits.length; i++){
			$("#recipeArea").append('<div class="recipe"><h2>' + result.hits[i].recipe.label + "<button id='plus'> + </button>" + '</h2> <img width="300px" src="' + result.hits[i].recipe.image + '" /><ul id="recipe' + i + '"></ul></div>');
		
			for(var l=0; l < result.hits[i].recipe.ingredients.length; l++){
				$("#recipe" + i).append('<li>' + result.hits[i].recipe.ingredients[l].text + '</li>');
			}

		}

		$(".recipe").click(function(){
			$(this).toggleClass("show");
		});
	});
});

$("#seafoodBtn").click(function(){
	var url = "https://api.edamam.com/search?app_id=38c25904&app_key=0e9730623102e47165236bd327802907&count=10&q=seafood";

	$.getJSON(url, function(result){

		for(var i=0; i < result.hits.length; i++){
			$("#recipeArea").append('<div class="recipe"><h2>' + result.hits[i].recipe.label + "<button id='plus'> + </button>" + '</h2> <img width="300px" src="' + result.hits[i].recipe.image + '" /><ul id="recipe' + i + '"></ul></div>');
		
			for(var l=0; l < result.hits[i].recipe.ingredients.length; l++){
				$("#recipe" + i).append('<li>' + result.hits[i].recipe.ingredients[l].text + '</li>');
			}

		}

		$(".recipe").click(function(){
			$(this).toggleClass("show");
		});
	});
});

$("#reloadBtn").click(function(){
	location.reload();
});









