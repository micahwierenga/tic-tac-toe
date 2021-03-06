// X and O Selectors

var selectorX = "X";

var selectorO = "O";

// Empty Array

var moveTracker = [];

// Cell Functions

var cell1 = document.getElementById('cell1');
var clickCell1 = cell1.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell1.textContent = selectorX;
	cell1.setAttribute("class", "printRed");
	moveTracker.push(selectorX);
} else {
	cell1.textContent = selectorO;
	moveTracker.push(selectorO);
	cell1.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell2 = document.getElementById('cell2');
var clickCell2 = cell2.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell2.textContent = selectorX;
	moveTracker.push(selectorX);
	cell2.setAttribute("class", "printRed");
} else {
	cell2.textContent = selectorO;
	moveTracker.push(selectorO);
	cell2.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell3 = document.getElementById('cell3');
var clickCell3 = cell3.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell3.textContent = selectorX;
	moveTracker.push(selectorX);
	cell3.setAttribute("class", "printRed");
} else {
	cell3.textContent = selectorO;
	moveTracker.push(selectorO);
	cell3.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell4 = document.getElementById('cell4');
var clickCell4 = cell4.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell4.textContent = selectorX;
	moveTracker.push(selectorX);
	cell4.setAttribute("class", "printRed");
} else {
	cell4.textContent = selectorO;
	moveTracker.push(selectorO);
	cell4.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell5 = document.getElementById('cell5');
var clickCell5 = cell5.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell5.textContent = selectorX;
	moveTracker.push(selectorX);
	cell5.setAttribute("class", "printRed");
} else {
	cell5.textContent = selectorO;
	moveTracker.push(selectorO);
	cell5.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell6 = document.getElementById('cell6');
var clickCell6 = cell6.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell6.textContent = selectorX;
	moveTracker.push(selectorX);
	cell6.setAttribute("class", "printRed");
} else {
	cell6.textContent = selectorO;
	moveTracker.push(selectorO);
	cell6.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell7 = document.getElementById('cell7');
var clickCell7 = cell7.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell7.textContent = selectorX;
	moveTracker.push(selectorX);
	cell7.setAttribute("class", "printRed");
} else {
	cell7.textContent = selectorO;
	moveTracker.push(selectorO);
	cell7.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell8 = document.getElementById('cell8');
var clickCell8 = cell8.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell8.textContent = selectorX;
	moveTracker.push(selectorX);
	cell8.setAttribute("class", "printRed");
} else {
	cell8.textContent = selectorO;
	moveTracker.push(selectorO);
	cell8.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

var cell9 = document.getElementById('cell9');
var clickCell9 = cell9.addEventListener("click", function() {
	if (moveTracker.length % 2 === 0) {
	cell9.textContent = selectorX;
	moveTracker.push(selectorX);
	cell9.setAttribute("class", "printRed");
} else {
	cell9.textContent = selectorO;
	moveTracker.push(selectorO);
	cell9.setAttribute("class", "printBlue");
}
checkWinX();
checkWinO();
});

// Check Win Functions

function checkWinX() {
	if (cell1.textContent === selectorX && cell2.textContent === selectorX && cell3.textContent === selectorX) {
		alert("X wins");
	}
	else if (cell4.textContent === selectorX && cell5.textContent === selectorX && cell6.textContent === selectorX) {
		alert("X wins");
	}
	else if (cell7.textContent === selectorX && cell8.textContent === selectorX && cell9.textContent === selectorX) {
		alert("X wins");
	}
	else if (cell1.textContent === selectorX && cell4.textContent === selectorX && cell7.textContent === selectorX) {
		alert("X wins");
	}
	else if (cell2.textContent === selectorX && cell5.textContent === selectorX && cell8.textContent === selectorX) {
		alert("X wins");
	}
	else if (cell3.textContent === selectorX && cell6.textContent === selectorX && cell9.textContent === selectorX) {
		alert("X wins");
	}
	else if (cell1.textContent === selectorX && cell5.textContent === selectorX && cell9.textContent === selectorX) {
		alert("X wins");
	}
	else if (cell3.textContent === selectorX && cell5.textContent === selectorX && cell7.textContent === selectorX) {
		alert("X wins");
	} else {

	}
};

function checkWinO() {
	if (cell1.textContent === selectorO && cell2.textContent === selectorO && cell3.textContent === selectorO) {
		alert("O wins");
	}
	else if (cell4.textContent === selectorO && cell5.textContent === selectorO && cell6.textContent === selectorO) {
		alert("O wins");
	}
	else if (cell7.textContent === selectorO && cell8.textContent === selectorO && cell9.textContent === selectorO) {
		alert("O wins");
	}
	else if (cell1.textContent === selectorO && cell4.textContent === selectorO && cell7.textContent === selectorO) {
		alert("O wins");
	}
	else if (cell2.textContent === selectorO && cell5.textContent === selectorO && cell8.textContent === selectorO) {
		alert("O wins");
	}
	else if (cell3.textContent === selectorO && cell6.textContent === selectorO && cell9.textContent === selectorO) {
		alert("O wins");
	}
	else if (cell1.textContent === selectorO && cell5.textContent === selectorO && cell9.textContent === selectorO) {
		alert("O wins");
	}
	else if (cell3.textContent === selectorO && cell5.textContent === selectorO && cell7.textContent === selectorO) {
		alert("O wins");
	} else {
		
	}
};

// Reset Button Functions

function reload() {
	location.reload();
}

var getResetButton = document.getElementById('resetButton');
var resetButton = getResetButton.addEventListener("click", reload);

// ________________________________________________________

// Discarded Code


// function resetBoard() {
// 	moveTracker = [];
// }

// function clearCells() {
// 	var clearCell1 = document.getElementById('cell1').innerHTML = "";
// 	var clearCell2 = document.getElementById('cell2').innerHTML = "";
// 	var clearCell3 = document.getElementById('cell3').innerHTML = "";
// 	var clearCell4 = document.getElementById('cell4').innerHTML = "";
// 	var clearCell5 = document.getElementById('cell5').innerHTML = "";
// 	var clearCell6 = document.getElementById('cell6').innerHTML = "";
// 	var clearCell7 = document.getElementById('cell7').innerHTML = "";
// 	var clearCell8 = document.getElementById('cell8').innerHTML = "";
// 	var clearCell9 = document.getElementById('cell9').innerHTML = "";
// }

// var getResetButton = document.getElementById('resetButton');
// var resetButton = getResetButton.addEventListener("click", function() {
// 	resetBoard();
// 	clearCells();
// });


// Make X and O Functions

// function makeX() {
// 	var x = document.getElementsByClassName('gameCell');
// 	x.textContent = selectorX;
// 	selectorX.setAttribute("class", "printX");
// }

// function makeO() {
// 	var o = document.getElementById('gameCell');
// 	o.textContent = selectorO;
// }

// // Print X and O Function

// function makeMove() {
// if (moveTracker.length % 2 === 0) {
// 	makeX();
// 	moveTracker.push(selectorX);
// } else {
// 	makeO();
// 	moveTracker.push(selectorO);
// }
// }

// function resetBoard() {
// 	moveTracker = [];

// 	var clearCell1 = document.getElementById('cell1').innerHTML = "";
// 	var clearCell2 = document.getElementById('cell2').innerHTML = "";
// 	var clearCell3 = document.getElementById('cell3').innerHTML = "";
// 	var clearCell4 = document.getElementById('cell4').innerHTML = "";
// 	var clearCell5 = document.getElementById('cell5').innerHTML = "";
// 	var clearCell6 = document.getElementById('cell6').innerHTML = "";
// 	var clearCell7 = document.getElementById('cell7').innerHTML = "";
// 	var clearCell8 = document.getElementById('cell8').innerHTML = "";
// 	var clearCell9 = document.getElementById('cell9').innerHTML = "";
// }
// ________________________________________________________

// Notes

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
	// if cell4 === X && cell5 === X && cell6 === X, X wins
	// if cell7 === X && cell8 === X && cell9 === X, X wins
	// if cell1 === X && cell4 === X && cell7 === X, X wins
	// if cell2 === X && cell5 === X && cell8 === X, X wins
	// if cell3 === X && cell6 === X && cell9 === X, X wins
	// if cell1 === X && cell5 === X && cell9 === X, X wins
	// if cell3 === X && cell5 === X && cell7 === X, X wins

	// if cell1 === O && cell2 === O && cell3 === O, O wins
	// if cell4 === O && cell5 === O && cell6 === O, O wins
	// if cell7 === O && cell8 === O && cell9 === O, O wins
	// if cell1 === O && cell4 === O && cell7 === O, O wins
	// if cell2 === O && cell5 === O && cell8 === O, O wins
	// if cell3 === O && cell6 === O && cell9 === O, O wins
	// if cell1 === O && cell5 === O && cell9 === O, O wins
	// if cell3 === O && cell5 === O && cell7 === O, O wins

// Medium
// print x's and o's on board
// if certain patterns achieved, declare winner
// reset

// Low
// if a div is clicked, print x or o and change color
// 1. make each div clickable
// 2. when they are clicked, display a red X or green O
// 2a. create an array that holds/records each click
// 2b. if the array index is even, display red X, but if the array index is odd, display green O
// 2c. test to see if the array index is even (for loop?)

// if a certain pattern is achieved, declare winner

// reset the board
// 1. clear array


// print character in whatever cell is clicked on

// if cell is clicked on print char
