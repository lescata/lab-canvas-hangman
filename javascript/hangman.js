
class Hangman {
  constructor(words) {
    this.words = words;
    this.secretWord = this.pickWord(); // sw = resultat de picword
    this.letters= [];  // est un tableau 
    this.guessedLetters= "";  //est une chaine de character
    this.errorLeft=10;   // pv debut jeux 
  }

  pickWord() {
    const random = Math.floor(Math.random() * this.words.length);
    return this.words[random] //on arrondie inferieur le randomm entre 0 et longeur max du tableau
  }

  checkIfLetter(keyCode) {
    if(keyCode > 64 && keyCode < 91){
      return true
    } else {
    return false// si la key est entre 65 'a' et 90'z' vrais, si non faux
   }
  }

  checkClickedLetters(letter) {
    if (this.letters.includes(letter)){
      return false
    }else {
      return true//si cette lettre déjà clike, faux, si non vrais)
    }
  }

  addCorrectLetter(letter) {
  this.guessedLetters = letter //
  }

  addWrongLetter(letter) {
    this.errorLeft -= 1;
    this.guessedLetters.push(letter);
  }

  checkGameOver() {
  if (this.errorLeft <= 0){
    return false;
  }else{
    return true;
  }
  }

  checkWinner() {
    // ... your code goes here
  }
}

let hangman;

const startGameButton = document.getElementById('start-game-button');

if (startGameButton) {
  startGameButton.addEventListener('click', event => {
    hangman = new Hangman(['node', 'javascript', 'react', 'miami', 'paris', 'amsterdam', 'lisboa']);

    // HINT (uncomment when start working on the canvas portion of the lab)
    // hangman.secretWord = hangman.pickWord();
    // hangmanCanvas = new HangmanCanvas(hangman.secretWord);

    // ... your code goes here
  });
}

document.addEventListener('keydown', event => {
  // React to user pressing a key
  // ... your code goes here
});
