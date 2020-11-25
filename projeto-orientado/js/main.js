window.onload = principal;
function principal(){	
	var bool = false;
	document.querySelector('#tema').addEventListener("click", evt =>{
		console.log(bool);
		if(bool == false){
			document.querySelectorAll('section').forEach(section => {
				section.classList.add('bg-escuro');	
			});	
			document.querySelectorAll('p').forEach(p =>{
				p.classList.add('texto-branco');	
			});
			document.querySelectorAll('h1').forEach(h1 =>{
				h1.classList.add('texto-branco');	
			});
			document.querySelectorAll('h2').forEach(h2 =>{
				h2.classList.add('texto-branco');	
			});
			document.querySelectorAll('h3').forEach(h3 =>{
				h3.classList.add('texto-branco');	
			});
			document.querySelectorAll('span').forEach(span =>{
				span.classList.add('texto-branco');	
			});
			document.querySelectorAll('.espaco-linha').forEach(space =>{
				space.classList.remove('texto-branco');	
			});
			document.querySelectorAll('hr').forEach(hr =>{
				hr.classList.add('texto-branco');	
			});
			document.querySelectorAll('a').forEach(a =>{
				a.classList.add('link-contraste');	
			});
			document.querySelectorAll('.link-botao').forEach(button =>{
				button.classList.add('bg-escuro');	
			});
			//*
			let header = document.querySelector('header');
			header.classList.add('bg-escuro');
			//*
			let footer = document.querySelector('footer');
			footer.classList.add('bg-escuro');
			//*
			let menu = document.querySelector('.icon').querySelector('img');
			menu.src='icon/menus/menu-branco-grande.png';
			//*
			let navbar = document.querySelector('nav');
			navbar.classList.add('navbar-contraste');
			//*
			document.querySelectorAll('.fundo-claro').forEach(bg =>{
				bg.classList.add('bg-escuro');	
			});
			document.querySelectorAll('.cartao').forEach(bg =>{
				bg.classList.add('bg-escuro');	
			});
			document.querySelectorAll('label').forEach(label =>{
				label.classList.add('texto-branco');	
			});
			document.querySelectorAll('legend').forEach(legend =>{
				legend.classList.add('texto-branco');	
			});
			document.querySelectorAll('input').forEach(input =>{
				input.classList.add('borda-branca');
			});
			document.querySelectorAll('select').forEach(select =>{
				select.classList.add('borda-branca');
			});
			document.querySelectorAll('textarea').forEach(textarea =>{
				textarea.classList.add('borda-branca');
			});
			document.querySelectorAll('.cor-alerta').forEach(input =>{
				input.classList.add('texto-branco');
			});
			document.querySelectorAll('button').forEach(button =>{
				button.classList.add('bg-escuro');
			});
			document.querySelectorAll('button').forEach(button =>{
				button.classList.add('link-contraste');
			});
			bool=true;
		}
		else{
			document.querySelectorAll('section').forEach(section => {
				section.classList.remove('bg-escuro');	
			});	
			document.querySelectorAll('p').forEach(p =>{
				p.classList.remove('texto-branco');	
			});
			document.querySelectorAll('h1').forEach(h1 =>{
				h1.classList.remove('texto-branco');	
			});
			document.querySelectorAll('h2').forEach(h2 =>{
				h2.classList.remove('texto-branco');	
			});
			document.querySelectorAll('h3').forEach(h3 =>{
				h3.classList.remove('texto-branco');	
			});
			document.querySelectorAll('span').forEach(span =>{
				span.classList.remove('texto-branco');	
			});
			document.querySelectorAll('hr').forEach(hr =>{
				hr.classList.remove('texto-branco');	
			});
			document.querySelectorAll('a').forEach(a =>{
				a.classList.remove('link-contraste');	
			});
			document.querySelectorAll('.link-botao').forEach(button =>{
				button.classList.remove('bg-escuro');	
			});
			//*
			let header = document.querySelector('header');
			header.classList.remove('bg-escuro');
			//*
			let footer = document.querySelector('footer');
			footer.classList.remove('bg-escuro');
			//*
			let menu = document.querySelector('.icon').querySelector('img');
			menu.src='icon/menus/menu-grande.png';
			//*
			let navbar = document.querySelector('nav');
			navbar.classList.remove('navbar-contraste');
			//*
			document.querySelectorAll('.fundo-claro').forEach(bg =>{
				bg.classList.remove('bg-escuro');	
			});
			document.querySelectorAll('.cartao').forEach(bg =>{
				bg.classList.remove('bg-escuro');	
			});
			document.querySelectorAll('label').forEach(label =>{
				label.classList.remove('texto-branco');	
			});
			document.querySelectorAll('legend').forEach(legend =>{
				legend.classList.remove('texto-branco');	
			});
			document.querySelectorAll('input').forEach(input =>{
				input.classList.remove('borda-branca');
			});
			document.querySelectorAll('select').forEach(select =>{
				select.classList.remove('borda-branca');
			});
			document.querySelectorAll('textarea').forEach(textarea =>{
				textarea.classList.remove('borda-branca');
			});
			document.querySelectorAll('.cor-alerta').forEach(input =>{
				input.classList.remove('texto-branco');
			});
			document.querySelectorAll('button').forEach(button =>{
				button.classList.remove('bg-escuro');
			});
			document.querySelectorAll('button').forEach(button =>{
				button.classList.remove('link-contraste');
			});


			bool=false;
		}
	});
}

function validarContato(){
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
}

function validarDelivery(){
	//Criando os elementos
	var titulo = document.createElement("h3");
	var div = document.getElementById('campo-erro');
	//
	var nome = document.getElementById('nome-cliente');
	var email = document.getElementById('email-cliente');
	var telefone = document.getElementById('telefone-cliente');
	var cep = document.getElementById('cep-cliente');
	var endereco = document.getElementById('endereco-cliente');
	var bairro = document.getElementById('bairro-cliente');
	var cidade = document.getElementById('cidade-cliente');

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
	else if(nome.value.trim().length < 3){
		var p = document.createElement("p");
		p.innerHTML="O campo Nome está inválido. Mínimo de 3 caracteres.";
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
	if(cep.value.trim() == ""){
		var p = document.createElement("p");
		p.innerHTML="O campo CEP não pode estar vazio.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		cep.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(cep.value.trim().length < 8){
		var p = document.createElement("p");
		p.innerHTML="O campo CEP está inválido. Mínimo de 8 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		cep.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(cep.value.trim().length > 8){
		var p = document.createElement("p");
		p.innerHTML="O campo CEP está inválido. Máximo de 8 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		cep.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else{
		cep.classList.remove("borda-alerta");
	}
	//
	if(endereco.value.trim() == ""){
		var p = document.createElement("p");
		p.innerHTML="O campo Endereço não pode estar vazio.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		endereco.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(endereco.value.trim().length < 5){
		var p = document.createElement("p");
		p.innerHTML="O campo Endereço está inválido. Mínimo de 5 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		endereco.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(endereco.value.trim().length > 45){
		var p = document.createElement("p");
		p.innerHTML="O campo Endereço está inválido. Máximo de 45 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		endereco.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else{
		endereco.classList.remove("borda-alerta");
	}
	//
	if(bairro.value.trim() == ""){
		var p = document.createElement("p");
		p.innerHTML="O campo Bairro não pode estar vazio.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		bairro.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(bairro.value.trim().length < 5){
		var p = document.createElement("p");
		p.innerHTML="O campo Bairro está inválido. Mínimo de 5 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		bairro.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(bairro.value.trim().length > 45){
		var p = document.createElement("p");
		p.innerHTML="O campo Bairro está inválido. Máximo de 45 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		bairro.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else{
		bairro.classList.remove("borda-alerta");
	}
	//
	if(cidade.value.trim() == ""){
		var p = document.createElement("p");
		p.innerHTML="O campo Cidade não pode estar vazio.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		cidade.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(cidade.value.trim().length < 5){
		var p = document.createElement("p");
		p.innerHTML="O campo Cidade está inválido. Mínimo de 5 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		cidade.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else if(cidade.value.trim().length > 45){
		var p = document.createElement("p");
		p.innerHTML="O campo Cidade está inválido. Máximo de 45 caracteres.";
		p.classList.add("cor-alerta");
		p.classList.add("titulo");
		cidade.classList.add("borda-alerta");
		div.appendChild(p);
	}
	else{
		cidade.classList.remove("borda-alerta");
	}
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