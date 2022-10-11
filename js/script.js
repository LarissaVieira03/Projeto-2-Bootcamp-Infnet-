const spinner = document.querySelector("#spinner");
const carrouselAssistidos = document.querySelector("#assistidos");
const carrouselIndicados = document.querySelector("#indicados");
const carrouselEmAlta = document.querySelector("#emAlta");
const titleModal = document.querySelector("#title-modal");
const bodyModal = document.querySelector("#body-modal");

/* POPOVER */
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))
/* POPOVER */

/* MAIS ASSISTIDOS POR VOCE */

class Picture {
	caminhoImage;
	titulo;
	descricao;

	constructor(src, title, descricao) {
		this.caminhoImage = src;
		this.titulo = title;
		this.descricao = descricao;
	}
};

const listPictures = [
	new Picture(
		"./assets/img/naruto.jpg",
		"Naruto Shippuden",
		"Naruto Shippuden é a continuação da primeira parte do mangá Naruto, e continua a mesma linha da história após a passagem de dois anos e meio no universo Naruto."
	),
	new Picture(
		"./assets/img/pokemon.jpg",
		"Pokémon",
		"Pokémon Jornadas Supremas continua as aventuras de Ash Ketchum, Goh e Chloe pelas oito reigões do mundo Pokémon."
	),
	new Picture(
		"./assets/img/onepiece.jpg",
		"One Piece",
		"Monkey D. Luffy é um jovem inspirado por seu ídolo de infância e poderoso pirata Shanks, 'o Ruivo', e decide sair em uma jornada pelo mar East Blue para encontrar o famoso tesouro One Piece e proclamar-se o Rei dos Piratas."
	),
	new Picture(
		"./assets/img/cdz.jpg",
		"Caveleiros Dos Zodíacos",
		"A série segue com os Cavaleiros de Bronze e sua luta contra guerreiros prolíficos na busca de se tornarem guerreiros da Deusa Athena, enquanto Seiya ao mesmo tempo procura sua irmã desaparecida."
	),
];

listPictures.forEach((picture, index) => {
	const div = document.createElement("div");
	div.innerHTML = `
        <img src="${picture.caminhoImage}" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="funcaoPicture(${index})"/>
    `;
	carrouselAssistidos.appendChild(div);
});

function funcaoPicture(index) {
	const picture = listPictures[index];
    titleModal.innerHTML = "";
	bodyModal.innerHTML = `
        <div class="img-loader"></div>
        <div class="text-loader"></div>
    `;
	setTimeout(() => {
		titleModal.innerHTML = picture.titulo;
		bodyModal.innerHTML = `
            <img src="${picture.caminhoImage}" />
            <p>${picture.descricao}</p>
        `;
	}, 1000);
};


$(".carrousel-assistidos").slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
});

/* FIM MAIS ASSISTIDOS POR VOCE */

/* INDICADOS PARA VOCE */

setTimeout(() => {
	spinner.style.display = "none";
}, 2000);

class Card {
	caminhoImage;
	titulo;
	descricao;

	constructor(src, title, descricao) {
		this.caminhoImage = src;
		this.titulo = title;
		this.descricao = descricao;
	}
};

const listCards = [
	new Card(
		"./assets/img/sailormoon.jpg",
		"Sailor Moon",
		"Assista e descubra novas aventuras."
	),
	new Card(
		"./assets/img/deathnote.jpg",
		"Death Note",
		"Assista e descubra novas aventuras."
	),
	new Card(
		"./assets/img/scc.jpg",
		"Sakura Card Captors",
		"Assista e descubra novas aventuras."
	),
	new Card(
		"./assets/img/dbsuper.jpg",
		"Dragon Ball Super",
		"Assista e descubra novas aventuras."
	),
	new Card(
		"./assets/img/fullmetal.jpg",
		"Fullmetal Alchemist",
		"Assista e descubra novas aventuras."
	),
	new Card(
		"./assets/img/yuyuhakusho.jpg",
		"Yu Yu Hakusho",
		"Assista e descubra novas aventuras."
	),
];

listCards.forEach((card, index) => {
	const div = document.createElement("div");
	div.innerHTML = `
        <img src="${card.caminhoImage}" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="funcaoCard(${index})"/>
    `;
	carrouselIndicados.appendChild(div);
});

function funcaoCard(index) {
	const card = listCards[index];
	titleModal.innerHTML = "";
	bodyModal.innerHTML = `
        <div class="img-loader"></div>
        <div class="text-loader"></div>
    `;
	setTimeout(() => {
		titleModal.innerHTML = card.titulo;
		bodyModal.innerHTML = `
            <img src="${card.caminhoImage}" />
            <p>${card.descricao}</p>
        `;
	}, 1000);
};

$(".carrousel-indicados").slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
});

/* FIM INDICADOS PARA VOCE */

/* EM ALTA */

class Desenho {
	caminhoImage;
	titulo;
	descricao;

	constructor(src, title, descricao) {
		this.caminhoImage = src;
		this.titulo = title;
		this.descricao = descricao;
	}
};

const listDesenhos = [
	new Desenho(
		"./assets/img/sevendeadlysins.jpg",
		"The Seven Deadly Sins",
		"Assista e descubra novas aventuras."
	),
	new Desenho(
		"./assets/img/promsedneverland.jpg",
		"The Promised Neverland",
		"Assista e descubra novas aventuras."
	),
	new Desenho(
		"./assets/img/bleach.jpg",
		"Bleach",
		"Assista e descubra novas aventuras."
	),
	new Desenho(
		"./assets/img/hunterxhunter.jpg",
		"Hunter x Hunter",
		"Assista e descubra novas aventuras."
	),
	new Desenho(
		"./assets/img/digimon.jpg",
		"Digimon",
		"Assista e descubra novas aventuras."
	),
	new Desenho(
		"./assets/img/onepunchman.jpg",
		"One Punch Man",
		"Assista e descubra novas aventuras."
	),
];

listDesenhos.forEach((desenho, index) => {
	const div = document.createElement("div");
	div.innerHTML = `
        <img src="${desenho.caminhoImage}" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="handleClickImage(${index})"/>
    `;
	carrouselEmAlta.appendChild(div);
});

function handleClickImage(index) {
	const desenho = listDesenhos[index];
    titleModal.innerHTML = "";
	bodyModal.innerHTML = `
        <div class="img-loader"></div>
        <div class="text-loader"></div>
    `;
	setTimeout(() => {
		titleModal.innerHTML = desenho.titulo;
		bodyModal.innerHTML = `
            <img src="${desenho.caminhoImage}" />
            <p>${desenho.descricao}</p>
        `;
	}, 1000);
};

$(".carrousel-em-alta").slick({
	dots: true,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	adaptiveHeight: true,
});

/* Fim EM ALTA */

