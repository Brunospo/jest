import { Messaging } from "./messaging";

function createSut() {
  return new Messaging();
}

describe("Test class Messaging", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("Should return undefined", () => {
    const sut = createSut();

    expect(sut.sendMessage("teste")).toBeUndefined();
  });

  it("Should call console.log once", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");

    sut.sendMessage("teste");

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it("Should call console.log with (Mensagem enviada, msg)", () => {
    const sut = createSut();
    const consoleSpy = jest.spyOn(console, "log");

    sut.sendMessage("teste");

    expect(consoleSpy).toHaveBeenCalledWith("Mensagem enviada", "teste");
  });
});
