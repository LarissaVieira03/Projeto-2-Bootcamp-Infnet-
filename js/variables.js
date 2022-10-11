const carouselCatalogoItems = document.getElementById('carouselCatalogoItems');
const modalCatalogos = new bootstrap.Modal('#modalCatalogos', {})

const catalogos = {
    boruto: {
        nome: "Boruto",
        img: "./assets/img/boruto-novidade.jpg",
        descricao: "Boruto Uzumaki é um shinobi do clã Uzumaki de Konohagakure, assim como um descendente do clã Hyūga. O pequeno ninja é um membro do Time Konohamaru, junto a Sarada e Mitsuki."
    },
    attackOnTitan: {
        nome: "Attack On Titan",
        img: "./assets/img/attackontitanovidade.jpg",
        descricao: "O anime mostra uma era apocalíptica com 9 titãs e gigantes, que tentam atacar o planeta. Durante o ataque seres humanos se tornam o alimento principal dessas criaturas e precisam lutar para sobreviver nesse mundo fantasioso."
    },
    demonSlayer: {
        nome: "Demon Slayer",
        img: "./assets/img/demonslayer-novidade.jpg",
        descricao: "A trama mostra um jovem rapaz chamado Tanjiro que trabalha para ajudar sua família composta por uma mãe e vários irmãos. Um dia ele sai para realizar uma venda longe de casa e quando retorna encontra quase todos seus familiares mortos pelas mãos de onis (demônios japoneses)."
    },

}