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

let imageShow = 0;
const container = document.querySelector(".container");
images.forEach((element) => { 
    console.log(element);
    const listImage = document.getElementById('template-image').content.cloneNode(true);
    listImage.querySelector(".image-left").src = element.image;
    container.append(listImage);
    const containers = document.querySelectorAll(".container-image");
    
    containers[imageShow].classList.add("active");
    

});

const prevBtn = document.querySelector(".prev");
prevBtn.addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
        
    if(imageShow === 0){
        imageShow = imageShow + 1;
    }else{
        imageShow = 4;
    }
    containers[imageShow].classList.add("active");
});
const containers = document.querySelectorAll(".container-image");
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function(){
    document.querySelector(".active").classList.remove("active");
       
    if(imageShow <= 4){
        imageShow = imageShow + 1;
    }else{
        imageShow = 0;
    }
    containers[imageShow].classList.add("active");
});
