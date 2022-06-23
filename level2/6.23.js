const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
];
function solution(clothes) {
  let arr = [];
  let arr2 = [];
  let sum = 0;
  let answer = 1;
  for (i = 0; i < clothes.length; i++) {
    arr.push(clothes[i][1]);
  }
  arr.sort(function (a, b) {
    return a > b ? 1 : -1; //['eyewear', 'headgear', 'headgear']
  }); //clothes의 length를 더하고 각각의 다른 것들을 곱한 것을 더한다.
  //for문 돌라다가 다르면 break? 기본적으로 sum에 추가하다가 배열에 sum push
  console.log(arr);
  const setarray = new Set(arr);
  const setarrayR = [...setarray]; //
  //중복값을 제거한 배열을 하나 만들고 그 배열과 비교해도 가능할듯하다.
  console.log(setarrayR);
  for (j = 0; j < setarrayR.length; j++) {
    for (i = 0; i < arr.length; i++) {
      if (setarrayR[j] === arr[i]) {
        sum++;
      }
    }
    arr2.push(sum);
    sum = 0;
  }
  for (i = 0; i < arr2.length; i++) {
    answer = answer * arr2[i];
  }
  return setarrayR.length === 1 ? clothes.length : answer + clothes.length;
}
solution(clothes);
