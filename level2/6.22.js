const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
function solution(clothes) {
  let arr = [];
  let arr2 = [];
  let sum = 0;
  const j = 1;
  for (i = 0; i < clothes.length; i++) {
    arr.push(clothes[i][j]);
  }
  arr.sort(function (a, b) {
    return a > b ? 1 : -1; //['eyewear', 'headgear', 'headgear']
  });
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
      arr2.push(i + 1);
      arr2.push(sum);
      sum = 0;
    } else if (arr[i] === arr[i + 1]) {
      sum = sum + 1;
    }
    arr2.push(sum);
  }
  console.log(arr);
  console.log(arr2);
}
solution(clothes);
//어떻게 로직을짤까
//clothes의 length는 일단 더하고
//결국 clothes length 기본에다가 같은것끼리 모아서 갯수
// 다른 옷종류별로 나눈 후 그 갯수를 새는 것 그리고 그 갯수를 곱하자
//앞에꺼는 사실상관없자나 뒤에 인자만 모아버릴까? 그렇게 다시 배열을짜고
