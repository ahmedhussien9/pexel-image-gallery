import sum from "../helper/sum";

describe("Sum function test", () => {
  it("it should sum numbers correctly", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
