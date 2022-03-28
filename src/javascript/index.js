"use strict";

// increasing the search input width
const body = document.querySelector("body");
const searchInput = document.querySelector("#js-search input");
const carousel = document.getElementById("js-carousel");
const btnLeft = document.getElementById("js-btn-left");
const btnRight = document.getElementById("js-btn-right");
const posterContainer = document.querySelector(".poster__container");
const posterBtnLeft = document.querySelector(".poster #js-btn-left");
const posterBtnRight = document.querySelector(".poster #js-btn-right");

body.addEventListener("click", (event) => {
	if (event.target.placeholder === "search") {
		event.target.style.width = "100%";
	} else {
		searchInput.style.width = "50%";
	}
});

class Slider {
	constructor() {
		// data fetching
		fetch("/data/data.json")
			.then((jsonData) => jsonData.json())
			.then((data) => {
				// destructuring container
				const { container } = data;

				container.forEach((item) => {
					// creating a new node
					carousel.innerHTML += `
				<div class="container__item flex">
					<div class="text">
						<h1 class="headline">${item.name}</h1>
						<p class="genre">thriller
							<span class="rating">4.2</span>
						</p>
						<span class="about">
							Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit excepturi enim sit laborum eveniet, ullam fugiat soluta eos aliquid, possimus odio deleniti nobis dignissimos sint assumenda eum. Quod, repudiandae.
						</span>
					</div>
					<div class="img">
						<img src="./Assets/container/${item.img}" alt=${item.img}/>
					</div>
				</div>
			`;
				});
			});
	}

	forward() {
		
	}
}

// move slide functions
const slider = new Slider();