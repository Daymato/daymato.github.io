const menuHamburger = document.querySelector("svg")
const navLinks = document.querySelector("nav")

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')    
})  