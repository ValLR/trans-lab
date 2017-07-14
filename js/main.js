$(document).ready(function(){
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
    $('select').material_select();
    var email = $("#email").val();
    var password = $("#password").val();
    $("#logIn").click(function(e){
    	if(email==""||(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test(email))===false){
    		$("#correoForm").text("Debes ingresar un correo válido")
    	}
    })

});