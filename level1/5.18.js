//나머지가 1이 되는 수 찾기
const n = 22
function solution(n) {
    let answerarray=[]
    for(i=1;i<n;i++){
if(n%i==1){
answerarray.push(i)
}
}
let answer = answerarray[0]
return answer
    }
//해결!

//마라톤 완주하지 못한선수
let participant =  ["mislav","stanko", "mislav", "ana"]
   let completion = ["stanko", "ana", "mislav"]
   let A = []
function solution(participant, completion) {
    let answerarray = [];
    for(i=0;i<participant.length;i++){
        if(completion.includes(participant[i])==true){
            let value = participant[i]
         completion = completion.filter(function(item){
                return item !== value;
                
            });

        }
        }
        console.log(completion)
    }
   solution(participant, completion)
   //이렇게하면 동명이인을 못찾는다.


   let participant =  ["mislav","stanko", "mislav", "ana"]
   let completion = ["stanko", "ana", "mislav"]
   function solution(participant, completion){
for(let i=0;i<participant.length;i++){
    for(let j=0;j<completion.length;j++){
       switch (participant[i]){
           case completion[j]:
            participant.splice(i,1)
            i--;
            completion.splice(j,1)
            j--;
break
       }
    }
}
let answer = String(participant)
return answer
   }
   solution(participant,completion)
//이렇게 하면 효율성이 떨어짐

let participant =  ["mislav","stanko", "mislav", "ana"]
   let completion = ["stanko", "ana", "mislav"]
   function solution(participant, completion){
for(let i=0;i<participant.length;i++){
    for(let j=0;j<completion.length;j++){
       if(participant[i]==completion[j]){
            participant.splice(i,1)
            i--;
            completion.splice(j,1)
            j--;
       }
       }
       }
    
let answer = String(participant)
return answer
   }
   solution(participant,completion)
//이렇게 하면 한명만있어도 다 사라짐..

let participant =  ["mislav","stanko", "mislavdd", "ana"]
let completion = ["stanko", "ana", "mislav"]
function solution(participant,completion) {
   let BB= participant.filter(it => !completion.includes(it));
     answer = String(BB)
     return answer
}
solution(participant,completion)
//filter를 이용했으나 동명이인의 문제를 해결하지 못했다.
let participant =  ["marina", "josipa", "nikola", "vinko", "filipa"]
let completion =["josipa", "filipa", "marina", "nikola"]
function solution(participant,completion){
    for(i=0;i<participant.length;i++){
        if(participant.indexOf(participant[i])!==
        participant.lastIndexOf(participant[i])){
            let savedPerson = participant[i]
            let BB= participant.filter(it => !completion.includes(it));
            answer = String(BB)+String(savedPerson); 
break;
    }
    else{
        let BB= participant.filter(it => !completion.includes(it));
            answer = String(BB)
    }
    }
    return answer
}
solution(participant,completion)
//결과값은 잘 나왔지만 좋지않은코드로 오답.