const hamburguerMenu = document.getElementById("hamburguer-menu");
const menu = document.querySelector(".menu-navbar");

hamburguerMenu.addEventListener("click",()=>{
        menu.classList.toggle("sidebar-visible")
})