const nav = document.querySelector('#navigation');
const textContent = document.querySelector('.text-content');
const header = document.querySelector('header');


function scrolling() {
	console.log(`header ${header.offsetHeight}`);
	if(window.scrollY > header.offsetHeight) {
		document.body.classList.add('nav-fixed');
		document.body.classList.add('land-active');
		document.body.style.marginTop = `${nav.offsetHeight}px`;
	} else {
		document.body.classList.remove('nav-fixed');
		document.body.classList.remove('land-active');
		document.body.style.marginTop = 0;
	}
}
window.addEventListener('scroll', scrolling);