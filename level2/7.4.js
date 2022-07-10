//level2 타켓 넘버
const numbers = [4, 1, 2, 1];
const target = 4;
function solution(numbers, target) {
  let random = [];
  let random2 = [0, 1, 2, 3];
  while (random.length !== numbers.length) {
    if (random2.includes(random) === false) {
      random.push(Math.floor(Math.random() * numbers.length));
    }
  }
  console.log(random);
}
solution(numbers, target);
