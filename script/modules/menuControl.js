const menuButton = document.querySelector(".header__menu-button");
const menu = document.querySelector(".header__menu");
const header = document.querySelector(".header");
menu.style.cssText = `
z-index:1;
`;

//Menu animation
const openBurgerMenu = () => {
	let opacity = 0;
	setTimeout(function changeOpacity() {
		opacity += 0.1;
		menu.style.opacity = opacity;
		if (opacity < 0.9) {
			setTimeout(changeOpacity, 100);
		}
	}, 100);
};

const closeBurgerMenu = () => {
	let opacity = 1;
	setTimeout(function changeOpacity() {
		opacity -= 0.1;
		menu.style.opacity = opacity;
		if (opacity >= 0) {
			setTimeout(changeOpacity, 100);
		}
	}, 100);
};

// Toggle the "header__menu_active"
menuButton.addEventListener("click", () => {
	if (menu.classList.contains("header__menu_active")) {
		requestAnimationFrame(closeBurgerMenu);
	} else {
		requestAnimationFrame(openBurgerMenu);
	}
	menu.classList.toggle("header__menu_active");
});

// If the click event is not on the menu button or menu or menu items
header.addEventListener("click", function (e) {
	if (!e.target.closest(".header__menu-button") && !e.target.closest(".header__menu")) {
		requestAnimationFrame(closeBurgerMenu);
		menu.classList.remove("header__menu_active");
	}
	if (e.target.closest(".header__item")) {
		requestAnimationFrame(closeBurgerMenu);
		menu.classList.remove("header__menu_active");
	}
});
