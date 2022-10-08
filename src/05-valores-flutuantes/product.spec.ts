import { Product } from "./product";

const createSut = () => new Product("Mouse", 100.8);

describe("Testing class Product", () => {
  afterEach(() => jest.clearAllMocks());

  it("Should return undefined", () => {
    const sut = createSut();

    expect(sut).toHaveProperty("name", "Mouse");
    expect(sut.price).toBeCloseTo(100.8);
  });
});
