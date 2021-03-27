import { fetchData } from "../promise.js";

describe("testing promises", function() {
  test("fetch data", done => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url).then(data => {
      expect(data).not.toBeNull();
      done();
    });
  });

  test("resolves with a 1", () => {
    return expect(Promise.resolve(1)).resolves.toBe(1);
  });

  test("rejects with an error", () => {
    return expect(Promise.reject(new Error("error")))
      .rejects.toThrowError("error");
  });
});
