const router = require("express").Router();

router.get("/", (req, res) => {
  res.render("index", { message: "みなさんこんにちは" });
});

// 以下にルーティングを設定

router.get("/greeting", (req, res) => {
  res.render("index", { message: "みなさんこんにちは" });
});

module.exports = router;
