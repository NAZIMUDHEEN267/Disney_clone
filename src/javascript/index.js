"use strict";

const elements = document.querySelectorAll("#js-nav-links .nav__link_color");

elements.forEach((element) => {
	element.addEventListener("mouseover", (event) => {
		const text = event.target.innerText.toLowerCase();
		const eventElem = document.querySelector(`.${text}-list`);
		eventElem.classList.add("animation-nav");

		eventElem.addEventListener("mouseleave", () => {
			eventElem.classList.remove("animation-nav");
		});
	});
});
