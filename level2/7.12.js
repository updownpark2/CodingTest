/*const n = 15;
function solution(n) {
  let sum = 0;
  let answer = 0;
  let checki = 0;
  for (i = 1; i < 15; i++) {
    sum = sum + i;
    checki = checki + 1;
    if (sum === n) {
      answer = answer + 1;
      sum = 0;
      i=1
      console.log(checki);
      checki = 0;
    }
    if (sum > n) {
      sum = 0;
      i=1
      checki = 0;
    }
    if (sum === n && checki === 2) {
      answer = answer + 1;
      break;
    }
    if (sum > n && checki === 2) {
      break;
    }
  }
  console.log(answer);
}
solution(n);
*/
//1부터 계속더해보고 넘으면
//2부터 더해보고 넘으면
//3 부터 더해보고
//4, 5 ,6 ,7  i = i+1 그니깐 두개를 더해서 넘어버리면 그건이제 다한거다. break를 걸타이밍
//while(sum=<n){

//}
const n = 15;
function solution(n) {
  while (sum <= n) {
    let sum = 0;
    let count = 1;
    let answer = 0;
    let num = 0;
    num = num + 1;//한번돌때마다 num추가
    sum = sum + count;
    count = count + 1;
    if (sum === n) {
      answer = answer + 1;
      sum = 0;
      count=count+num
    }
    if(sum===n&&)
  }
}
//로직은 1부터 계속 더해서 15가 되거나 넘으면 다시 2부터 그리고 3부터
