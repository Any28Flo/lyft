var login = function(){
	window.location.href ="login.html";
	alert("login");
}

var entra = function (){
	window.location.href = "signUp.html";
	alert("signUp");
}

var cargaPagina= function(){
	$("#logIn").click(login);
	$("#signUp").click(entra);

}


$(document).ready(cargaPagina);
