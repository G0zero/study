/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/
//별찍기 4번
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(input[0]);//숫자로 변환
for (let i = n; i >= 0; i--) {
    console.log(" ".repeat(n - i) + "*".repeat(i));
}
