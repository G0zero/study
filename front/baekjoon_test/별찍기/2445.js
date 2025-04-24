/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/
//별찍기 8번
//첫풀이
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(input[0]);//숫자로 변환
for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i) + ' '.repeat(n - i) +' '.repeat(n - i) + "*".repeat(i));
}
for (let j = n -1; j >= 1; j--) {
    console.log("*".repeat(j)+" ".repeat(n - j)+" ".repeat(n - j) + "*".repeat(j));
}

//좀더 간단하게 돌린 버전 

// //위쪽 절반 (가운데 포함)
// for (let i = 1; i <= n; i++) {
//     console.log("*".repeat(i) + ' '.repeat((n - i) * 2) + "*".repeat(i));
// }
// // 아래쪽 절반 (가운데 생략)
// for (let i = n - 1; i >= 1; i--) {
//     console.log("*".repeat(i) + ' '.repeat((n - i) * 2) + "*".repeat(i));
// }

//좀더 축약한걸 변수에 넣고 돌린것 
//위쪽 부분
// for (let i = 1; i <= n; i++) {
//     const spaces = ' '.repeat((n - i) * 2);
//     console.log("*".repeat(i) + spaces + "*".repeat(i));
// }

// // 아래쪽 부분 (i = n-1부터 시작해서 대칭)
// for (let i = n - 1; i >= 1; i--) {
//     const spaces = ' '.repeat((n - i) * 2);
//     console.log("*".repeat(i) + spaces + "*".repeat(i));
// }