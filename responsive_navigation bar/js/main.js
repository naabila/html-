
const mobile_nav= document.querySelector(".mobile-navbar-btn");
const nav_headr= document.querySelector(".navbar");

const toggleNavbar= ()=>{

    nav_headr.classList.toggle("active");

};

mobile_nav.addEventListener("click",()=>toggleNavbar());


 