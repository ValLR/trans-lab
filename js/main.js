$(document).ready(function(){

    //validations for index.html
    $("#logIn").click(function(){
    	if(($("#email").val())==""||(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/.test($("#email").val())===false)){

    		$("#correoForm").text("Debes ingresar un correo válido");
    	}
    	else if(($("#password").val()).length >= 8 || ($("#password").val()) === ""){
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
    //agregando tarjetas
    $("#addCard").on("click", function(){
    	var card = $("#nTarjeta").val();
    	$("#card-container").append(`
			<div class= "row">
				<div class = "col s12 cardv">
					<p>`+ card +`</p>
				</div>
			</row>
    		`)
    	$("#nTarjeta").val("");
    });

    //poniendo mi numero de bip en select de tarifa
    $(document).on("click",function(){
   		$("#one").text($("#nTarjetaTarifa").val());
   		$("#one").attr("value",($("#nTarjetaTarifa").val()));
    })
 	//llamada de api para tarifa.html
    $("#calcular").on("click",function(){
    	var id = $("#select-tarjetas").val();
    	var selected = $("#select-tarifa").val();
    	$.ajax({
			url:'http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip='+id+'',
			type: 'GET',
			datatype: 'json',
		})
		.done(function(response){
			console.log(response.saldoTarjeta);
			var saldo = (response.saldoTarjeta).substring(1);
			console.log(saldo)
			if(!(saldo.indexOf('.') == -1)){
				var saldoReal= saldo.replace('.','');
				var saldoNum = parseInt(saldoReal);
				if(selected === "1"){
					var tarifa = 640;
					var final = parseInt(saldoNum) - parseInt(tarifa)
					console.log("costo pasaje: "+tarifa);
					console.log("SALDO FINAL:"+ final);
					$("#printTarifa").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>COSTO PASAJE</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+tarifa+`</h2>
								</div>
							</row>
						</div>
						`)
					$("#printSaldoFinal").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>SALDO FINAL</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+final+`</h2>
								</div>
							</row>
						</div>
						`)								
				}

				else if(selected === "2"){
					var tarifa = 680;
					var final = parseInt(saldoNum) - parseInt(tarifa)
					console.log("costo pasaje: "+tarifa);
					console.log("SALDO FINAL:"+ final);		
					$("#printTarifa").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>COSTO PASAJE</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+tarifa+`</h2>
								</div>
							</row>
						</div>
						`)
					$("#printSaldoFinal").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>SALDO FINAL</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+final+`</h2>
								</div>
							</row>
						</div>
						`)																
				}
				else if(selected === "3"){
					var tarifa = 740;
					var final = parseInt(saldoNum) - parseInt(tarifa)
					console.log("costo pasaje: "+tarifa);
					console.log("SALDO FINAL:"+ final);
					$("#printTarifa").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>$COSTO PASAJE</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+tarifa+`</h2>
								</div>
							</row>
						</div>
						`)
					$("#printSaldoFinal").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>SALDO FINAL</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+final+`</h2>
								</div>
							</row>
						</div>
						`)								
				}

			}
			else if(selected === "1"){
					var tarifa = 640
					var final = parseInt(saldo)-parseInt(tarifa)
					console.log("costo pasaje: "+tarifa);
					console.log("SALDO FINAL:"+ final);
					$("#printTarifa").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>COSTO PASAJE</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+tarifa+`</h2>
								</div>
							</row>
						</div>
						`)
					$("#printSaldoFinal").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>SALDO FINAL</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+final+`</h2>
								</div>
							</row>
						</div>
						`)
			}
			else if(selected === "2"){
					var tarifa = 680
					var final = parseInt(saldo)-parseInt(tarifa)
					console.log("costo pasaje: "+tarifa);
					console.log("SALDO FINAL:"+ final);	
					$("#printTarifa").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>COSTO PASAJE</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+tarifa+`</h2>
								</div>
							</row>
						</div>
						`)
					$("#printSaldoFinal").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>SALDO FINAL</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+final+`</h2>
								</div>
							</row>
						</div>
						`)			
			}
			else if(selected ==="3"){
					var tarifa = 740
					var final = parseInt(saldo)-parseInt(tarifa)
					console.log("costo pasaje: "+tarifa);
					console.log("SALDO FINAL:"+ final);
					$("#printTarifa").append(`
						<div class = "row">
							<div class = "col s12 header">
								<p>COSTO PASAJE</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+tarifa+`</h2>
								</div>
							</row>
						</div>
						<div class = "row">
							<div class = "col s12 header">
								<p>SALDO FINAL</p>
							</div>
							<div class = "row">
								<div class= "col s12 printedSaldo">
									<h2>$`+final+`</h2>
								</div>
							</row>
						</div>
						`)						
			}
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
		$("#nTarjetaSaldo").val("");
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