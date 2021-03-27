"use strict";

import app from "./app.js";

function initApp() {
  app.listen(3000, function () {
    console.log("Running at http://localhost:3000");
  });
}

initApp();
