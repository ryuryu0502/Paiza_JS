const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n");

/*
演習課題「文字の一致（paiza ランク D 相当）に挑戦！」
2 つの文字列 a, b が入力されます。文字列が一致していれば "OK" 、異なっていれば "NG" と出力してください。


入力される値

入力は以下のフォーマットで与えられます。

a
b

- 1 行目に文字列 a
- 2 行目に文字列 b

期待する出力

文字列 a と文字列 b が一致していれば "OK" 、異なっていれば "NG" と出力してください。

条件

すべてのテストケースにおいて、以下の条件をみたします。

・1 ≦ 文字列 a の長さ ≦ 100
・1 ≦ 文字列 b の長さ ≦ 100
 入力される値

paiza
paiza

 標準入力からの値取得方法はこちらをご確認ください

 期待する出力値

OK
*/

const a = String(lines[0]);
const b = String(lines[1]);
//console.log(a);
//console.log(b);

if (a === b) {
    console.log("OK");
} else {
    console.log("NG");
}