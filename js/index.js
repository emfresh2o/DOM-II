// Your code goes here
//Event changes the logo to a Hippie Bus Image when mouseover/,mouseleave
const mainLogo = document.querySelector('logo-heading img');
mainLogo.addEventListener('mouseover', () => {
    mainLogo.setNewImage.src = "img/minibus.png";
})
mainLogo.addEventListener('mouseleave', () => {
    mainLogo.setOldImage.src = "img/FunBusLogo.png";
})

// Event changes the main bus image when clicked
const busImage = document.querySelector('intro img')
busImage.addEventListener('click', () => {
    busImage.setNewImage.src = "funbustour.png";
})

//Event changes text color -> random when "R" is pressed on keyboard
document.addEventListener('keypress',  (event) => {
    if (event.key === 'r') {
    let random = (0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
      document.body.style = "color: #"+random;
    }
      });
      
//Event changes "Adventure" image to new image when double clicked
let adventureImg = document.querySelector(".img-content img")
adventureImg.addEventListener("dblclick", () => {adventureImg.src = "islandBoat.png"})

//Event change "SignUp Button" with alerts

const signUpBtn1 = document.querySelector('#btn-1');
signUpBtn1.addEventListener('mouseenter', (event) => {
    alert(`Don't forget to put some Sunblock?`)
})

const signUpBtn2 = document.querySelector('#btn-2');
signUpBtn2.addEventListener('mouseenter', (event) => {
    event.target.style.transform = "scale(2)";
    setTimeout(function(){event.target.style.transform = ""}, 3000);
})

const signUpBtn3 = document.querySelector('#btn-3');
signUpBtn3.addEventListener('dblclick', (event) => {
    event.target.textContent = "THIS IS LIFE!"
    event.stopPropagation();
})
