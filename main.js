

const menu = document.querySelector('.navigation header')
const menuButtonOpen = document.getElementById('menuButtonOpen')
const menuButtonClose = document.getElementById('menuButtonClose')

menuButtonOpen.addEventListener('click', openMenu)
menuButtonClose.addEventListener('click', closeMenu)

function openMenu() {
    menu.classList.add('menu-expanded')
}

function closeMenu() {
    menu.classList.remove('menu-expanded')
}
