// この関数を定義
const determinant2 = (a, b, c, d) => {
  return a * d - b * c;
};

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const [a, b, c, d] = input.split(" ");

const answer = determinant2(a, b, c, d);
// ある 4 つの引数 x, y, z, w に対して x × w - y × z を計算するものです

console.log(answer);
