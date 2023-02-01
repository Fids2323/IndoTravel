import timer from "./modules/timer.js";
import setDeadline from "./modules/control.js";
import "./modules/acc.js";
import "./modules/menuControl.js";
import "./modules/fly.js";
{
	const date = new Date(Date.UTC(2023, 1, 24, 20, 20));
	const init = () => {
		timer(setDeadline(date));
	};
	window.timerInit = init;
}
