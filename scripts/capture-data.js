//Capture data as JSON array
$(function(){

var address = "";

	$(this).on("submit", function(e){
		e.preventDefault();
		address = $("#formAddress1").val() + " + " + $("#city").val() + " + " +
		$("#state").val()  + " + " + $("#zip").val();
		alert(address));
	});


	

//send query to geocode service with button push. Right now, this going to a google tutorial

	$("#btn").click(function(){
 			location.href = "https:maps.googleapis.com/maps/api/geocode/json?address=" + 
 			address;
		});
});

//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY