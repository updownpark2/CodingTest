//level2 구명보트문제
/*
const people = [70, 50, 80, 50, 40];
const limit = 100;
function solution(people, limit) {
  //먼저 people에서 오름차순으로 바꿔보자
  const newPeople = people.sort(function (a, b) {
    return a - b >= 0 ? 1 : -1;
  }); //[50,50,70,80]
  let i = 0;
  let count = 0;
  while (newPeople.length > 0) {
    if (newPeople[i] + newPeople[i + 1] <= limit) {
      newPeople.shift();
      newPeople.shift();
      count = count + 1;
    }
    //newPeople.length 가 1이 될 때
    if (newPeople[i] + newPeople[i + 1] > limit) {
      count = count + newPeople.length;
      break;
    }
  }
  return count;
}
solution(people, limit);
*/
//이렇게 하면
//const people=[40,50,150,160] 일때 limit= 200
//이 반례를 허용못함
const people = [40, 50, 150, 160];
const limit = 200;
function solution(people, limit) {
  let small = [];
  let big = [];
  let count = 0;
  const newPeople = people.sort(function (a, b) {
    return a - b >= 0 ? 1 : -1;
  }); //오름차순이됨
  newPeople.map(function (item) {
    return item <= limit / 2 ? small.push(item) : big.push(item);
  }); // [40,50] [150,160]
  for (i = 0; i < small.length; i++) {
    for (j = big.length - 1; j > 0; j--) {
      if (small[i] + big[j] <= limit) {
        small.splice(i, 1);
        big.splice(j, 1);
      }
    }
  }
}
solution(people, limit);
