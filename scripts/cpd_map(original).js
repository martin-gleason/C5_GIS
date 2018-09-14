//Map and geometry creation

var map;


function initMap(){
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 41.8676354, lng:-87.68105109999999},
		zoom: 11
	});
	
map.data.loadGeoJson("CPD-districts.geojson");


};
