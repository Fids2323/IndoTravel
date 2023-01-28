const items = document.querySelectorAll('.travel__item ');
const buttons = document.querySelectorAll('.travel__item-title');
const textWrapper = document.querySelectorAll('.travel__item-text-wrapper');
let heightWrapper = 0;

textWrapper.forEach(elem => {
  if (heightWrapper < elem.scrollHeight) {
    heightWrapper = elem.scrollHeight;
  }
});

buttons.forEach((btn,index)=> {
	btn.addEventListener('click', ()=> {
		for(let i=0; i<items.length; i++) {
			if(index === i) {
				items[i].classList.add('travel__item_active')
				textWrapper[i].style.height = items[i].classList.contains('item_active') ? '' : `${heightWrapper}px`;
			} else {
				textWrapper[i].style.height = '';
				items[i].classList.remove('travel__item_active')
			}
		}
	})
})