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
			document.querySelectorAll('tr').forEach(tr =>{
             tr.classList.add('bg-escuro');
            });
            document.querySelectorAll('td').forEach(tr =>{
             tr.classList.add('borda-branca');
            });
            let table = document.querySelector('table');
            table.classList.add('bg-escuro');
            document.querySelectorAll('caption').forEach(caption =>{
             caption.classList.add('texto-branco');
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

			document.querySelectorAll('tr').forEach(tr =>{
             tr.classList.remove('bg-escuro');
            });
            document.querySelectorAll('td').forEach(tr =>{
             tr.classList.remove('borda-branca');
            });
            let table = document.querySelector('table');
            table.classList.remove('bg-escuro');
            //*
            document.querySelectorAll('caption').forEach(caption =>{
             caption.classList.remove('texto-branco');
            });

			bool=false;
		}
	});
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