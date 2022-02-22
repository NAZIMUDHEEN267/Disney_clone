"use strict";

// increasing the search input width

const body = document.querySelector("body");
const searchInput = document.querySelector("#js-search input");
const carousel = document.getElementById("js-carousel");

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
		console.log(path + container[i].img);
		carousel.innerHTML += `
							<div class="carousel__item flex">
								<div class="text">
									<h1 class="headline">avatar</h1>
									<p class="genre">thriller
										<span class="rating">4.2</span>
									</p>
									<span class="about">
										Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit excepturi enim sit laborum eveniet, ullam fugiat soluta eos aliquid, possimus odio deleniti nobis dignissimos sint assumenda eum. Quod, repudiandae.
									</span>
								</div>

								// image
								<div class="img">
									<img src="${path}${container[i].img}" alt=${container[i].img}/>
								</div>
							</div>
						`;
	}
}

data();
// carousel effect