import { callbackHell } from "../callback.js";

describe("testing callback functions", () => {
  test("testing callback", done => {
    callbackHell((data) => {
      try {
        expect(data).toBe("Hello World");
        done();
      } catch (err) {
        done(err);
      }
    });
  });
});
