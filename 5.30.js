const nums = [1, 2, 7, 6, 4];
function solution(nums) {
  let box = [];
  let answers = 0;
  for (i = 0; i < nums.length; i++) {
    for (let j = 1; j < nums.length; j++) {
      if (i !== j) {
        let sum = nums[i] + nums[j];
        box.push(sum);
      }
    }
  }
  let answer = [...new Set(box)]; //answer은 중복값없는배열이완성됨
  //answer은 이제 다 더해진 배열이 됐다. 소수만 찾으면된다.
  for (a = 0; a < answer.length; a++) {
    for (b = 2; b < answer[a]; b++) {
      if (answer[a] % b === 0) {
        console.log("wow"); //return이 break의 역할까지함
      }
    }
    console.log("oh");
  }
}
solution(nums);
