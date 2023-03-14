const renderDate = (date) => {
	const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
	const numberDayStart = parseInt(date.substr(0, 2));
	const numberDayEnd = parseInt(date.substr(8, 2));
	const numberMonthStart = parseInt(date.substr(3, 2));
	const numberMonthEnd = parseInt(date.substr(11, 2));
	return `${numberDayStart} ${months[numberMonthStart - 1]} - ${numberDayEnd} ${months[numberMonthEnd - 1]},`;
};

export default renderDate;
