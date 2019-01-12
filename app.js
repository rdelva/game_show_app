const reset= document.querySelector('.btn__reset');
let overlay = document.querySelector('#overlay');
const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
let phrases = [
				'Wild Goose Chase',
				'Off with his head',
				'Love is Blind',
				'All you need is love',
				'Carpe diem'
				 ];


reset.addEventListener('click', () => {
	
	overlay.style.display ='none';
	let selectedPhrase = getRandomPhraseAsArray(phrases);
	addPhraseToDisplay(selectedPhrase);

});



getRandomPhraseAsArray = (phrases) => {
	 let numOfphrases = phrases.length;
	 let selectItem  = Math.floor(Math.random() * numOfphrases);
	 let phraseChosen = phrases[selectItem];
	 let phraseLength = phraseChosen.length;
	 let splitPhrase = [];
	 for (let i = 0; i < phraseLength; i++){
	 	splitPhrase.push(phraseChosen[i]);
	 }

	 return splitPhrase;
}


addPhraseToDisplay = (selectedPhrase) => {

	for (let i = 0; i < selectedPhrase.length; i++) {
		//console.log(selectedPhrase[i]);
		let li = document.createElement('li');
		if (selectedPhrase[i] != " ") {
			li.className = 'letter'
			li.textContent = selectedPhrase[i];	
			phrase.appendChild(li);
		}else {
			li.className = 'space'
			li.textContent = selectedPhrase[i];	
			phrase.appendChild(li);
		}
	}

}

qwerty.addEventListener('click' ,  (event) =>{

	let guessedLetter = event.target;
	let point = 0;
	selectedPhrase = document.querySelectorAll('.letter');
	//let li = document.querySelectorAll('li');
		//console.log(selectedPhrase.length);

	checkLetter = (guessedLetter) => {

		for(let i = 0; i < selectedPhrase.length; i++){ 

			let letterFound = selectedPhrase[i].textContent.toLowerCase();
				
			if (letterFound === guessedLetter.textContent){
				selectedPhrase[i].className = 'show';
				guessedLetter.className = 'chosen';

			} else {
				guessedLetter.className = 'chosen';
				return null;

			}

		}

	}

	
	checkLetter(guessedLetter);

});
