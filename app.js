const reset = document.querySelector('.btn__reset');
let overlay = document.querySelector('#overlay');
const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let ul = phrase.querySelector('ul');

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
	//let selectedPhrase = getRandomPhraseAsArray(phrases);
	//addPhraseToDisplay(selectedPhrase);

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

qwerty.addEventListener('click' ,  (event) =>{
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

	const checkWin = () => {
		let show = document.querySelectorAll('.show');
		let letter = document.querySelectorAll('.letter');

		if( show.length == letter.length) { 

			let h3 = document.createElement('h3');
			h3.textContent = 'Congratuations you\'ve won!';
			overlay.append(h3);
			let overlay2 = reset.parentNode;
			console.log(overlay2);
			overlay2.removeChild(reset);
			let button = document.createElement('button');
			button.textContent = 'Sucess! Start Again';
			overlay.append(button);
			overlay.style.display = 'block';

						
			button.addEventListener('click', () => {

				resetGame(); 
				//let selectedPhrase = getRandomPhraseAsArray(phrases);
				//console.log(selectedPhrase);
				//addPhraseToDisplay(selectedPhrase);				
			});




		} else if (missed == 5){
			let h3 = document.createElement('h3');
			let overlay2 = reset.parentNode;
			console.log(overlay2);
			overlay2.removeChild(reset);
			h3.textContent = 'You lose!';
			overlay.append(h3);


			let button = document.createElement('button');
			button.textContent = 'Failure! Start Again';
			overlay.append(button); 
			overlay.style.display = 'block';

			button.addEventListener('click', () => {
				resetGame();	
				let selectedPhrase = getRandomPhraseAsArray(phrases);
				console.log(selectedPhrase);
				addPhraseToDisplay(selectedPhrase);			
			});


		}


	}// checkWin
	checkWin();
	

	const resetGame = () => {
		
		const tries = document.querySelectorAll('.tries');
		let chosen = document.querySelectorAll('.chosen');
		let ul = document.querySelector('ul');		
		let phrase = ul.parentNode;
		console.log(phrase);
		phrase.removeChild(ul);
		ul = document.createElement('ul');
		phrase.appendChild(ul);
		


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
