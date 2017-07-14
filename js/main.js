$(document).ready(function(){

    //validations for index.html
    $("#logIn").click(function(){
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
    localStorage.setItem('email',$("#email").val());
    localStorage.setItem('nTarjeta', $("#password").val())

    //email en profile, aún no corre bien
    if($("#email").val() === !undefined){
    	$("#email-p").attr("value", localStorage.getItem('email'));
    }


   //llamada de api
   $("#saldo").on("click", function(){
   	var id = ($("#nTarjetaSaldo").val());
			$.ajax({
				url:'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+id+'',
				type: 'GET',
				datatype: 'json',
			})
			.done(function(response){
				console.log(response.saldoTarjeta);

			})
			.fail(function(){
				console.log("error");
			});
		

   });
   
	//plugins que inicializan complementos de materialize
	$(".button-collapse").sideNav();
	$('.collapsible').collapsible();
    $('select').material_select();
});