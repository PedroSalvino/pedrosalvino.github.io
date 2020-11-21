function principal(){

	// function modal1(){
	// 	document.querySelector('#filme1').addEventListener('click', dadosModal("https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-143692/"));	
	// }

	// function modal2(){
	// 	document.querySelector('#filme2').addEventListener('click', dadosModal("https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-114782/"));	
	// }
	
	// // modal1();
	// modal2();
}


function dadosModal(url){
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
			//* título do filme
			let modal=document.querySelector("#filmeModal");
			let titulo=document.querySelector("#filmeModalLabel");
			let diretor=document.querySelector("#diretorfilme");
			let elenco=document.querySelector("#elencofilme");
			let ano=document.querySelector("#anofilme");
			let sinopse=document.querySelector("#sinopsefilme");

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
	);
}

window.onload = principal;


	//*FILME 1
	/*fetch("https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-143692/",{
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
			let titulo = document.querySelector("#titulo1");
			// let titulomodal=document.querySelector("#filmeModalLabel");
			//var foto = document.querySelector("#foto1");
			titulo.innerHTML=doc.querySelector(".titlebar-title").innerHTML;
			// titulomodal.innerHTML=doc.querySelector(".titlebar-title").innerHTML;
			//foto.src=doc.querySelector(".shot-img").src;
		}
	)
	//*FOTO - FILME 1
	fetch("https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-143692/fotos/detalhe/?cmediafile=20028688", {
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
			//var titulo = document.querySelector("#titulo1");
			let foto = document.querySelector("#foto1");
			foto.src=doc.querySelector(".gallery-media").src;
		}
	)
	//*FILME 2
	fetch("https://cors-anywhere.herokuapp.com/https://www.adorocinema.com/filmes/filme-114782/",{
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
			let titulo = document.querySelector("#titulo2");
			//var foto = document.querySelector("#foto1");
			titulo.innerHTML=doc.querySelector(".titlebar-title").innerHTML;
			//foto.src=doc.querySelector(".shot-img").src;
		}
	)
	//*FOTO - FILME 2
	fetch("https://cors-anywhere.herokuapp.com/http://www.adorocinema.com/filmes/filme-114782/fotos/detalhe/?cmediafile=21154453", {
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
			//var titulo = document.querySelector("#titulo1");
			let foto = document.querySelector("#foto2");
			foto.src=doc.querySelector(".gallery-media").src;
		}
	)
	//FILME 3
	//http://www.adorocinema.com/filmes/filme-130440/

	//FILME 4
	//http://www.adorocinema.com/filmes/filme-232669/

	//FILME 5
	//http://www.adorocinema.com/filmes/filme-41245/

	//FILME 6
	//http://www.adorocinema.com/filmes/filme-196666/
	*/