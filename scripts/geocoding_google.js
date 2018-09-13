//API key and geocoding Work

var key = "AIzaSyCdNaEzVGrwgTU1dW9N34dNLdF2uTeyrmE";

var url_base = "https://maps.googleapis.com/maps/api/geocode/outputFormat?";

var geocoder = new google.maps.Geocoder();


function codeAddress(x){
	space = new RegExp(/\s/g);	
	address = x.replace(space, "+");
	console.log(address);
	
	geocoder.geocode( {"address" : address}, function(results, status) {
		if (status == "OK") {
			$("div.test").append(results[0].geometry.location.toString());			
		} else {
				alert("The geocode status was: " + status)};
			
			});
};