import timer from "./script/timer";
import setDeadline from "./script/control.js";
import "./script/acc.js";
import "./script/menuControl.js";
import "./script/fly.js";
import "./script/getDataJSON.js";
import "./script/fetch.js";
import "./script/form-validate.js";
import "./script/slider.js";

import "./css/index.css";
import "./css/modal.css";
import "./css/timer.css";

const date = new Date(Date.UTC(2023, 1, 24, 20, 20));
const init = () => {
  timer(setDeadline(date));
};

init();
