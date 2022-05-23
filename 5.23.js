
const array = [1,5,2,6,3,7,4];
const commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]]
function solution(array, commands) {
    let answer = [];
    for(i=0;i<commands.length;i++){
        const A = [];
        for(j=0;j<=commands[i][1]-commands[i][0];j++){
A.push(array[commands[i][0]-1+j])
        }
        A.sort(function(a,b){return a-b;});
        answer.push(A[commands[i][2]-1])
    }
    return answer
}
solution(array,commands)
//for 반복문을 사용하여 i-1부터 j-1까지 index까지 새로운 배열에
//추가한 후 그 중에 k-1을 리턴
//해결 array가 이중으로 설정됐을 때의 상황을 배울 수 있었다.
//이중 for문을 배웠다.

//프로그래머스 체육복 빌려주는 문제
let n = 5
const lost=[2,4];
let reserve = [3];
function solution(n, lost, reserve) {
    let sum = 0
    for(i=0;i<lost.length;i++){
        if(reserve.includes(lost[i]-1)==true||reserve.includes(lost[i]+1)==true){
            sum= sum+1
            reserve.splice(i,1)
            console.log(reserve)
        }
    }
    let answer = n-lost.length+sum
    return answer
}
    solution(n,lost,reserve)
    //lost[0]-1 또는 lost[0]+1 의 값이 reserve에 있다면 +1

    //60점짜리의 답.