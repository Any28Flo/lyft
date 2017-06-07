var bienvenida = function(){
	var cronometro;
	cronometro = setTimeout(cambiaPagina, 5000);
}

var cambiaPagina = function(){
	window.location.href="bienvenida.html";
}



$(document).ready(bienvenida);


