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
		let guessedLetter;
	
		if (event.target.tagName == 'BUTTON') {
				 guessedLetter = event.target;
				 
		}

	selectedPhrase = document.querySelectorAll('.letter');	

	checkLetter = (guessedLetter) => {
			let letterFound =null;

			
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

	

	checkWin = () => {
		let show = document.querySelectorAll('.show');
		let letter = document.querySelectorAll('.letter');
		console.log(show.length + " " + letter.length);


		if( show.length == letter.length) { 

			let h3 = document.createElement('h3');
			h3.textContent = 'Congratuations you\'ve won!';
			overlay.append(h3);

			let button = document.createElement('button');
			button.textContent = 'Sucess! Start Again'
			overlay.append(button);
						
			button.addEventListener('click', () => {
				
			});
;

			overlay.style.display = 'block';


		} else if (missed == 5){
			let h3 = document.createElement('h3');
			h3.textContent = 'You lose!'
			overlay.append(h3);

			let button = document.createElement('button');
			button.textContent = 'Failure! Start Again'
			overlay.append(button); 
			overlay.style.display = 'block';

			button.addEventListener('click', () => {
				
			});


		}


	}
	checkWin();
});
