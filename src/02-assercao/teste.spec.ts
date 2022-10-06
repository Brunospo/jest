describe("Test primitive numbers", () => {
  it("Should test Jest asertions", () => {
    const number = 82;

    expect(number).toBe(82);
    expect(number).toEqual(82);
    expect(number).not.toEqual(80);

    expect(number).not.toBeNull();
    expect(number).not.toBeFalsy();
    expect(number).toBeTruthy();

    expect(number).toBeLessThan(100);
    expect(number).toBeLessThanOrEqual(100);
    expect(number).toBeGreaterThan(10);
    expect(number).toBeGreaterThanOrEqual(10);

    expect(number).toHaveProperty("toString");
  });
});

describe("Test Objects", () => {
  it("Should test Jest asertions with Objects", () => {
    const person = {
      name: "Bruno",
      age: 23,
    };

    const anotherPerson = {
      ...person,
    };

    expect(person).toEqual(anotherPerson);

    expect(person).toHaveProperty("age");
    expect(person).toHaveProperty("name", "Bruno");
    expect(person).not.toHaveProperty("fullName");

    expect(person.age).toBe(23);
  });
});
