const tourSelect = document.querySelector("#tour__date");
const tourPeople = document.querySelector("#tour__people");
const reservationDate = document.querySelector("#reservation__date");
const reservationPeople = document.querySelector("#reservation__people");
const reservationDataText = document.querySelector(".reservation__data");
const reservationPriceText = document.querySelector(".reservation__price");

//Scroll to Form total
const form = document.querySelector(".reservation__form");
const button = document.querySelector(".tour__button");
button.addEventListener("click", (e) => {
	e.preventDefault();
	form.scrollIntoView();
});

reservationDataText.textContent = "";
reservationPriceText.textContent = "";
tourSelect.textContent = "";
tourPeople.disabled = true;
reservationPeople.disabled = true;
reservationDate.textContent = "";
const loadData = async () => {
	const result = await fetch("data.json");
	const data = await result.json();
	return data;
};
const data = await loadData();

const renderOption = (selectDate, selectPeople, className, titleDate, titlePeople) => {
	//TitleSelect
	selectDate.textContent = "";
	const optionDateText = document.createElement("option");
	optionDateText.value = "";
	optionDateText.className = className;
	optionDateText.textContent = titleDate;
	selectDate.prepend(optionDateText);

	//Add values from data
	data.map((item) => {
		const option = document.createElement("option");
		option.value = item.date;
		option.textContent = item.date;
		option.className = className;
		selectDate.append(option);
	});

	//Add numbers of people after selection date
	selectDate.addEventListener("change", () => {
		selectPeople.disabled = false;
		selectPeople.textContent = "";
		const date = selectDate.value;
		const currentData = data.filter((item) => item.date === date)[0];

		//Add value select number people
		const minPeople = currentData["min-people"];
		const maxPeople = currentData["max-people"];
		const optionPeopleText = document.createElement("option");
		optionPeopleText.value = "";
		optionPeopleText.className = className;
		optionPeopleText.textContent = titlePeople;
		selectPeople.prepend(optionPeopleText);

		for (let i = minPeople; i <= maxPeople; i++) {
			const option = document.createElement("option");
			option.value = i;
			option.textContent = i;
			option.className = className;
			selectPeople.append(option);
		}
	});
};

const renderPhrase = (number) => {
	const lastOne = Number(number.toString().slice(-1));
	if (number > 4 && number < 15) {
		return "человек";
	}
	if (lastOne === 1) return "человек";
	if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека";
	return "человек";
};

//First block
renderOption(tourSelect, tourPeople, "tour__option", "Выбери дату", "Количество человек");
//Second block
renderOption(reservationDate, reservationPeople, "reservation__option", "Дату путешествия", "Количество человек");

//Render total Form
//date
reservationDate.addEventListener("change", () => {
	reservationPriceText.textContent = "";
	const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
	const date = reservationDate.value;
	const currentData = data.filter((item) => item.date === date)[0];
	const numberDayStart = parseInt(currentData.date.substr(0, 2));
	const numberDayEnd = parseInt(currentData.date.substr(8, 2));
	const numberMonthStart = parseInt(currentData.date.substr(3, 2));
	const numberMonthEnd = parseInt(currentData.date.substr(11, 2));
	reservationDataText.textContent = `${numberDayStart} ${months[numberMonthStart - 1]} - ${numberDayEnd} ${months[numberMonthEnd - 1]},`;
});

reservationPeople.addEventListener("change", ({target}) => {
	//number of people
	const textArray = reservationDataText.textContent.split(",");
	reservationDataText.textContent = textArray[0];
	reservationDataText.textContent += `, ${target.value} ${renderPhrase(+target.value)}`;

	//total price  459 590₽
	reservationPriceText.textContent = "";
	const date = reservationDate.value;
	const currentData = data.filter((item) => item.date === date)[0];
	const count = currentData.price * target.value;
	//Add "_"
	const resultArray = (count + "₽").split("");
	const startIndex = resultArray.length - 4;
	resultArray.splice(startIndex, 0, " ");
	const result = resultArray.join("");
	reservationPriceText.textContent = result;
});
