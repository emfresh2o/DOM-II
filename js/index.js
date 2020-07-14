// Your code goes here
   
//Event changes nav background -> lightgreen when mouseover, and back -> white when leaving
let navSection = document.querySelector(".nav-container");
    navSection.addEventListener("mouseover", () => {
        navSection.style.background = "lightgreen"})

    navSection.addEventListener("mouseleave", () => {
        navSection.style.background = "white"})

//Event changes main bus image when mouse enters
let busImage = document.querySelector(".intro img")
    busImage.addEventListener("mouseenter", () => {
        busImage.style.transform = "scale(1.2)"
        busImage.style.transition = "transform 0.3s"
    })
    busImg.addEventListener("mouseleave", ()=>{
        busImg.style.transform = "scale(1.0)"
    })

//Event changes "Adventure" image to new image when clicked
let adventureImg = document.querySelector(".img-content img")
    adventureImg.addEventListener("click", () => {
        adventureImg.src = "img/adventureCamel.png"})

//Event changes "Destination" image to new image when double clicked
let destinationImg = document.querySelector(".content-destination img")
    destinationImg.addEventListener("dblclick", () => {
        destinationImg.src = "img/islandBoat.png"})

// Make all p tags change to blue on 'keydown'
const p = document.querySelectorAll('p');
    p.forEach(element => {
        window.addEventListener('keydown', () => {
            element.style.color = '#17A2B8';
        })
})
// Make all p tags change to pink on 'keyup'
    p.forEach(element => {
        window.addEventListener('keyup', () => {
            element.style.color = 'red';
        })
})
        
//Event change "SignUp Button" with alerts

const signUpBtn1 = document.querySelector('#btn-1');
signUpBtn1.addEventListener('mouseenter', () => {
    alert(`Don't forget the Sunblock?`)
})

const signUpBtn2 = document.querySelector('#btn-2');
signUpBtn2.addEventListener('mouseenter', () => {
    event.target.style.transform = "scale(2)";
    setTimeout(function(){event.target.style.transform = ""}, 3000);
})

const signUpBtn3 = document.querySelector('#btn-3');
signUpBtn3.addEventListener('dblclick', () => {
    event.target.textContent = "THIS IS LIFE!"
    event.stopPropagation();
})

const topBar = document.querySelector('.main-navigation');
topBar.addEventListener('dblclick', () => {
    event.stopPropagation();
})
