"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_handlebars_1 = __importDefault(require("express-handlebars"));
const path_1 = __importDefault(require("path"));
// Router
const routes_1 = __importDefault(require("./routes"));
// Initialization
const app = express_1.default();
// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path_1.default.join(__dirname, "views"));
app.engine(".hbs", express_handlebars_1.default({
    extname: ".hbs",
    layoutsDir: path_1.default.join(app.get("views"), "layouts"),
    partialsDir: path_1.default.join(app.get("views"), "partials")
}));
app.set("view engine", ".hbs");
// Middlewares
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
routes_1.default(app);
// Static files
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
// Starting the server
app.listen(app.get("port"), function () {
    console.log("Server running on port", app.get("port"));
});
