//API key and JSON Work


var key = "AIzaSyCn_jPl9wCQm35KJDowegquWQ5mR4As1hA";

var url_base = "https://maps.googleapis.com/maps/api/geocode/outputFormat?";

var geocoder = new google.maps.Geocoder();


function codeAddress(address){
	geocoder.geocode( {"address" : address}, function(results, status) {
		if (status != "OK") {
			alert("The geocode status was: " + status)};
			
			});
	
}