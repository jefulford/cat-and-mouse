//select everything
var atmosphere = document.querySelector(".atmosphere");

var closeButton = document.getElementById("lightbox-close");
var body = document.querySelector("body");
//make a function to make random top & left values
var newTop = 0;
var newLeft = 0;

function topAndLeft() {
	newLeft = Math.floor(Math.random() * (screen.width - 350)) + "px";
	newTop = Math.floor(Math.random() * (screen.height - 400)) + "px";
	atmosphere.style.left = newLeft;
	atmosphere.style.top = newTop;
}

//add an event listener so when cursor mouseover .lightbox-content or preferably .lightbox-content margin that it would run the function and move the box

atmosphere.addEventListener("mouseover", topAndLeft);

//move far way from mouse

closeButton.addEventListener("click", function(){
	atmosphere.classList.add("hidden");
	body.textContent = "you won!";
})