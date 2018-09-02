//Capture data as JSON array
$(function(){
var address = "";

	$(this).on("submit", function(e){
		e.preventDefault();
		address = $("#address-capture").serializeArray();
		console.log(address);
	});




//send query to geocode service with button push. Right now, this going to a google tutorial

	$("#btn").click(function(){
 			location.href = "https:maps.googleapis.com/maps/api/geocode/json?address=" + 
 			address + key;
		});
});