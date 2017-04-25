function translate(){
	var title = document.getElementById("form-signin-heading");
	var email = document.getElementById("inputEmail");
	var password = document.getElementById("inputPassword");
	var remember = document.getElementsByTagName("span")[0];
	var button = document.getElementsByClassName("btn")[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo Electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar Sesión";
};
translate();
	
function datos(){
	var mailusuario = document.getElementById("inputEmail").value;
	var passusuario = document.getElementById("inputPassword").value;

	var emailpantalla = document.getElementById("mostrardatos");
		emailpantalla.innerHTML= "El correo electrónico ingresado es:"+ "<br>" + mailusuario + "<br>" + "La clave ingresada es:" + "<br>" + passusuario;

}