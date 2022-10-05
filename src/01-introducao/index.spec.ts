import sum from "./index";

describe("Testing sum function (using it)", () => {
  it("Should be able to sum two numbers", () => {
    const result = sum(1, 3);
    expect(result).toEqual(4);
  });
});

//Or

describe("Testing sum function (using test)", () => {
  it("Should be able to sum two numbers", () => {
    const result = sum(3, 3);
    expect(result).not.toEqual(4);
  });
});
