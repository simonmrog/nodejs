import should from "should";
import supertest from "supertest";

import app from "../src/main.js";

describe("flights", function() {
  it("should run", function(done) {
    supertest(app)
      .get("/")
      .end(function(err, res) {
        res.status.should.equal(200);
        done();
    })
  });
});
