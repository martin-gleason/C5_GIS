//jQuery function to take form data and print to console.


$( "form" ).submit(function( event )){
	console.log( $( this ).serializedArray() );
	event.preventDefault(;
});



$(function(){
	$(this).on("submit", function(e){
		e.preventDefault();
		var data = $("#address-capture").serializeArray();
		console.log(data);
	});
});
		
