const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.render("new", { title: "Add Message Page" });
});

module.exports = router;
