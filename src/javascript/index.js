// dom variables
const body = document.querySelector("body");
const searchInput = document.querySelector("#js-search input");
const carousel = document.getElementById("js-carousel");
const btnLeft = document.getElementById("js-btn-left");
const btnRight = document.getElementById("js-btn-right");
const posterContainer = document.querySelector(".poster__container");
const posterBtnLeft = document.querySelector(".poster #js-btn-left");
const posterBtnRight = document.querySelector(".poster #js-btn-right");

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

				// get max width and min width of the carousel container
				this.maxWidth =
					(carousel.children.length - 1) * window.screen.availWidth;
					console.log(this.maxWidth);
					this.minWidth = window.screen.availWidth;
			});
	}

	// forward function for move slider forward
	forward() {
		if (move !== this.maxWidth) {
			move += window.screen.availWidth;
			carousel.scrollTo(move, 0);
		}
	}

	// backward function for move slider backward
	backward() {
		if (move > this.minWidth) {
			console.log(this.minWidth);
			move -= window.screen.availWidth;
			carousel.scrollTo(550, 0);
		}
	}

}

// instance of slider class
const slider = new Slider();

// creating slider contents
slider.creator();

// button color changer
setInterval(() => {
	if(move === slider.maxWidth) btnRight.style.color = "#4f4d46";
	else if(move === slider.minWidth) btnLeft.style.color = "#4f4d46";	
 }, 100)



btnRight.addEventListener("click", () => {
	slider.forward();
});

btnLeft.addEventListener("click", () => {
	slider.backward();
});
