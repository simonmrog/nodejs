"use strict";

import passport from "passport";


class SocialAuthController {
  authenticate(provider, redirect = false) {
    if (redirect) return passport.authenticate(provider, {
      successRedirect: "/", failureRedirect: "/login"
    });

    return passport.authenticate(provider);
  }

  logout (req, res) {
    req.logout();
    res.redirect(301, "/");
  }
}

export default new SocialAuthController();
