/* State */

const state = {
	amount: 5
}

/* Dom caching */

const diceContainer = document.querySelector('.dice');
const gameOver = document.querySelector('.game-over');
const rollElement = document.querySelector('.roll');
const removeElement = document.querySelector('.remove');
const addElement = document.querySelector('.add');
const resetElement = document.querySelector('.reset');

/* Functions */

function resetFaces () {
	const dice = document.querySelectorAll('.die');
	dice.forEach(function (die) {
		die.src = 'images/default.png'
	})
}

function rollDice () {
	const dice = Array.from(document.querySelectorAll('.die'));
	for (i = 0; i < state.amount; i++) {
		const randomNumber = Math.round(Math.random() * 5) + 1;
		dice[i].src = 'images/d' + randomNumber + '.png';
	}
}

function removeDie () {
	const dice = Array.from(document.querySelectorAll('.die'));
	const lastDie = dice.slice(-1)[0];
	lastDie.remove();
	if (state.amount > 1) {
		state.amount--;
		addElement.setAttribute('data-disabled', 'false');
	} else {
		gameOver.style.display = 'flex';
		state.amount--;
		removeElement.setAttribute('data-disabled', 'true');
		addElement.setAttribute('data-disabled', 'true');
		rollElement.setAttribute('data-disabled', 'true');
	}
	resetFaces();
}

function attemptAddition () {
	if (state.amount < 4 && state.amount > 0) {
		addDie();
	} else if (state.amount < 5 && state.amount > 0) {
		addDie();
		addElement.setAttribute('data-disabled', 'true');
	} 	
}

function addDie () {
	const newDie = document.createElement('img');
	newDie.className = 'die';
	newDie.src = 'images/default.png';
	diceContainer.appendChild(newDie);
	resetFaces();
	state.amount++;
}

function resetDice () {
	state.amount = 0;
	diceContainer.innerHTML = '';
	for (i = 0; i < 5; i++) {
		addDie();
	}
	removeElement.setAttribute('data-disabled', 'false');
	addElement.setAttribute('data-disabled', 'true');
	rollElement.setAttribute('data-disabled', 'false');	
	gameOver.style.display = 'none';
}

/* Event Listeners */

rollElement.addEventListener('click', function () {
	rollDice();
});

removeElement.addEventListener('click', function () {
	removeDie();
});

addElement.addEventListener('click', function () {
	attemptAddition();
})

resetElement.addEventListener('click', function () {
	resetDice();
})

