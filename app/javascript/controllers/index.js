// Import and register all your controllers from the importmap under controllers/*

import { application } from "controllers/application"

// import { animateHeadings } from "./header"
// animateHeadings("controllers", application)

// Eager load all controllers defined in the import map under controllers/**/*_controller
import { eagerLoadControllersFrom } from "@hotwired/stimulus-loading"
eagerLoadControllersFrom("controllers", application)

// Lazy load controllers as they appear in the DOM (remember not to preload controllers in import map!)
// import { lazyLoadControllersFrom } from "@hotwired/stimulus-loading"
// lazyLoadControllersFrom("controllers", application)

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
