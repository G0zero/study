/*-----------------------------------------------------
Sub  : [BOJ] 
Link : https://www.acmicpc.net/problem/
Level: 
Tag  : JS, 
Memo
-----------------------------------------------------*/

// const input = ['14 30', '20']; // 직접 입력한 것처럼
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
// 첫 줄 쪼개서 hour, min 숫자로 추출
const [hour, min] = input[0].split(' ').map(Number);
// 두 번째 줄은 요리 시간
const time = Number(input[1]);

function oven(hour, min, time) {
    const sum = min + time;
    hour += Math.floor(sum / 60);
    min = sum % 60;

    if (hour >= 24) {
        hour -= 24;
    }
    return [hour, min];
}
const [newHour, newMin] = oven(hour, min, time);
console.log(newHour, newMin);
