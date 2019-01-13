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
	

	checkLetter = (guessedLetter) => {


			
		for(let i = 0; i < selectedPhrase.length; i++){ 

			let selectedLetter = selectedPhrase[i].textContent.toLowerCase();
			

				
			if (selectedLetter == guessedLetter.textContent){
				selectedPhrase[i].className = 'show';
				guessedLetter.className = 'chosen';
				guessedLetter.setAttribute('disabled', 'true');				
				

			} else {
				guessedLetter.className = 'chosen ';
				guessedLetter.setAttribute('disabled', 'true');
				letterFound = null;
				console.log("letter not found");
				
			}


		}

		return  letterFound; 
	
	}// end of checkedLetter

	
	 let letterFound2 = checkLetter(guessedLetter);




	const tries = document.querySelectorAll('.tries');
	if (letterFound2 === null){
		missed++;
		tries[missed].style.display = 'none';

	}


});
