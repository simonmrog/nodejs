beforeAll(() => console.log("Before all..."));
beforeEach(() => console.log("Before each..."));
afterEach(() => console.log("After each..."));
afterAll(() => console.log("After all..."));

describe("prepare", () => {
  test("is true", () => {
    expect(true).toBeTruthy();
  });
});