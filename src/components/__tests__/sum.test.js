import sum from "../sum";

describe("Test for sum", () => {
  //spec -> pruebas
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});