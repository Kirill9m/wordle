/*
Woordle game
1. The algorithm chooses a word.
loop(2-3-4)
2. The player writes a word by guessing.
3. If true, the player guessed the right word and returns true.
4. If false, the algorithm fills in the characters that the right word contains.
*/

/**
 *  @description Checks which characters match and their positions
 *
 * Returns array(with two attributes letter and result) with object, one for each character in the same position as in the guessed word.
 *
 * 'incorrect': Not present in the other word.
 *
 * 'misplaced': Present in the other word but in a different position.
 *
 * 'correct': Correct position in the other word.
 */
export function checkWord(guessed, right) {
  const word = guessed.toLowerCase().split("");
  const rightWord = right.toLowerCase().split("");

  if (word.join("") === rightWord.join("")) {
    return true;
  } else if (guessed !== right) {
    const wordObject = word.map((letter, index) => {
        if(letter === rightWord[index]){
          return { letter, result: 'correct' };
        }else if(rightWord.includes(letter)){
          return { letter, result: 'misplaced' };
        }else {
          return { letter, result: 'incorrect' };
        }
      }
    );
    return wordObject;
  }
}


/**
 *  @description This function is selecting a word to play with
 *
 * Returns randomly selected word
 *
 * Takes: A list of words
 *
 * A number indicating the desired length
 * 
 * An indication of whether the same letter can appear more than once in the word, or if all letters must be unique
 * 
 * Randomly selects a word from the list that meets the criteria specified by the other parameters
 *
 * Handles situation that arises when no matching word is found
 */
export function chooseWord(list, length, uni){
  return list[1];
}
