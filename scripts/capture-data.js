//Capture data as JSON array
$(function(){
	$(this).on("submit", function(e){
		e.preventDefault();
		var data = $("#address-capture").serializeArray();
		console.log(data);
		});
	});

//send query to geocode service with button push. Right now, this going to a google tutorial
$(function(){
	$("#btn").click(function(){
			location.href = "https:maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key" + key;

		});
});