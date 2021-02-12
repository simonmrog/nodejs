import express from "express";
import handlebars from "express-handlebars";
import path from "path";


// Router
import router from "./routes";


// Initialization
const app = express();


// Settings
app.set("port", process.env.PORT || 3000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", handlebars({
  extname: ".hbs",
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  defaultLayout: "main"
}));
app.set("view engine", ".hbs");


// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
router(app);


// Static files
app.use(express.static(path.join(__dirname, "public")));


// Starting the server
app.listen(app.get("port"), function () {
  console.log("Server running on port", app.get("port"));
});
