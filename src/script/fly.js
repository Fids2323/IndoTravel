const docEL = document.documentElement;
const flyWrapper = document.createElement("div");
const fly = document.createElement("div");

if (docEL.clientWidth >= 758) {
  flyWrapper.style.cssText = `
    position: fixed;
    right: 0;
    bottom: 0;
  `;
  fly.style.cssText = `
	background: url("../img/plane.svg") center/contain no-repeat;
    width: 50px;
    height: 50px;
	`;
  flyWrapper.append(fly);
  document.body.append(flyWrapper);

  const calcPositionFly = () => {
    const maxTop = docEL.clientHeight - flyWrapper.clientHeight;
    const maxScroll = docEL.scrollHeight - docEL.clientHeight;
    const percentScroll = (window.pageYOffset * 100) / maxScroll;
    const top = maxTop * (percentScroll / 100);
    flyWrapper.style.transform = `translateY(-${top}px)`;

    let up = window.pageYOffset;
    if (scroll > up) {
      fly.style.transform = "rotate(-180deg)";
    } else {
      fly.style.transform = "rotate(0deg)";
    }
    scroll = up;
  };
  let scroll = 0;

  window.addEventListener("scroll", () => {
    requestAnimationFrame(calcPositionFly);
  });

  calcPositionFly();
}
