let show = true;

const navbar = document.querySelector(".navbar-container")
const menuToogle = navbar.querySelector(".menu-toggle")

menuToogle.addEventListener('click', () => {

    const html = document.querySelector('html')
    
    html.style.overflow = show ? 'hidden' : 'initial'
    
    navbar.classList.toggle("on", show)
    
    show = !show;
})