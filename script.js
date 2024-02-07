"use strict";

// **************** //
// DOM VARIABLES //
// **************** //

const questions = document.querySelectorAll(".question-heading");
const mainEl = document.querySelector("main");
const bodyEl = document.querySelector("body");

// **************** //
// GLOBAL VARIABLES //
// **************** //
let accordionState = true;
let mainElHeight = mainEl.clientHeight;
let windowBottom = window.innerHeight;

// **************** //
// FUNCTION //
// **************** //

// **************** //
// EVENT HANLDERS //
// **************** //

questions.forEach((el) =>
	el.addEventListener("click", function (e) {
		e.preventDefault();

		accordionState =
			el.children[1].getAttribute("src", '"icon-plus.svg"') ===
			"icon-plus.svg";

		accordionState === true
			? el.children[1].setAttribute("src", "icon-minus.svg")
			: el.children[1].setAttribute("src", "icon-plus.svg");

		el.nextElementSibling.classList.toggle("hide");

		document.addEventListener("scroll", function (e) {
			e.preventDefault();
			mainElHeight = mainEl.clientHeight;
			windowBottom = window.innerHeight;

			mainElHeight >= windowBottom - 100
				? (bodyEl.style.height = "95rem")
				: (bodyEl.style.height = "100vh");

			bodyEl.style.transition = "all 1s linear";
		});
	})
);
