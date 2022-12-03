const btnMobile = document.querySelector('.cabecalho__menu-hamburguer');

const toogleMenu =  (e) => {
    const nav = document.querySelector('.menu__lista')
    nav.classList.toggle('active')

}


btnMobile.addEventListener('click', toogleMenu)


