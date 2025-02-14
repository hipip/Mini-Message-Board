const { Router } = require("express");
const messages = require("../db");

const router = Router();

router.get("/", (req, res) => {
  res.render("new", { title: "Add Message Page" });
});

router.post("/", (req, res) => {
  const { user, text } = req.body;
  messages.push({ user, text, date: new Date() });
  res.redirect("//new");
});

module.exports = router;
