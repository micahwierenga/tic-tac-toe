// need an array to track moves

// need a variable for each square

// on click, if odd click, append X to cell, else append O to square

// on click, create div with x or o in it

// if it's the odd number in the array, makeX, else makeO

// on click:
// 1. determine if it is an odd click or even click
// does the index number of the click have a remainder when divided by 2 or not
// 2. if even, print X, if odd, print O
// 3. once a click has been made, store that click in an empty array
// 4. if cell1 === X && cell2 === X && cell3 === X, X wins
	if cell4 === X && cell5 === X && cell6 === X, X wins
	if cell7 === X && cell8 === X && cell9 === X, X wins
	if cell1 === X && cell4 === X && cell7 === X, X wins
	if cell2 === X && cell5 === X && cell8 === X, X wins
	if cell3 === X && cell6 === X && cell9 === X, X wins
	if cell1 === X && cell5 === X && cell9 === X, X wins
	if cell3 === X && cell5 === X && cell7 === X, X wins

	if cell1 === O && cell2 === O && cell3 === O, O wins
	if cell4 === O && cell5 === O && cell6 === O, O wins
	if cell7 === O && cell8 === O && cell9 === O, O wins
	if cell1 === O && cell4 === O && cell7 === O, O wins
	if cell2 === O && cell5 === O && cell8 === O, O wins
	if cell3 === O && cell6 === O && cell9 === O, O wins
	if cell1 === O && cell5 === O && cell9 === O, O wins
	if cell3 === O && cell5 === O && cell7 === O, O wins



var selectorX = "X";

var selectorO = "O";

var moveTracker = [];

function makeX() {
	var x = document.getElementsByClassName('gameCell');
	x.textContent = selectorX;
	x.setAttribute("class", "printX");
}

function makeO() {
	var o = document.getElementById('gameCell');
	o.textContent = selectorO;
}

function makeMove() {
if (moveTracker.length % 2 === 0) {
	makeX();
	moveTracker.push(selectorX);
} else {
	makeO();
	moveTracker.push(selectorO);
}
}

var cell1 = document.getElementById('cell1');
var clickCell1 = cell1.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell1.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell1.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell2 = document.getElementById('cell2');
var clickCell2 = cell2.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell2.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell2.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell3 = document.getElementById('cell3');
var clickCell3 = cell3.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell3.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell3.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell4 = document.getElementById('cell4');
var clickCell4 = cell4.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell4.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell4.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell5 = document.getElementById('cell5');
var clickCell5 = cell5.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell5.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell5.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell6 = document.getElementById('cell6');
var clickCell6 = cell6.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell6.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell6.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell7 = document.getElementById('cell7');
var clickCell7 = cell7.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell7.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell7.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell8 = document.getElementById('cell8');
var clickCell8 = cell8.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell8.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell8.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

var cell9 = document.getElementById('cell9');
var clickCell9 = cell9.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell9.textContent = selectorX;
	moveTracker.push(selectorX);
} else {
	cell9.textContent = selectorO;
	moveTracker.push(selectorO);
}
});

function checkWin() {
	if cell4 === selectorX && cell5 === selectorX && cell6 === selectorX, X wins
	if cell7 === selectorX && cell8 === selectorX && cell9 === selectorX, X wins
	if cell1 === selectorX && cell4 === selectorX && cell7 === selectorX, X wins
	if cell2 === selectorX && cell5 === selectorX && cell8 === selectorX, X wins
	if cell3 === selectorX && cell6 === selectorX && cell9 === selectorX, X wins
	if cell1 === selectorX && cell5 === selectorX && cell9 === selectorX, X wins
	if cell3 === selectorX && cell5 === selectorX && cell7 === selectorX, X wins

	if cell1 === selectorO && cell2 === selectorO && cell3 === selectorO, O wins
	if cell4 === selectorO && cell5 === selectorO && cell6 === selectorO, O wins
	if cell7 === selectorO && cell8 === selectorO && cell9 === selectorO, O wins
	if cell1 === selectorO && cell4 === selectorO && cell7 === selectorO, O wins
	if cell2 === selectorO && cell5 === selectorO && cell8 === selectorO, O wins
	if cell3 === selectorO && cell6 === selectorO && cell9 === selectorO, O wins
	if cell1 === selectorO && cell5 === selectorO && cell9 === selectorO, O wins
	if cell3 === selectorO && cell5 === selectorO && cell7 === selectorO, O wins
}

// var cell2 = document.getElementById('cell2');
// var clickCell2 = cell2.addEventListener("click", function() {
// 	makeMove();
// });

// var cell3 = document.getElementById('cell3');
// var clickCell3 = cell3.addEventListener("click", function() {
// 	makeMove();
// });

// var cell4 = document.getElementById('cell4');
// var clickCell4 = cell4.addEventListener("click", function() {
// 	makeMove();
// });

// var cell5 = document.getElementById('cell5');
// var clickCell5 = cell5.addEventListener("click", function() {
// 	makeMove();
// });

// var cell6 = document.getElementById('cell6');
// var clickCell6 = cell6.addEventListener("click", function() {
// 	makeMove();
// });

// var cell7 = document.getElementById('cell7');
// var clickCell7 = cell7.addEventListener("click", function() {
// 	makeMove();
// });

// var cell8 = document.getElementById('cell8');
// var clickCell8 = cell8.addEventListener("click", function() {
// 	makeMove();
// });

// var cell9 = document.getElementById('cell9');
// var clickCell9 = cell9.addEventListener("click", function() {
// 	makeMove();
// });



// function makeRed() {
// 	var red = document.getElementById('cell1');
// 	red.setAttribute("class", "printRed");
// 	console.log('make red')
// }



