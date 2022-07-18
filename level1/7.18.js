//level1 폰켓몬 문제
const nums = [3, 1, 2, 3]; //이러면 4마리를 뽑을 수 있음
function solution(nums) {
  let answer = 0;
  //4개를 선택할 때 최대 종류라고 보면될듯
  //다른 게 몇개인지 세고 nums.length까지 커트하면 될듯

  let arr = [...new Set(nums)];
  console.log(arr);
  //[3,2,1,4] 애초에 이거라면?
  //결과값는 2가 나와야함  nums.length/2 = 2
  //애초에 처음에 다 다를때를 먼저 구분해야겠다.
  if (nums.length === arr.length) {
    answer = nums.length / 2;
  } else if (nums.length !== arr.length) {
    if (nums.length / 2 < arr.length) {
      answer = nums.length / 2;
    }
    if (nums.length / 2 >= arr.length) {
      answer = arr.length;
    }
  }
  return answer;
}
solution(nums);

//nums는 포켓몬 종류와 갯수를 의미
//result는 결국 최대 종류 수
