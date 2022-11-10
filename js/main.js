`use strict`
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

/* ---------
    CONF
--------- */
let imageShow = 0;
const imageContainer = document.querySelector(".img-big");
const imageRight = document.querySelector(".all-img-right");
/* --------
    MAIN
--------- */
// Clono il template dalla pagina - img left
const templateImage = document.getElementById('img-big').content.cloneNode(true);
// Compilo l'html
templateImage.querySelector('img').src = images[imageShow].image;
templateImage.querySelector('img').alt = images[imageShow].title;
templateImage.querySelector('.text-img-big h3').innerHTML = images[imageShow].title;
templateImage.querySelector('.text-img-big p').innerHTML = images[imageShow].text;
// Appendo il template al imageContainer
console.log(templateImage);
imageContainer.append(templateImage);

// Img right 
images.forEach((elm, index) => {
   // Clono il template img right
   const templateImageRight = document.getElementById("all-img-right").content.cloneNode(true); 
    // Compilo l'html del template appena clonato
    // Se l'elemento su cui sto ciclando ha l'indice === imageShow
    if( index === imageShow ){
        templateImageRight.querySelector('.img-small').classList.add('active');
    }
    templateImageRight.querySelector('img').src = elm.image;
    templateImageRight.querySelector('img').alt = elm.title;
    // Appendo il template al imageRight
    imageRight.append(templateImageRight);
});

const allImage = document.querySelectorAll('.img-small');
// Next image
const nextBtn = document.querySelector('.next-btn');
nextBtn.addEventListener('click', function(){
    // Rimuovo la classe active dalla img-small
    allImage[imageShow].classList.remove('active');
    // Incremento l'imageShow
    if(imageShow < images.length -1 ){
        imageShow++;
    }else{
        imageShow = 0;
    }   
    // Aggiungo la classe active alla img-small successiva
    allImage[imageShow].classList.add('active');    
    // Modifico l'immagine e il testo della img-big
    imageContainer.querySelector('img').src = images[imageShow].image;
    imageContainer.querySelector('img').alt = images[imageShow].title;
    imageContainer.querySelector('.text-img-big h3').innerHTML = images[imageShow].title;
    imageContainer.querySelector('.text-img-big p').innerHTML = images[imageShow].text;
});

// prev image
const prevBtn = document.querySelector('.prev-btn');
prevBtn.addEventListener('click', function(){
    // Rimuovo la classe active dalla img-small
    allImage[imageShow].classList.remove('active');
    // Incremento l'imageShow
    if(imageShow > 0 ){
        imageShow--;
    }else{
        imageShow = images.length - 1;
    }   
    // Aggiungo la classe active alla img-small successiva
    allImage[imageShow].classList.add('active');    
    // Modifico l'immagine e il testo della img-big
    imageContainer.querySelector('img').src = images[imageShow].image;
    imageContainer.querySelector('img').alt = images[imageShow].title;
    imageContainer.querySelector('.text-img-big h3').innerHTML = images[imageShow].title;
    imageContainer.querySelector('.text-img-big p').innerHTML = images[imageShow].text;
});
