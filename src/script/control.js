const setDeadline = (date) => {
	const deadlineTimer = document.querySelector('.timer')
	deadlineTimer.dataset.timerDeadline = date
	return	deadlineTimer.dataset.timerDeadline
}

export default setDeadline;