"use strict";

const body = document.querySelector("body");
const searchInput = document.querySelector("#js-search input");

body.addEventListener("click", (event) => {
	if(event.target.placeholder === "search"){
		event.target.style.width = "100%";
	}else{
		searchInput.style.width = "50%";
	}
})