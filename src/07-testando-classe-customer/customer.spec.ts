import { EnterpriseCustomer, IndividualCustomer } from "./customer";

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string
) => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (name: string, cnpj: string) => {
  return new EnterpriseCustomer(name, cnpj);
};

afterEach(() => {
  jest.clearAllMocks();
});

describe("Test Individal Customer", () => {
  const sut = createIndividualCustomer("Bruno", "Bispo", "111.111");

  it("Should have first name, last name and cpf", () => {
    expect(sut).toHaveProperty("firstName", "Bruno");
    expect(sut).toHaveProperty("lastName", "Bispo");
    expect(sut).toHaveProperty("cpf", "111.111");
  });

  it("Shold have methods to get name and idn for individual customer", () => {
    expect(sut.getName()).toBe("Bruno Bispo");
    expect(sut.getIDN()).toBe("111.111");
  });
});

describe("Test Enterprise Customer", () => {
  const sut = createEnterpriseCustomer("Udemy", "222.222");

  it("Should have first name and cnpj", () => {
    expect(sut).toHaveProperty("name", "Udemy");
    expect(sut).toHaveProperty("cnpj", "222.222");
  });

  it("Shold have methods to get name and idn for individual customer", () => {
    expect(sut.getName()).toBe("Udemy");
    expect(sut.getIDN()).toBe("222.222");
  });
});
