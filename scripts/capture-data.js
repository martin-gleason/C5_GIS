//Capture data
$(function(){

var address = "";

	$(this).on("submit", function(e){
		address = $("#formAddress1").val() + "+" + $("#city").val() + "+" +
		$("#state").val()  + "+" + $("#zip").val();
		e.preventDefault();
		codeAddress(address);
	});



//send query to geocode service with button push.

	$("#btn").click(function(){
 			
		});
});

//https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY