//수박수박문제
n=5
function solution(n) {
    const subak = "수박"
    const subaksu="수박수"
    const baksu = "박수"
     if (n==1){
        return "수"
        }
    else if(n%2==0){
 return subak.repeat(n/2)
    }
    else if(n%2==1){
        return subaksu+baksu.repeat((n-2)/2)
    }
}
solution(n)
//성공
//repeat()이라는 함수 
//반복대상.repeat(몇번)하면된다.
const d=[1,2,3,4]
const budget=5
function solution(d, budget) {
    let sortd=d.sort((a, b) => a - b)//오름차순으로 변경
    let sum=0;
   //참일떄까지반복이라는말
   if(sortd.length==1){//이걸 추가했더니 87점됐다.
if(sortd[0]>budget){
return 0
}
else{
return 1
}
   }
   for(let i=0;sum<budget;i++)
   { 
       sum=sum+sortd[i]
       if(sum==budget){
   return i+1
       }
   else if(sum>budget){
       return i
   }
}
       }
solution(d,budget)
//82.6점
//부서가 하나일때를 생각해보자
//최종 87점

//카카오 인턴문제 키패드 누르기
let numbers=[1,2,7,3,9,2,6,5]
function solution(numbers) {
   
console.log(numbers)
}
solution(numbers)


// for(i=0;i<numbers.length;i++){
//if(numbers[i]==3||numbers[i]==6||numbers[i]==9){
    //numbers.splice(i,1,"R")
    //}
    //else if(numbers[i]==1||numbers[i]==4||numbers[i]==7){
      //  numbers.splice(i,1,"L")
    //}
    //}