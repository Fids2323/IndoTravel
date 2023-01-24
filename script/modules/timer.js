const timer = deadline => {
	const timerBlockDay = document.querySelector('.timer__count_days')
	const timerBlockHour = document.querySelector('.timer__count_hours')
	const timerBlockMin= document.querySelector('.timer__count_minutes')
	const timerUnitsDay = document.querySelector('.timer__units_days')
	const timerUnitsHour = document.querySelector('.timer__units_hours')
	const timerUnitsMin = document.querySelector('.timer__units_minutes')
	const heroText = document.querySelector('.hero__text')
	const heroTimer = document.querySelector('.hero__timer')

	const getTimeRemaining = () => {
		const dateStop = new Date(deadline).getTime();
		const dateNow = Date.now();
		const timeRemaining = dateStop - dateNow;

		const minutes = Math.floor((timeRemaining / 1000 / 60) % 60)
		const hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    return { timeRemaining, days, hours, minutes };
	}

	const renderPhrase = (number) => {
		const arrayOne = ['дня', 'часа' , 'минуты'];
		const arrayTwo = ['дней', 'часов' , 'минут'];
		const arrayThree = ['день', 'час', 'минута'];
		const lastOne = Number(number.toString().slice(-1));
		if(lastOne === 0) {
			return arrayTwo
		}
		if (number > 4 && number < 15) {
				return arrayTwo;
		}
		if (lastOne === 1) return arrayThree;
		if ([2, 3, 4].indexOf(lastOne) >= 0) return arrayOne;
		return arrayTwo;
};


	const start = () => {
		const timer = getTimeRemaining()

		timerBlockDay.textContent =timer.days < 10 ? '0' + timer.days : timer.days;
		timerBlockHour.textContent =  timer.hours < 10 ? '0' + timer.hours : timer.hours;
		timerBlockMin.textContent = timer.minutes < 10 ? '0' + timer.minutes : timer.minutes;

		const intervalId = setTimeout(start, 1000)

		timerUnitsDay.textContent = renderPhrase(timer.days)[0]
		timerUnitsHour.textContent = renderPhrase(timer.hours)[1]
		timerUnitsMin.textContent = renderPhrase(timer.minutes)[2]

		heroTimer.style.backgroundColor = timer.timeRemaining > 86400000 ? "red" : "green";

		if(timer.timeRemaining <= 0) {
			clearTimeout(intervalId);
			timerBlockDay.textContent = '0';
			timerBlockHour.textContent = '00';
			timerBlockMin.textContent = '00';
			heroText.textContent = '';
			heroTimer.textContent = '';
		}
		
	}
	start();
}


export default timer;