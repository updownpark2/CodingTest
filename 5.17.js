//모의고사문제
answers=[1,2,3,4,5,2,1,2,3,2];
function solution(answers){
    //정답이담겨있는배열
let A = [1,2,3,4,5];
let B = [2,1,2,3,2,4,2,5];
let C = [3,3,1,1,2,2,4,4,5,5];
let count =[0,0,0]
let answer = [];
//나머지로 가능
for(let i=0; i<answers.length;i++){
if(A[i%5]==answers[i]){
    count[0]=count[0]+1
}
}
for(let i=0; i<answers.length;i++){
    if(B[i%8]==answers[i]){
        count[1]=count[1]+1
    }
}
for(let i=0; i<answers.length;i++){
    if(C[i%10]==answers[i]){
        count[2]=count[2]+1
    }
}
const result = Math.max(count[0],count[1],count[2]);
for( i = 0;i<3;i++){
if(result==count[i]){
answer.push(i+1);
}
}
return answer
}
solution(answers)
//해결. Math.max 메소드와 for(){if if if} 가 가능함을 배웠다.
//나머지로 반복되는 배열을 구성할 수 있게되었다.

//로또이 최고순위와 최저 순위
let lottos=[44,1,0,0,31,25];
const win_nums=[31,10,45,1,6,19];
function solution(lottos, win_nums) {
let answer= [];
let number1 = 0;
let number2 = 0;
for(i=0;i<6;i++){
    if(lottos[i]==0){
        number1=number1+1//0의갯수 -> +-1순위해준다.
    }
}
for(i=0;i<6;i++){
if(win_nums.includes(lottos[i])==true){
number2=number2+1//일치하는갯수 6개면(1등) +-0 5개면(2등) -1
//4개면(3등)-2 3개면(4등) -num1
}
}
switch(number2){
    case 6:
        answer.push(1,1)
        break;
    case 5:
         answer.push(2-number1,2)   
      break;
    case 4:
             answer.push(3-number1,3)
     break;
    case 3:
            answer.push(4-number1,4)
    break;
    case 2:
        answer.push(5-number1,5)
    break;
    case 1:
    answer.push(6-number1,6)
break;
case 0:
    if(number1<=1){
    answer.push(6,6)
    }
    else{
        answer.push(7-number1,6)
    }
break;
}
return answer
}
    solution(lottos,win_nums)
//문제해결

//include를 이용하여 문제를 푸는 방법을 익혔다. 
//include의 리턴값은 boolean이다.
