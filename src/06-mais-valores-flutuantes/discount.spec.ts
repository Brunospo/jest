import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from "./discount";

const createSup = (className: new () => Discount) => new className();

describe("Test class Discoun", () => {
  it("Shouldn't have discount", () => {
    const sut = createSup(NoDiscount);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it("Should apply 50% discount", () => {
    const sut = createSup(FiftyPercentDiscount);
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it("Should apply 10% discount", () => {
    const sut = createSup(TenPercentDiscount);
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
