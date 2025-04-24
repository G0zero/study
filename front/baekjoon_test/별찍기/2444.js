/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/
//별찍기 7번
//첫풀이
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = parseInt(input[0]);//숫자로 변환
for (let i = 1; i <= n; i++) {
    const stars = 2 * i -1;
    const blank = (n - i);
    console.log(' '.repeat(blank) +"*".repeat(stars)+' '.repeat(blank));
}
for (let i = n - 1; i >= 1; i--) {
    const disstars = 2 * i -1;
    const disblank = (n - i);
    console.log(' '.repeat(disblank) +"*".repeat(disstars)+' '.repeat(disblank));
}

//위 코드가 백준에서는 형식이 잘못되었다고 판단됨 
// const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
// const n = parseInt(input[0]);//숫자로 변환
// for (let i = 1; i <= n; i++) {
//     const stars = 2 * i -1;
//     const blank = (n - i);
//     console.log(' '.repeat(blank) +"*".repeat(stars));
// }
// for (let i = n - 1; i >= 1; i--) {
//     const disstars = 2 * i -1;
//     const disblank = (n - i);
//     console.log(' '.repeat(disblank) +"*".repeat(disstars));
// }
// 이유는 뒤에 공백이 굳이 따라오지않아도 되기 때문임 백준은 뒤쪽 공백을 의도해서 넣어달라고 한것이 아니기때문에 그런거임
