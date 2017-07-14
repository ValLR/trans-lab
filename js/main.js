$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
    $('select').material_select();
    $("#logIn").click(function(e){
    	if(($("#email").val())==""||(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($("#email").val())===false)){

    		$("#correoForm").text("Debes ingresar un correo válido");
    	}
    	else if(($("#password").val()).length >= 8){
    		$("#passwordForm").text("Tu contraseña no debe superar los 8 caracteres")
    	}
    	else{
    		$("#logIn").attr("href","opciones.html")
    	}
    })

});