//jQuery function to take form data and print to console.

<script type = "text/javascript">

$( "form" ).submit(function( event )){
	console.log( $( this ).serializedArray() );
	event.preventDefault(;
});

</script>