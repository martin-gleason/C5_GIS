//Map and Police district

$(document).ready(function(){

	var map;
	var data;

	function initMap(){
		map = new google.maps.Map(document.getElementById("map"), {
			center: {lat: 41.8676354, lng:-87.68105109999999},
			zoom: 12
		});
	
	var data = map.data.loadGeoJson("http://127.0.0.1:9090/CPD-districts.geojson");
	map.data.addGeoJson(data);

	};
	google.maps.event.addDomListener(window, 'load', initMap)
});