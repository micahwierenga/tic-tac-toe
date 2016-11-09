// need an array to track moves

// need a variable for each square

var divCreate = document.createElement('div');


var selectorX = "X";

var selectorO = "O";



function makeX() {
	var x = document.getElementById('cell1');
	x.textContent = selectorX;
	x.setAttribute("class", "printX");
	console.log('make x')
}

function makeO() {
	var o = document.getElementById('cell1');
	o.textContent = selectorO;
	console.log('make o')
}

function makeRed() {
	var red = document.getElementById('cell1');
	red.setAttribute("class", "printRed");
	console.log('make red')
}



var cell1 = document.getElementById('cell1');
var clickCell1 = cell1.addEventListener("click", function() {
	makeX();
	makeRed();
});
console.log(cell1);

var cell2 = document.getElementById('cell2');
cell2.addEventListener("click", makeO);
console.log(cell2);

var cell3 = document.getElementById('cell3');
console.log(cell3);

var cell4 = document.getElementById('cell4');
console.log(cell4);

var cell5 = document.getElementById('cell5');
console.log(cell5);

var cell6 = document.getElementById('cell6');
console.log(cell6);

var cell7 = document.getElementById('cell7');
console.log(cell7);

var cell8 = document.getElementById('cell8');
console.log(cell8);

var cell9 = document.getElementById('cell9');
console.log(cell9);

function turnOnX () {
	console.log('starting');
}


// on click, if odd click, append X to cell, else append O to square

// on click, create div with x or o in it

// if it's the odd number in the array, makeX, else makeO