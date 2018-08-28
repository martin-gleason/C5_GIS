var inputs = $("form").each(function(){
			$(this).find(":input");
			return(inputs)
		});

		//var myJSON = JSON.stringify(arr);
		console.log(inputs);
		
		
	$(function(){
		$(this).on("submit", function(e){
			e.preventDefault();
			var data = $("#form-row :input").serializeArray();
			console.log(data.length)
			});
	});
	
	
		$("#address-capture").submit(function(event){
		var data = $("#address-capture :input").val();
		console.log(data);
	});
	//this works ^^^ but gets one line.
	
	



$(this).submit(function(event){
		var address = $("form").serializeArray();
				alert("Button pushed");
				console.log(address);
				$.each(address, function(i, val){
				$("#test").append(val.name + ":" + val.value + " ");
				});
});


$( this).submit(function(event){
	console.log($( this ).serializeArray());
	event.preventDefault();
});





 	$("#btn").click(function(){
		location.href = "https:maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key" + key;});