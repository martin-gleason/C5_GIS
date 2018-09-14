//Map and geometry creation

var map;
var data;

function initMap(){
	map = new google.maps.Map(document.getElementById("map"), {
		center: {lat: 41.8676354, lng:-87.68105109999999},
		zoom: 11
	});
var data = map.data.loadGeoJson("json/CPD-districts.geojson");
map.data.addGeoJson(data);


};
