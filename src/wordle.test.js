import { checkWord } from "./wordle";
import { describe, expect, it } from "@jest/globals";

describe("checkWord()", () => {
  it("should return true if word is correct", () => {
    const output = checkWord('Worms', 'Worms');
    expect(output).toEqual(true);
  });
});
