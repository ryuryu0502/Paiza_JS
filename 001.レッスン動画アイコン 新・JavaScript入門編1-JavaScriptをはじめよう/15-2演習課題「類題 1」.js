const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const elems = input.split(" ");
/*
標準入力にスペース区切りでいくつかの正の整数が入力されます。

すなわち、入力は次の形になります。

n_1 n_2 n_3 n_4 ...

数値の個数は不明ですが、2 から 10 個の間になることは決まっています。
また、与えられる数値が 1000 を超えることはありません。

与えられた数値の中で最も大きい数を出力してください。

プログラムを実行して、想定通り出力されれば演習課題クリアです！

入力される値
4 7 9 2 9 11 8

 期待する出力値
11
*/

//新しい配列を番号として作る
const numbers = elems.map(Number);
//testcode
//console.log(numbers);

//最大値を見つける
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
const maxNumber = Math.max(...numbers);

console.log(maxNumber);

