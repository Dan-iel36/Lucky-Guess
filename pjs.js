let numberToFind = Math.floor(Math.random() * 5) + 1 ;
	console.log(numberToFind)
var input = document.getElementById("addInfo");

document.addEventListener("submit", function(event) {
	event.preventDefault();
	let userInput = document.getElementById("input").value;

	if (userInput == numberToFind) {
		console.log('wow c\'est exact, parfait' )
		console.log(numberToFind);
		console.log(userInput);
	} else if (userInput < numberToFind) {
		console.log('c\'est plus, devenir moins fort.')
		console.log(numberToFind);
		console.log(userInput);
	} else {
		console.log('c\'est moins, devenir plus fort.')
		console.log(numberToFind);
		console.log(userInput);
	};


})

    


