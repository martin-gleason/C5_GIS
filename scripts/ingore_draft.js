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
	
	