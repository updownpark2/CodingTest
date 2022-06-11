const nums = [1, 2, 7, 6, 4];
function solution(nums) {
  let sum = 0;
  let answersarray = [];
  for (let i = 0; i < nums.length - 2; i++) {
    //이렇게 짜면 겹쳐지는부분이 발생한다!
    for (let j = 1; j < nums.length - 1; j++) {
      for (let z = 2; z < nums.length; z++) {
        answersarray.push(nums[i] + nums[j] + nums[z]);

        z = z + 1;
      }
    }
    j = j + 1;
  }
  console.log(answersarray);
  let answers = [...new Set(answersarray)];
  console.log(answers);
  //...new Set()으로 중복원소를 제거하였다.
  for (i = 0; i < answers.length; i++) {
    for (j = 2; j < answers[i]; j++) {
      if (answers[i] % j === 0) {
        answers.splice(i, 1, 0);
      } //제거되면 전체 길이가 짧아지면서
      //i도 당겨지게됨.
    }
  }
  let answer = [...new Set(answers)];
  console.log(answer);
  return answer.length - 1; //뭔가 하나 더해졌음
}
solution(nums);
//여기서 이제 중복값 제거

//5개의 원소 중 3개를 더해서 만든 수의 중 소수가 있는지

//더한 것 들을 모아 둔 배열을 먼저 만들고
//그 중 소수를 찾는 것?
//그럼 순서대로 더할 수 있는 시스템
