let element = document.querySelector("em");

function updateName() {
	let firstName = prompt("What is your name?");
	
	element.textContent = firstName;
};
element.addEventListener("click", updateName);