const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("/n");

/*

*/

const a = lines[0];
const b = lines[1];

if (a === b) {
    console.log("同じ値です");
} else {
    console.log("異なる値です");
}