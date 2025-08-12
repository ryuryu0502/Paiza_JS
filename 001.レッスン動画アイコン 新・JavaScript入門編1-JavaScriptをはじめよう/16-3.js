const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").trim();
const lines = input.split("\n");

/*
演習課題「類題 2」

標準入力に何行かで文字列が入力されます。
何行かは入力があるまでわかりませんが、必ず 1 行以上は入力されます。

入力された 1 行目から順番に、その文字列が「paiza」という文字列と等しいか調べたいと思います。
入力の i 行目の文字列が「paiza」であれば YES を、そうでなければ NO を i 行目に出力するプログラムを完成させてください。

プログラムを実行して、想定通り出力されれば演習課題クリアです！

 入力される値

paiza
qaiza
paiza
813
パイザ

 標準入力からの値取得方法はこちらをご確認ください

 期待する出力値

YES
NO
YES
NO
NO
*/

const targetKeyword = "paiza";
const maxCnt = lines.length;

for (let i=0; i< maxCnt; i++) {
    if(targetKeyword== lines[i]) {
        console.log("YES");
    }else{
        console.log("NO");
    }
}