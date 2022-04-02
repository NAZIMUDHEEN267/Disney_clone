const video = (posterContainer) => {
	// endpoints of the youtube videos
	const endPoints = {
		"container 1": {
			alien: "svnAD0TApb8",
			aquaMan: "WDkg3h8PCVU",
			avp2: "B2JPxMfoIes",
			"pale rider": "UdpjGSLB2JQ",
			cobain: "Rvk1XOJYYfw",
			dark: "rrwycJ08PSA",
			drive: "KBiOF3y1W0Y",
			"fast and the furious 8": "JwMKRevYa_M",
			fightClub: "qtRKdVHc-cE",
			"v for vendetta": "lSA7mAHolAw",
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
			"money power respect": "o46A4wM-rG8",
		},
		"container 3": {
			pacino: "losLAzU9YCk",
			pk: "SOXWc32k4zA",
			rambo: "2CRjdwRYQbU",
			"battlefield jd 2": "W-lwHrw_914",
			"sherlock holmes": "J7nJksXDBWc",
			skyfall: "6kw1UVovByw",
			"son of god": "-Hsl5UG9O_c",
			"t2 trainspotting": "oQlaYKP996c",
			"the big bang theory": "WBb3fojgW0Q",
			"the croods": "4fVCKy69zUY",
		},
	};

	// pushing names to poster container movie names
	function getName(obj) {
		for (let i = 0; i < posterContainer.length; i++) {
			const movieNames = document.querySelectorAll(`#js-id-${[i]}`);
			const childObject = Object.entries(obj);
			childObject[i].forEach(i => {
				for (const iterator in `${i}${.}container ${[i]}`) {
					console.log(iterator);
				}
			})
		}
	}
	getName(endPoints);

	const video = Array.from(document.querySelectorAll(".video"));
	video.forEach((item) => {});

	const url = "https://www.youtube.com/watch?v=XtMThy8QKqU";
};

export default video;
