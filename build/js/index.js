// increasing the search input width

const body = document.querySelector("body");
const searchInput = document.querySelector("#js-search input");
const carousel = document.getElementById("js-carousel");
const btnLeft = document.getElementById("js-btn-left");
const btnRight = document.getElementById("js-btn-right");

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

				this.items = container;
			});
	}

	creator(name, image) {
		// creating a new node
		return `
				<div class="container__item flex">
					<div class="text">
						<h1 class="headline">${name}</h1>
						<p class="genre">thriller
							<span class="rating">4.2</span>
						</p>
						<span class="about">
							Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed reprehenderit excepturi enim sit laborum eveniet, ullam fugiat soluta eos aliquid, possimus odio deleniti nobis dignissimos sint assumenda eum. Quod, repudiandae.
						</span>
					</div>
					<div class="img">
						<img src="../Assets/container/${image}" alt=${image}/>
					</div>
				</div>
			`;
	}

	// move slide functions
	forward() {
		carousel.innerHTML += this.creator(
			this.items[this.increment].name,
			this.items[this.increment].img
		);

		const children = carousel.children;

		if (children.length > 2) {
			carousel.innerHTML += this.creator(
				this.items[this.increment + 1].name,
				this.creator[this.increment + 1].img
			)
		}

		// movement
		const scrollTo = children[this.increment];

		scrollTo.scrollIntoView(true);

		increment += 1;
	}

	backward() {}
}

const slid = new Slider();
// move forward slide, when clicking button right
btnRight.addEventListener("click", () => slid.forward());

// move backward slide when clicking left button
// btnLeft.addEventListener("click", () => backward());

// // automatic slide movement
// setInterval(() => {
// 	if (i === carousel.children.length - 1) i = 0;
// 	forward();
// }, 7000);
console.log('hello');
