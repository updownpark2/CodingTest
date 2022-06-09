const numbers = [3, 30, 34, 5, 9];
function solution(numbers) {
  //numbers에서 하나하나 더해서 만들기
  let numarray = []; //여기에 더한 숫자들을 넣을꺼다.
  let iarray = [];
  for (i = 0; i < numbers.length; i++) {
    if (1 <= numbers[i] && numbers[i] < 10) {
      numarray.push(numbers[i]);
      iarray.push(i);
    } else if (10 <= numbers[i] && numbers[i] < 100) {
      numarray.push(numbers[i] / 10);
      iarray.push(i);
    } else if (100 <= numbers[i] && numbers[i] < 1000) {
      numarray.push(numbers[i] / 100);
      iarray.push(i);
    } else if (1000 <= numbers[i] && numbers[i] < 10000) {
      numarray.push(numbers[i] / 1000);
      iarray.push(i);
    } else if (10000 <= numbers[i] && numbers[i] <= 100000) {
      numarray.push(numbers[i] / 10000);
      iarray.push(i);
    }
  }
  console.log(numarray); //3, 3, 3.4,5,9
  console.log(iarray);
}
solution(numbers);

//1<10이면 그냥
//10<100이면 나누기 10
//100<1000이면 나누기 100
//1000<10000이면 나누기 1000
//10000<100000이면 나누기 10000
//이렇게해서 큰거대로 순서대로 정렬 후 배열 0 부터 length까지 더하면될듯
