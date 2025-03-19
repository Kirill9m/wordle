import { checkWord } from "./wordle";
import { describe, expect, it } from "@jest/globals";
/*
  The plan is:
    Check if the words match
    if not
      Verify that we receive an object
      Object has the correct properties
*/

describe("checkWord()", () => {
  it("should return true if word is correct", () => {
    const output = checkWord('Worms', 'Worms');
    expect(output).toEqual(true);
  });

  it("if the words are not the same should return any array", () => {
    const output = checkWord('Worms', 'Worm');
    expect(output).toEqual(expect.any(Array));
  });

  it("If the words are not the same, it should split the word into characters and store them in an object as letters and convert them to lowercase", () => {
    const output = checkWord('Sword', 'Worms');
    expect(output).toEqual([
      {letter: 's'},
      {letter: 'w'},
      {letter: 'o'},
      {letter: 'r'},
      {letter: 'd'}
    ]);
  });

});
