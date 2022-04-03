const video = (posterContainer) => {
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
      "money power respect": "",
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
      "the croods": "4fVCKy69zUY",
    },
  };

  // pushing names to poster container movie names
  function getName(obj) {
    // iterating for get endpoints object key and values
    for (let i = 0; i < posterContainer.length; i += 1) {
      const id = `#js-id-${i} #js-movie-name`;
      const movieNames = [...document.querySelectorAll(id)];
      const childObject = Object.entries(obj);
      // this iterator used for give name for each and every single poster
      childObject[i].forEach((item, index) => {
        if (index === 1) {
          for (const [num, key] of Object.entries(item).entries()) {
            movieNames[num].innerHTML = key[0];
            posters.forEach((poster) => {
              poster.addEventListener("click", () => {
                const findElem = poster.parentElement.parentElement.nextElementSibling;
                const videos = document.querySelectorAll(".video");
                // if user click then the video container will show, otherwise that will be hide
                videos.forEach((videoContainer) => {
                  if (videoContainer === findElem) {
                    videoContainer.classList.remove("display");
                  } else {
                    videoContainer.classList.add("display");
                  }
                });
                // insert url in the embed tag
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

  // calling getName function
  getName(endPoints);
};

export default video;
