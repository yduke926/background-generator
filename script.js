var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomColor = document.querySelector(".btn");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomColorPicker(){
	var number = " ";
	number = Math.floor(Math.random()*16777215).toString(16); while (number.length < 6) {
		number = "0" + number;
	}
	return "#" + number;
	}


function setRandomNumber(){
	color1.value = randomColorPicker();setGradient();
	color2.value = randomColorPicker();setGradient();
}

randomColor.addEventListener("click", setRandomNumber);
window.addEventListener("load", setGradient);
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

