const menuButton  = document.querySelector('.header__menu-button');
const menu  = document.querySelector('.header__menu');
const header = document.querySelector('.header')

// Toggle the "header__menu_active"
menuButton .addEventListener('click', ()=> {
	menu.classList.toggle('header__menu_active')
})

// If the click event is not on the menu button or menu or menu items
header.addEventListener("click", function(e) {
	if (!e.target.closest(".header__menu-button") && !e.target.closest(".header__menu")) {
		menu.classList.remove("header__menu_active");
	}
	if (e.target.closest('.header__item')) {
		menu.classList.remove("header__menu_active")
	}
});

