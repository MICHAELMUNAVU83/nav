let baga = document.querySelector(".hambuger");
let navMenu = document.querySelector(".nav-menu");

baga.addEventListener("click", ()=>{
    baga.classList.toggle('active')
    navMenu.classList.toggle('active')
})
