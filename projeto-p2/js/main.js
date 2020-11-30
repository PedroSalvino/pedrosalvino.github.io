function principal(){
	//*Carregar os posters
	//*FILME 1
	dadosFilmes('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-143692/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-143692/fotos/detalhe/?cmediafile=20028688','titulo1','foto1');
	//*FILME 2
	dadosFilmes('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-114782/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-114782/fotos/detalhe/?cmediafile=21154448','titulo2','foto2');
	//*FILME 3
	dadosFilmes('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-130440/','https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-130440/fotos/detalhe/?cmediafile=21085451','titulo3','foto3');
	//*FILME 4
	dadosFilmes('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-232669/','https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-232669/fotos/detalhe/?cmediafile=21614858','titulo4','foto4');
	//*FILME 5
	dadosFilmes('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-41245/','https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-41245/fotos/detalhe/?cmediafile=20230712','titulo5','foto5');
	//*FILME 6
	dadosFilmes('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-196666/','https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-196666/fotos/detalhe/?cmediafile=21047331','titulo6','foto6');
	//*Função para aparecer o título do filme
	document.querySelectorAll('.card').forEach(card => {
		card.addEventListener('mouseover', evt =>{
			let texto = evt.target.querySelector('p');
			texto.classList.remove('texto-invisivel');
			texto.classList.add('texto-visivel');
		});
	});

	document.querySelectorAll('.card').forEach(card => {
		card.addEventListener('mouseout', evt =>{
			let texto = evt.target.querySelector('p');
			texto.classList.remove('texto-visivel');
			texto.classList.add('texto-invisivel');
		});
	});
	//*Chamada do Modal
	document.querySelector('#filme1').addEventListener('click', evt =>{
		dadosModal('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-143692/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-143692/trailer-19115025/');
	});
	document.querySelector('#filme2').addEventListener('click', evt =>{
		dadosModal('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-130440/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-130440/trailer-19315929/');
	});
	document.querySelector('#filme3').addEventListener('click', evt =>{
		dadosModal('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-41245/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-41245/trailer-19391565/');
	});
	document.querySelector('#filme4').addEventListener('click', evt =>{
		dadosModal('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-114782/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-114782/trailer-19538702/');
	});
	document.querySelector('#filme5').addEventListener('click', evt =>{
		dadosModal('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-232669/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-232669/trailer-19561006/');
	});
	document.querySelector('#filme6').addEventListener('click', evt =>{
		dadosModal('https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-196666/','https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-196666/trailer-19502054/');
	});
}
//*
function dadosModal(url, trailer){
	fetch(url,{
		mode: 'cors',
		headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"Access-Control-Allow-Origin":"*"
        }
	})
	.then(resp => resp.text())
	.then(x => {
			let dom = new DOMParser();
			let doc = dom.parseFromString(x,"text/html");
			//*
			let titulo=document.querySelector("#filmeModalLabel");
			let diretor=document.querySelector("#diretorfilme");
			let elenco=document.querySelector("#elencofilme");
			let ano=document.querySelector("#anofilme");
			let sinopse=document.querySelector("#sinopsefilme");
			//* título do filme
			titulo.innerHTML=doc.querySelector(".titlebar-title").innerHTML;
			//* diretor
			diretor.innerHTML=doc.querySelector(".meta-body-direction").innerHTML;
			//*elenco
			elenco.innerHTML=doc.querySelector(".meta-body-actor").innerHTML;
			//*ano
			ano.innerHTML=doc.querySelector(".meta-body-info").innerHTML;
			//*duração
			// let duracao=document.querySelector("#duracaofime");

			//*sinopse
			sinopse.innerHTML=doc.querySelector(".content-txt").innerHTML;
		}
	)

	fetch(trailer,{
		mode: 'cors',
		headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"Access-Control-Allow-Origin":"*"
        }
	})
	.then(resp => resp.text())
	.then(x => {
			let dom = new DOMParser();
			let doc = dom.parseFromString(x,"text/html");
			let areatrailer=document.querySelector('#areatrailer');
			let dados = {};
			dados = JSON.parse(doc.querySelector('#btn-export-player').dataset.model).videos;
			areatrailer.src='http:'+dados[0].sources.medium;

		}
	)
}
//*
function dadosFilmes(urltexto, urlfoto,idtitulo,idfoto){
	fetch(urltexto,{
		mode: 'cors',
		headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"Access-Control-Allow-Origin":"*"
        }
	})
	.then(resp => resp.text())
	.then(x => {
			let dom = new DOMParser();
			let doc = dom.parseFromString(x,"text/html");
			//*
			let titulo = document.querySelector("#"+idtitulo);
			titulo.innerHTML=doc.querySelector(".titlebar-title").innerHTML;
		}
	)
	//*
	fetch(urlfoto, {
		mode: 'cors',
		headers: {  
            "Content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				"Access-Control-Allow-Origin":"*"
        }
	})
	.then(resp => resp.text())
	.then(x => {
			let dom = new DOMParser();
			let doc = dom.parseFromString(x,"text/html");
			//*
			let foto = document.querySelector("#"+idfoto);
			foto.src=doc.querySelector(".gallery-media").src;
		}
	)
}

//*
window.onload = principal;

