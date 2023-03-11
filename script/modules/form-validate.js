import JustValidate from "../../node_modules/just-validate/dist/just-validate.es.js";
import Inputmask from "../../node_modules/inputmask/dist/inputmask.es6.js";

//Mask
const inputTel = document.querySelector("#reservation__phone");
const telMask = new Inputmask("+7 (999)-999-99-99");
telMask.mask(inputTel);

//Validate form

const justValidate = new JustValidate(".reservation__form");
justValidate
	.addField("#reservation__name", [
		{
			rule: "required",
			errorMessage: "Укажите ваше имя",
		},
		{
			rule: "minLength",
			value: 3,
			errorMessage: "Минимальное кол-во символов 3",
		},
		{
			rule: "maxLength",
			value: 15,
			errorMessage: "Максимальное кол-во символов 15",
		},
	])
	.addField("#reservation__phone", [
		{
			rule: "required",
			errorMessage: "Укажите ваш телефон",
		},
		{
			validator(value) {
				const phone = inputTel.inputmask.unmaskedvalue();
				return !!(Number(phone) && phone.length === 10);
			},
		},
	]);
