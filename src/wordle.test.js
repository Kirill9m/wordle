import { checkWord } from "./wordle";
import { describe, expect, it } from "@jest/globals";
/*
  The plan is:
    Check if the words match(lowercase)
    if not
      Verify that we receive an array that splits to chars
      then array has the char as orbjects and correct properties
*/

describe("checkWord()", () => {
  it("should return true if words are same and lower case", () => {
    const output = checkWord('Worms', 'worms');
    expect(output).toEqual(true);
  });

  it("if the words are not the same should return any array", () => {
    const output = checkWord('Worms', 'Worm');
    expect(output).toEqual(expect.any(Array));
  });

  it("If the words are not the same, should split the word into characters and store it in an object as letters and convert it to lowercase", () => {
    const output = checkWord('SwЭrd', 'Worms');
    expect(output[2].letter).toEqual('э');
  });

  it("If the words are not the same, should check the char positions and place the correct answer in result", () => {
    const output = checkWord('CYCLA', 'HALLÅ');
    expect(output).toEqual([
      {letter: 'c', result: 'incorrect'},
      {letter: 'y', result: 'incorrect'},
      {letter: 'c', result: 'incorrect'},
      {letter: 'l', result: 'correct'},
      {letter: 'a', result: 'misplaced'}
    ]);
  });
});
