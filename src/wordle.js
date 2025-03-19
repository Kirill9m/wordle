/*
1. The algorithm chooses a word.
loop(2-3-4)
2. The player writes a word by guessing.
3. If true, the player guessed the right word and returns 1.
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
export function checkWord(guessed, right){
  const word = guessed.toLowerCase().split('');

  if(guessed === right){
    return true;
  } else if(guessed !== right){
     const wordObject = word.map(letter => ({ letter }));
    return  wordObject;
  }
}