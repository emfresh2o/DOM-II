// Your code goes here
   
//Event changes nav background -> lightgreen when mouseover, and back -> white when leaving
let navSection = document.querySelector(".nav-container");
    navSection.addEventListener("mouseover", () => {
        navSection.style.background = "lightgreen"
    })
    navSelector.addEventListener("mouseleave", () => {
        navSelector.style.background = "white"})

//Event changes main bus image when clicked
let busImage = document.querySelector(".intro img")
    busImage.addEventListener("click", () => {
        busImage.src = "img/funbustour.png"
      })
//Event changes "Adventure" image to new image when clicked
let adventureImg = document.querySelector(".img-content img")
    adventureImg.addEventListener("click", () => {
        adventureImg.src = "img/adventureCamel.png"})

//Event changes "Destination" image to new image when double clicked
let destinationImg = document.querySelector(".img-content img")
    destinationImg.addEventListener("dblclick", () => {
        destinationImg.src = "img/islandBoat.png"})

//Event change "SignUp Button" with alerts

const signUpBtn1 = document.querySelector('#btn-1');
signUpBtn1.addEventListener('mouseenter', (event) => {
    alert(`Don't forget the Sunblock?`)
})

const signUpBtn2 = document.querySelector('#btn-2');
signUpBtn2.addEventListener('mouseenter', (event) => {
    event.target.style.transform = "scale(2)";
    setTimeout(function(){event.target.style.transform = ""}, 2000);
})

const signUpBtn3 = document.querySelector('#btn-3');
signUpBtn3.addEventListener('dblclick', (event) => {
    event.target.textContent = "THIS IS LIFE!"
    event.stopPropagation();
})

const topBar = document.querySelector('.main-navigation');
topBar.addEventListener('dblclick', (event) => {
    event.stopPropagation();
})
