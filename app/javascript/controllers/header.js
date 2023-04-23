import './header.css';

const headings = document.querySelectorAll('.heading');
let firstRun = true;

window.addEventListener('scroll', () => {
	const scrollValue = window.scrollY;

	headings.forEach((heading, index) => {
		heading.style.top = `${scrollValue * .07 * index}px`;
		if(firstRun){
			heading.style.transform = `translateY(0px)`;
		}
	});

	firstRun = false;
});

setTimeout(function(){
	headings.forEach((heading, index) => {
		heading.style.transform = `translateY(${index * 8}px)`;
	});
}, 500);
