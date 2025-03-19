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

  it("should return an object if word is not a same", () => {
    const output = checkWord('Worms', 'Worm');
    expect(output).toEqual({});
  });
});
