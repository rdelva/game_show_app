const startButton = document.querySelector('a');
let overlay = document.querySelector('#overlay');
const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let ul = phrase.querySelector('ul');
let title = document.querySelector('.title');
let resetButton = document.createElement('a');


let missed = 0;
let phrases = [
				'Wild Goose Chase',
				'Off with his head',
				'Love is Blind',
				'All you need is love',
				'Carpe Diem'
				 ];


startButton.addEventListener('click', () => {
	
	overlay = startButton.parentNode;
	overlay.removeChild(startButton); 
	overlay.style.display ='none';
});


const getRandomPhraseAsArray = (phrases) => {
	 let numOfphrases = phrases.length; 
	 let selectItem  = Math.floor(Math.random() * numOfphrases ); 
	 let phraseChosen = phrases[selectItem];
	 let phraseLength = phraseChosen.length;
	 let splitPhrase = [];
	 for (let i = 0; i < phraseLength; i++){
	 	splitPhrase.push(phraseChosen[i]);
	 }

	 return splitPhrase;
}

let selectedPhrase = getRandomPhraseAsArray(phrases);


const addPhraseToDisplay = (selectedPhrase) => {

	for (let i = 0; i < selectedPhrase.length; i++) {
		
		let li = document.createElement('li');
		if (selectedPhrase[i] != " ") {
			li.className = 'letter';
			li.textContent = selectedPhrase[i];	
			ul.appendChild(li);
		}else {
			li.className = 'space';
			li.textContent = selectedPhrase[i];	
			ul.appendChild(li);
		}
	}

}// addPhraseToDisplay

addPhraseToDisplay(selectedPhrase);

qwerty.addEventListener('click', (event) => {
		let guessedLetter;
		if (event.target.tagName == 'BUTTON') {
				 guessedLetter = event.target;
				 
		}

	let selectedPhrase = document.querySelectorAll('.letter');

	const checkLetter = (guessedLetter) => {
		let letterFound = null;	
		for(let i = 0; i < selectedPhrase.length; i++){ 

			let selectedLetter = selectedPhrase[i].textContent.toLowerCase();
			if (selectedLetter == guessedLetter.textContent){
				selectedPhrase[i].className = 'show letter';
				guessedLetter.className = 'chosen';
				guessedLetter.setAttribute('disabled', 'true');	
				letterFound = guessedLetter;
							
				

			} else {
				guessedLetter.className = 'chosen ';
				guessedLetter.setAttribute('disabled', 'true');
				if (i == selectedPhrase.length) {
				letterFound = null;
	
				}
			}


		}

		return  letterFound; 
	
	}// end of checkedLetter

	
	 let letterFound2 = checkLetter(guessedLetter);
	const tries = document.querySelectorAll('.tries');	
	if (letterFound2 == null && missed <= tries.length ){ 		
			tries[missed].style.display = 'none';
			missed++;

	}

	const gameRestart = () => {


		resetButton.textContent = 'Start Again';
		overlay.append(resetButton);
		resetButton.className = "resetButton btn__reset";
		resetButton.style.display = 'none';

	}
	gameRestart();

	const checkWin = () => {
		let show = document.querySelectorAll('.show');
		let letter = document.querySelectorAll('.letter');
		let resetButton = document.querySelector('.resetButton');

		if( show.length == letter.length) { 

			setTimeout(function(){
				overlay.removeAttribute('class');
				overlay.className = 'win';
				title.textContent = 'Congratuations you\'ve won!';
				resetButton.style.display = 'inline-block';			
				overlay.style.display = 'flex';
			},1000);
			resetButton.addEventListener('click', () => {
 				resetGame(); 
 				resetButton.style.display = 'none';
			});
		} else if (missed == 5){

			setTimeout(function(){
				overlay.removeAttribute('class');
				overlay.className = 'lose';
				title.textContent = 'Failure! You lose';
				resetButton.style.display = 'inline-block';			
				overlay.style.display = 'flex';
			},1000);			
			resetButton.addEventListener('click', () => {
 				resetGame(); 
 				resetButton.style.display = 'none';
			});
		}


	}// checkWin
	checkWin();
	

	const resetGame = () => {
		const tries = document.querySelectorAll('.tries');
		let chosen = document.querySelectorAll('.chosen');
		ul.innerHTML = "";	

		let selectedPhrase = getRandomPhraseAsArray(phrases);
		addPhraseToDisplay(selectedPhrase);


		// to display the hearts	
		for (let i = 0; i < tries.length; i++){
			tries[i].style.display = 'inline-block';
		}

		//remove disables and chosen classes 
		for (let i=0; i < chosen.length; i++ ){
			chosen[i].removeAttribute('class');	
			chosen[i].removeAttribute('disabled'); 
		}		
		overlay.style.display = 'none';
		
		missed = 0;


	}




});
