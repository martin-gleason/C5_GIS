//API key and geocoding Work

var geocoder = new google.maps.Geocoder();
var latLongUpdate;


function codeAddress(x){
	$("div.test").prepend(" ");
	space = new RegExp(/\s/g);	
	address = x.replace(space, "+");

	
	geocoder.geocode( {"address" : address}, function(results, status) {
		if (status == "OK") {
			latLongUpdate = results[0].geometry.location;
			alert(latLongUpdate.toString());
			$("div.test").append(latLongUpdate.toString());			
		} else {
				alert("The geocode status was: " + status)};
	});

// 		var marker = new google.maps.Marker({
// 		
// 			position: latLongUpdate,
// 			map: map,
// 			title: "Client Address"
// 		
// 		});

};


