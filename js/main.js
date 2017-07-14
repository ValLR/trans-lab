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

    //poniendo mi numero de bip en select de tarifa
    $(document).on("click",function(){
   		$("#one").text($("#nTarjetaTarifa").val());
   		$("#one").attr("value",($("#nTarjetaTarifa").val()));
    })
 	//llamada de api para tarifa.html
    $("#calcular").on("click",function(){
    	var id = $("#one").val();
    	var alta = 
    	$.ajax({
			url:'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+id+'',
			type: 'GET',
			datatype: 'json',
		})
		.done(function(response){

		})
    });

   //llamada de api para saldo.html
   $("#saldo").on("click", function(){
   	var id = ($("#nTarjetaSaldo").val());
		$.ajax({
			url:'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+id+'',
			type: 'GET',
			datatype: 'json',
		})
		.done(function(response){
			console.log(response.saldoTarjeta);
			$("#printSaldo").append(`
				<div class = "row">
					<div class = "col s12 header">
						<p>SALDO TOTAL</p>
					</div>
					<div class = "row">
						<div class= "col s12 printedSaldo">
							<h2>`+response.saldoTarjeta+`</h2>
						</div>
					</row>
				</div>


				`)
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