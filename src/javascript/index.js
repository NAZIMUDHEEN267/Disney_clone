import video from "./video.js";

// dom variables
const body = document.querySelector("body");
const searchInput = document.querySelector("#js-search input");
const carousel = document.getElementById("js-carousel");
const btnLeft = document.getElementById("js-btn-left");
const btnRight = document.getElementById("js-btn-right");
const posterContainer = [...document.querySelectorAll(".poster__container")];
const posterItem = posterContainer[0].firstElementChild;
const posterBtnLeft = [...document.querySelectorAll(".poster #js-btn-left")];
const posterBtnRight = [...document.querySelectorAll(".poster #js-btn-right")];

// using for slider movement function
let move = 0;

// search input event listener
body.addEventListener("click", (event) => {
	if (event.target.placeholder === "search") {
		event.target.style.width = "100%";
	} else {
		searchInput.style.width = "50%";
	}
});

// for slider count
let increment = 0;

// slider class for banner movement and creation
class Slider {
	// slider content creator function
	creator() {
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
									<span class="point"></span>
									<span class="star"></span>
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

				// star creation for slider
				document.querySelectorAll(".genre").forEach((element) => {
					// get random number between 5 and 0
					const randomNumber = (Math.random() * 5).toFixed(1);
					const integer = Math.floor(randomNumber);

					element.firstElementChild.innerHTML = randomNumber;

					let fullStar = "";

					for (let i = 1; i <= integer; i++) {
						fullStar += "&#9733;";
					}

					const blankCount = 5 - integer;
					let blankStar = "";
					for (let i = 1; i <= blankCount; i++) {
						blankStar += "&#9734;";
					}

					element.children[1].innerHTML = fullStar + blankStar;
				});
				// get max width and min width of the carousel container
				this.minWidth = window.screen.availWidth;
				this.maxWidth =
					(carousel.children.length - 1) * window.screen.availWidth;
			});
	}

	// forward function for move slider forward
	forward() {
		if (move !== this.maxWidth) {
			move += window.screen.availWidth;
			carousel.scrollTo(move, 0);
			btnLeft.style.color = "#fff";
		}
	}

	// backward function for move slider backward
	backward() {
		if (move > 0) {
			move -= window.screen.availWidth;
			carousel.scrollTo(move, 0);
			btnRight.style.color = "#fff";
		}
	}
}

// instance of slider class
const slider = new Slider();

// slider button color change
setInterval(() => {
	if (move === 0) {
		btnLeft.style.color = "#54524c";
	} else if (move === slider.maxWidth) {
		btnRight.style.color = "#54524c";
	}
}, 100);

// creating slider contents
slider.creator();

btnRight.addEventListener("click", () => {
	slider.forward();
});

btnLeft.addEventListener("click", () => {
	slider.backward();
});

// media functions
function line() {
	document.querySelector(
		"table"
	).innerHTML = `<tr class="first-row" id="js-row">
	<td><a href="#">about disney <sup style="margin: 0;">+</sup> hotstar</a></td>
	<td><a href="#">terms of use</a></td>
	<td><a href="#">privacy policy</a></td>
	<td><a href="#">FAQ</a></td>
	<td><a href="#">feedback</a></td>
	<td><a href="#">careers</a></td>
	</tr>`;
}

function lineBreak() {
	const content = `<tr id="js-second-row">
		<td><a href="#"/>FAQ</td>
		<td><a href="#"/>feedback</td>
		<td><a href="#"/>careers</td>
		</tr>`;

	const child = document.querySelector("table tr").children;

	// remove overflowing elements
	for (let i = 3; i < child.length; i++) {
		child[i].remove();
	}

	// adding second row
	const secondRow = document.getElementById("js-second-row");

	if (!secondRow) {
		const row = document.getElementById("js-row");
		row.insertAdjacentHTML("afterend", content);
	}
}

// when user using different size
window.addEventListener("resize", (e) => {
	if (e.target.innerWidth >= 1024) {
		line();
	} else {
		lineBreak();
	}
});

// when user open first time
if (window.screen.width >= 1024) {
	line();
} else {
	lineBreak();
}

// ================ poster section

// window screen width
let width = window.screen.width;

posterBtnRight.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		posterContainer[i].scrollTo((width += posterItem.clientWidth), 0);
	});
});

posterBtnLeft.forEach((btn, i) => {
	btn.addEventListener("click", () => {
		posterContainer[i].scrollTo(0, 0);
	});
});

video(posterContainer);
