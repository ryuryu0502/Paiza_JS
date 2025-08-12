//npm run start

//routes/router.js

const router = require("express").Router();

router.get("/", (req, res) => {
    const name = req.query.name || "ゲスト";
  res.render("index", { message: `Hello World! ${name}さん` });
});

module.exports = router;
