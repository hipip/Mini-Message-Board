const { Router } = require("express");
const messages = require("../db");

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home Page", messages });
});

module.exports = router;
