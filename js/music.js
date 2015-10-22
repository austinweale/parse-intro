// Initialize Parse app


Parse.initialize("HX1umesPTcQweaJvv0PX6bd1Gsffeeh5r0ZpT4sd", "mp83133rlH4dwjVTr2UbvGfWKl9R5OExrhXL9xrP");
var music = Parse.Object.extend('ToDO');


// Create a new sub-class of the Parse.Object, with name "Music"


// Create a new instance of your Music class 


// Set a property 'band' equal to a band name


// Set a property 'website' equal to the band's website

    
// Set a property 'song' equal to a song


// Save your instance of your song -- and go see it on parse.com!

window.onload = function(){
	getData();
};



// Click event when form is submitted
$('form').submit(function() {
	var tune = new music;
	var inputs = document.querySelectorAll(".info");
	for(var i = 0; i < inputs.length; i++){
		tune.set(inputs[i].id, inputs[i].value);
		inputs[i].value = "";
	}
	tune.save(null, {success: getData});
	return false;
})



// Write a function to get data
var getData = function() {
	

	// Set up a new query for our Music class
	var query = new Parse.Query(music);


	// Set a parameter for your query -- where the website property isn't missing
	query.notEqualTo("website", "");


	/* Execute the query using ".find".  When successful:
	    - Pass the returned data into your buildList function
	*/
	query.find({
		success:function(results){
			buildList(results);
		}
	})

}

// A function to build your list
var buildList = function(data) {
	// Empty out your unordered list
	$('#list').empty();
	
	// Loop through your data, and pass each element to the addItem function
	for(var i = 0; i < data.length; i++){
		addItem(data[i]);
	}

}


// This function takes in an item, adds it to the screen
var addItem = function(item) {
	// Get parameters (website, band, song) from the data item passed to the function
	
	var band = item.get("band");
	var web = item.get("website");
	var song = item.get("song");
	
	var button = document.createElement("button");
	$(button).html("delete");
	$(button).click(function(){
		item.destroy({success:getData});
		
	});


	// Append li that includes text from the data item
	var li = document.createElement("li");

	$(li).html("band: " + band + " <br>song:   " + song + " <br>website:  " + web +"<br>");
	$(li).append(button);


	$("#list").append(li);

	



	
	// Time pending, create a button that removes the data item on click
	
}

// Call your getData function when the page loads


