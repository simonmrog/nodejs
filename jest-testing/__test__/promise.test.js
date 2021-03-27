import { fetchData } from "../promise.js";

describe("testing promises", function() {
  test("fetch data", done => {
    const url = "https://rickandmortyapi.com/api/character/";
    fetchData(url).then(data => {
      expect(data).not.toBeNull();
      done();
    });
  });
});
