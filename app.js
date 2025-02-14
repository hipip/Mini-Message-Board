const express = require("express");
const path = require("path");
const logger = require("./middlewares/logger");
const indexRoute = require("./routes/index");

const app = express();

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(logger);

app.use("/", indexRoute);

app.listen(3000, () => console.log("Server Listening on port 3000"));
