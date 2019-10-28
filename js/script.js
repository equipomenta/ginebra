$(function($){

	$("form").submit(function(event) {

		event.preventDefault();

		$.ajax({
	    url: "https://formspree.io/proyectos@ginebraperu.com",
	    method: "POST",
	    data: {
	    	name: $("#name").val(),
	    	email: $("#email").val(),
	    	phone: $("#phone").val()
	    },
	    dataType: "json"
		}).done(function(){
			$("#name").val("");
			$("#email").val("");
			$("#phone").val("");
			alert("Email enviado con éxito!");
		}).fail(function(){
			alert("Error al envíar email!");
		});
	});

}) ;