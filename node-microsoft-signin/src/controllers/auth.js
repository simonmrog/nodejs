"use strict";

import passport from "passport";


class AuthController {
  googleAuth() {
    console.log("entre3")
    passport.authenticate("google", {
      scope: ["profile", "email"],
      session: false,
    });
  }

  googleAuthRedirect() {
    passport.authenticate("google", {
      session: false,
      failureRedirect: "https://localhost:3000/login"
    });
  }

  microsoftAuth() {
    console.log("microsoft")
    passport.authenticate("microsoft", { session: false })
  }

  microsoftAuthRedirect() {
    passport.authenticate("microsoft", {
      session: false,
      failureRedirect: "https://localhost:3000/login"
    });
  }
}

export default new AuthController();
