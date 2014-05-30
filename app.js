$(document).ready(function(){
	$('#entry').keyup(function(event){
		console.log(event);
		if(event.keyCode == 13) {
			//console.log("hello");
			event.preventDefault();
			var txtbox = document.getElementById('entry');
			var txtval = txtbox.value;
			$('#items').append('<li>'+txtval+'</li>');
		};
	});
	$('#add').click(function(){
		event.preventDefault();
		var txtbox = document.getElementById('entry');
		var txtval = txtbox.value;
		$('#items').append('<li>'+txtval+'</li>');
	});
	$('.list').on('click', 'li', function(){
		//console.log("strike");
		$(this).wrap("<strike>");
	});	
	$('.list').on('dblclick', 'li', function(){
		//console.log("working");
		$(this).remove();
	});
});





