import { Discount } from "../06-mais-valores-flutuantes/discount";
import { CartItem } from "../classes/interfaces/cart-item";
import { ShoppingCart } from "./shopping-cart";

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);

  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {}
  return new DiscountMock();
};

const createCarItem = (name: string, price: number) => {
  class CartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }

  return new CartItemMock(name, price);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("Testing class Shopping Cart", () => {
  const { sut } = createSut();

  it("Should be an empty cart when no produuct is add", () => {
    expect(sut.isEmpty()).toBe(true);
  });

  it("Should have 2 cars items", () => {
    const item1 = createCarItem("Caneta", 1.5);
    const item2 = createCarItem("Copo", 8);

    sut.addItem(item1);
    sut.addItem(item2);

    expect(sut.items.length).toBe(2);
  });

  it("Should test function total and totalWithDiscount", () => {
    expect(sut.total()).toBe(9.5);
    expect(sut.totalWithDicount()).toBe(9.5);
  });

  it("Should clear the Cart", () => {
    sut.clear();
    expect(sut.items.length).toBe(0);
  });

  it("Should remove products", () => {
    const item1 = createCarItem("Copo", 8);
    sut.addItem(item1);
    sut.removeItem(0);

    expect(sut.items.length).toBe(0);
  });
});

describe("Testing integration between ShoppingCart and Discount classes", () => {
  const { discountMock, sut } = createSut();

  it("Should call discount.calculate once when totalWithDiscount is called", () => {
    const discountMockSpy = jest.spyOn(discountMock, "calculate");

    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledTimes(1);
  });

  it("Should call discount.calculate with total price when totalWithDiscount is called", () => {
    const discountMockSpy = jest.spyOn(discountMock, "calculate");

    sut.totalWithDicount();
    expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
  });
});
