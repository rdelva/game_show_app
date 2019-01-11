const reset= document.querySelector('.btn__reset');
let overlay = document.querySelector('#overlay');
const qwerty = document.getElementById('qwerty');
let phrase = document.getElementById('phrase');
let missed = 0;
//let selectedPhrase;
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
	 let selectItem  = Math.floor(Math.random() * numOfphrases + 1);
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
		console.log(selectedPhrase[i]);
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


checkLetter = () =>{

}