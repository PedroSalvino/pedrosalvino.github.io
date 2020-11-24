window.onload = principal;
function principal(){
	document.querySelector("button").addEventListener("click", evt =>{
		//Criando os elementos
		var titulo = document.createElement("h3");
		var div = document.getElementById('campo-erro');
		//
		var nome = document.getElementById('nome-contato');
		var email = document.getElementById('email-contato');
		var telefone = document.getElementById('tel-contato');
		var mensagem = document.getElementById('mensagem-contato');
		//
		div.innerHTML="";
		titulo.innerHTML="Aviso - Dados incorretos";
		titulo.classList.add("cor-alerta");
		titulo.classList.add("titulo");
		div.appendChild(titulo);
		//
		if(nome.value.trim() == ""){
			var p = document.createElement("p");
			p.innerHTML="O campo Nome não pode estar vazio.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			nome.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else if(nome.value.trim().length < 5){
			var p = document.createElement("p");
			p.innerHTML="O campo Nome está inválido. Mínimo de 5 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			nome.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else if(nome.value.trim().length > 60){
			var p = document.createElement("p");
			p.innerHTML="O campo Nome está inválido. Máximo de 60 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			nome.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else{
			nome.classList.remove("borda-alerta");
		}
		//
		if(email.value.trim() == ""){
			var p = document.createElement("p");
			p.innerHTML="O campo E-mail não pode estar vazio.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			email.classList.add("borda-alerta");
			div.appendChild(p);	
		}
		else if(email.value.trim().length < 15){
			var p = document.createElement("p");
			p.innerHTML="O campo E-mail está inválido. Mínimo de 15 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			email.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else if(email.value.trim().length > 45){
			var p = document.createElement("p");
			p.innerHTML="O campo E-mail está inválido. Máximo de 45 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			email.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else{
			email.classList.remove("borda-alerta");
		}
		//
		if(telefone.value.trim() == ""){
			var p = document.createElement("p");
			p.innerHTML="O campo Telefone não pode estar vazio.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			telefone.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else if(telefone.value.trim().length < 10){
			var p = document.createElement("p");
			p.innerHTML="O campo Telefone está inválido. Mínimo de 10 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			telefone.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else if(telefone.value.trim().length > 11){
			var p = document.createElement("p");
			p.innerHTML="O campo Telefone está inválido. Máximo de 11 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			telefone.classList.add("borda-alerta");
			div.appendChild(p);
		}
		else{
			telefone.classList.remove("borda-alerta");
		}
		//
		if(mensagem.value.trim() == ""){
			var p = document.createElement("p");
			p.innerHTML="O campo Mensagem não pode estar vazio.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			mensagem.classList.add("borda-alerta");
			div.appendChild(p);	
		}
		else if(mensagem.value.trim().length < 5){
			var p = document.createElement("p");
			p.innerHTML="O campo Mensagem está inválido. Mínimo de 5 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			mensagem.classList.add("borda-alerta");
			div.appendChild(p);	
		}
		else if(mensagem.value.trim().length > 200){
			var p = document.createElement("p");
			p.innerHTML="O campo Mensagem está inválido. Máximo de 200 caracteres.";
			p.classList.add("cor-alerta");
			p.classList.add("titulo");
			mensagem.classList.add("borda-alerta");
			div.appendChild(p);	
		}
		else{
			mensagem.classList.remove("borda-alerta");
		}
	});
}
function somenteNumeros(e) {
    var charCode = e.charCode ? e.charCode : e.keyCode;
    // charCode 8 = backspace   
    // charCode 9 = tab
    if (charCode != 8 && charCode != 9) {
        // charCode 48 equivale a 0   
        // charCode 57 equivale a 9
        if (charCode < 48 || charCode > 57) {
            return false;
        }
    }
}

function trocarClasse() {
  var navbar = document.querySelector("nav");
  if (navbar.className != "responsive") {
  	navbar.classList.remove("navbar");
    navbar.classList.add("responsive");
  }
  else {
    navbar.classList.remove("responsive");
    navbar.classList.add("navbar");
  }
}