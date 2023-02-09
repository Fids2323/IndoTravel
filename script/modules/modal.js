import loadStyle from "./loadStyleModal.js";
import renderPhrase from "./utils/renderPhrase.js";
import renderDate from "./utils/renderDate.js";

const showModal = async (data) => {
	await loadStyle("css/modal.css");
	console.log(data);
	const overlay = document.createElement("div");
	const modal = document.createElement("div");
	const modalTitle = document.createElement("h2");
	const modalTextReservation = document.createElement("p");
	const modalTextDate = document.createElement("p");
	const modalTextPrice = document.createElement("p");
	const modalBtns = document.createElement("div");
	const btnConfirm = document.createElement("button");
	const btnChange = document.createElement("button");

	overlay.classList.add("overlay", "overlay_confirm");
	modal.classList.add("modal");
	modalTitle.classList.add("modal__title");
	modalTitle.textContent = "Подтверждение заявки";
	modalTextReservation.classList.add("modal__text");
	modalTextReservation.textContent = `Бронирование путешествия в Индию на ${data.people} ${renderPhrase(data.people)}`;
	modalTextDate.classList.add("modal__text");
	modalTextDate.textContent = `В даты: ${renderDate(data.date)}`;
	modalTextPrice.classList.add("modal__text");
	modalTextPrice.textContent = `Стоимость тура ${data.price}`;
	modalBtns.classList.add("modal__button");
	btnConfirm.classList.add("modal__btn", "modal__btn_confirm");
	btnConfirm.textContent = "Подтверждаю";
	btnChange.classList.add("modal__btn", "modal__btn_edit");
	btnChange.textContent = "Изменить данные";

	modalBtns.append(btnConfirm, btnChange);
	modal.append(modalTitle, modalTextReservation, modalTextDate, modalTextPrice, modalBtns);
	overlay.append(modal);

	document.body.append(overlay);

	return new Promise((resolve) => {
		btnChange.addEventListener("click", () => {
			overlay.remove();
			resolve(false);
		});

		btnConfirm.addEventListener("click", () => {
			overlay.remove();
			resolve(true);
		});
	});
};

export default showModal;
