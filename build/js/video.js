const video = posterContainer => {

	// poster Dom variable 
	const posters = document.querySelectorAll(".poster__item");

	// endpoints of the youtube videos
	const endPoints = {
		"container 1": {
			alien: "svnAD0TApb8",
			aquaMan: "WDkg3h8PCVU",
			avp2: "B2JPxMfoIes",
			"pale rider": "UdpjGSLB2JQ",
			cobain: "DsB6SzPV9B0",
			dark: "rrwycJ08PSA",
			drive: "KBiOF3y1W0Y",
			"fast and the furious 8": "JwMKRevYa_M",
			fightClub: "qtRKdVHc-cE",
			"v for vendetta": "lSA7mAHolAw"
		},
		"container 2": {
			"gangster squad": "LlbN5cQKZik",
			hangover: "tcdUhdOlz9M",
			ironMan: "8ugaeA-nMTc",
			"jab tak hei jaan": "v0UXgoJ9Shg",
			"rebel without a cause": "wXRgAXU1-T4",
			kaala: "mMCEvr3VWqQ",
			"lord of the rings": "v7v1hIkYH24",
			maleficent: "n0OFH4xpPr4",
			matrix: "9ix7TUGVYIo",
			"money power respect": ""
		},
		"container 3": {
			pacino: "losLAzU9YCk",
			pk: "SOXWc32k4zA",
			rambo: "2CRjdwRYQbU",
			"battlefield jd 2": "W-lwHrw_914",
			"sherlock holmes": "J7nJksXDBWc",
			skyfall: "6kw1UVovByw",
			"son of god": "-Hsl5UG9O_c",
			"t2 trainspotting": "imrJ34EgHEU",
			"the big bang theory": "WBb3fojgW0Q",
			"the croods": "4fVCKy69zUY"
		}
	};

	// pushing names to poster container movie names
	function getName(obj) {
		for (let i = 0; i < posterContainer.length; i++) {
			const id = "#js-id-" + i + " " + "#js-movie-name";
			const movieNames = [...document.querySelectorAll(id)];
			console.log(movieNames);
			const childObject = Object.entries(obj);
			childObject[i].forEach((item, index) => {
				if (index == 1) {
					for (const [num, key] of Object.entries(item).entries()) {
						movieNames[num].innerHTML = key[0];
						let receive = true;
						posters.forEach(poster => {
							poster.addEventListener("click", () => {
								const findElem = poster.parentElement.parentElement.nextElementSibling;
								const video = document.querySelectorAll('.video');
								video.forEach(videoContainer => {
									if (videoContainer === findElem) {
										videoContainer.classList.remove('display');
									} else {
										videoContainer.classList.add('display');
									}
								});
								const { firstElementChild: { firstElementChild: { firstElementChild } } } = poster;
								if (key[0].toUpperCase() === firstElementChild.innerText) {
									const url = `https://www.youtube.com/embed/${key[1]}?rel=0&showinfo=0`;
									if (findElem.children) {
										findElem.children[0].setAttribute("src", url);
									}
								}
							});
						});
					}
				}
			});
		}
	}
	getName(endPoints);
};

export default video;