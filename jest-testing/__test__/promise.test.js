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

  test("fetch data async await", async done => {
    const url = "https://rickandmortyapi.com/api/character/";
    const { data } = await fetchData(url);
    expect(data).not.toBeNull();
    expect(data.results.length).toBeGreaterThan(0);
    done();
  });

  test("test error in request", async done => {
    const apiError = "http://httpstat.us/404";
    const res = fetchData(apiError);
    expect(res).rejects.toEqual(Error("Request failed with status 404"));
    done();
  });
});
