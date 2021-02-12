"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    root(req, res) {
        res.status(200).json({
            message: "Welcome to the API!"
        });
    }
}
exports.default = new IndexController();
