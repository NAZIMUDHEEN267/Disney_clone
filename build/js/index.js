"use strict";

// increasing the search input width

const body = document.querySelector("body");
const searchInput = document.querySelector("#js-search input");
const carousel = document.getElementById("js-carousel");
const btnLeft = document.getElementById("js-btn-left");
const btnRight = document.getElementById("js-btn-right");

body.addEventListener("click", event => {
	if (event.target.placeholder === "search") {
		event.target.style.width = "100%";
	} else {
		searchInput.style.width = "50%";
	}
});

// data fetching
async function data() {
	const jsonData = await fetch("/data/data.json");
	const getData = await jsonData.json();
	const { container } = getData;

	// data insertion in html
	const path = "../Assets/container/";

	for (let i = 0; i < container.length; i++) {
		const modifiedName = container[i].name.split("_").join(" ");
		carousel.innerHTML += `
							<div class="container__item flex">
								<div class="text">
									<h1 class="headline">${modifiedName}</h1>
									<p class="genre">thriller
										<span class="rating">4.2</span>
									</p>
									<span class="about">
										Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit excepturi enim sit laborum eveniet, ullam fugiat soluta eos aliquid, possimus odio deleniti nobis dignissimos sint assumenda eum. Quod, repudiandae.
									</span>
								</div>

								<div class="img">
									<img src="${path}${container[i].img}" alt=${container[i].img}/>
								</div>
							</div>
						`;
	}
}

data();

// carousel effect
btnLeft.addEventListener("click", e => {});

let client = carousel.offsetWidth;
btnRight.addEventListener("click", () => {
	carousel.scrollBy(client, 10);
});