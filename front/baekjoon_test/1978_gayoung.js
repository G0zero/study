/*-----------------------------------------------------
Sub  : [BOJ] 소수구하기 
Link : https://www.acmicpc.net/problem/1978
Level: 브론즈2
Tag  : JS, Brute Force
Memo
-----------------------------------------------------*/
const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
const n = Number(input[0]); //입력 첫줄을 숫자형으로 받아줘
const nums = input[1].split(' ').map(Number); //입력받은 두번째 줄에서 공백을 기준으로 나눠주고, 문자열을 숫자로 변환해줘


//소수 판별하기
function decimal(num){
    if (num < 2) return false; // num이 1보다 작거나 같으면 소수가 아님(2 아래는 소수가 아님)
        for (i=2; i<= num-1; i++){
            //n을 i 로 나눴을때 나머지가 0 이면 소수가 아님
            if(num % i === 0 ) {
            return false;
            }
        }
        return true; //나누어 떨어지지 않으면 소수임
}
//입력받은 값을 가지고 위 소수파별기에 돌려, 소수의 갯수 세기
function count(n,nums) {
    let decimalCount = 0; // 소수의 개수를 셈

    // nums 배열안에 있는 숫자들을 소수 판별하는 함수안에 넣어 확인하기
    nums.forEach(num => {
        if (decimal(num)) {
            decimalCount++; // 소수일 경우 개수 증가
        }
    });

    console.log(decimalCount); // 소수의 개수 출력
}
count(n,nums);


//gpt 
// const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
// const n = Number(input[0]); // 숫자형으로 변환
// const nums = input[1].split(' ').map(Number); // 두번째 줄에서 공백 기준으로 나누고 숫자로 변환

// function isPrime(num) {
//     if (num < 2) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) return false; // 나누어 떨어지면 소수가 아님
//     }
//     return true; // 나누어 떨어지지 않으면 소수
// }

// function decimal(n, nums) {
//     let primeCount = 0; // 소수의 개수를 셈

//     // nums 배열의 각 숫자에 대해 소수 판별
//     nums.forEach(num => {
//         if (isPrime(num)) {
//             primeCount++; // 소수일 경우 개수 증가
//         }
//     });

//     console.log(primeCount); // 소수의 개수 출력
// }

// // 소수 개수를 세는 함수 호출
// decimal(n, nums);
