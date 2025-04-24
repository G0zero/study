/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = input[0];
for (let i = 1; i <= n; i++) {
    console.log('*'.repeat(i));
}