const renderPhrase = (number) => {
	const lastOne = Number(number.toString().slice(-1));
	if (number > 4 && number < 15) {
		return "человек";
	}
	if (lastOne === 1) return "человек";
	if ([2, 3, 4].indexOf(lastOne) >= 0) return "человека";
	return "человек";
};

export default renderPhrase;
