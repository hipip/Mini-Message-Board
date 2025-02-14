const { Router } = require("express");

let messages = [
  {
    text: "Hi there!",
    user: "Amando",
    date: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    date: new Date(),
  },
];

const router = Router();

router.get("/", (req, res) => {
  res.render("index", { title: "Home Page", messages });
});

module.exports = router;
