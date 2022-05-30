const numbers = [1, 2, 3, 4, 6, 7, 8, 0];
function solution(numbers) {
  const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let answer = 0;
  for (i = 0; i < number; i++) {
    if (numbers.includes(number[i]) == true) {
      console.log(number[i]);
    }
  }
}
solution(numbers);

//for 문으로 1부터 돌아서 includes가 true면 그 값을
//리턴하는문제

function solution(numbers) {
  let sum = 0;
  for (i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  answer = 45 - sum;
  return answer;
} //이렇게해도됨 쉬운코드

//음양더하기
const absolutes = [4, 7, 12];
const signs = [true, false, true];
function solution(absolutes, signs) {
  let answer = 0;
  for (i = 0; i < signs.length; i++) {
    if (signs[i] == false) {
      answer = answer - absolutes[i];
    } else if (signs[i] == true) {
      answer = answer + absolutes[i];
    }
  }
  return answer;
}
solution(absolutes, signs);
//반복문을 이용하여 absolutes와 sign의 배열을 비교 후
// true면 더하고 false면 빼기
//signs의 배열을 먼저따져서 if = true면 a[i]+=
//false면 a[i]-=

//내적문제
const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];
function solution(a, b) {
  let sum = 0;
  for (i = 0; i < a.length; i++) {
    sum = sum + a[i] * b[i];
  }
  return sum;
}
solution(a, b);
//a배열의 0번부터 b배열의 0번을 순차적으로 곱해 더하는 알고리즘
//해결

//소수만들기
const num = [1, 2, 3, 4];
function solution(nums) {}
//소수를 어떻게 만들지(for문으로 해서 true면 sum return), 숫자를 섞는거(for문으로)
//for문으로 숫자 섞고 그 값이 소수 true면 answer에 더하는 식
