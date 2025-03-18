import { checkWord } from "./wordle";

test('should return object with specific properties', () => {
  let word = checkWord('CYCLA', 'HALLÅ');
  expect(word).toBe(1);
});