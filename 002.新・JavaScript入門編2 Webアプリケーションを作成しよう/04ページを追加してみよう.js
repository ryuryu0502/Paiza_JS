//npm run start
/*
const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { message: "みなさんこんにちは！" });
});

module.exports = router;
*/


const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { message: "みなさんこんにちは！" });
});

router.get("/votes", (req, res) => {
  res.render("index", { message: "vites" });
});


module.exports = router;
