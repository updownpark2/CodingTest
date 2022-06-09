function solution(answers){
const answers = [];//정답이 들어있는 배열
let A=[1,2,3,4,5];//수포자1
let B=[2,1,2,3,2,4,2,5];//수포자2
let C=[3,3,1,1,2,2,4,4,5,5];//수포자3



let Asum= 0;
let Bsum= 0;
let Csum= 0;
let F =[];
for(i=0;i<A.length;i++){
if(A[i]=answers[i]){
Asum=Asum+1
}
else{
    Asum=Asum+0
}
return Asum
}
for(i=0;i<B.length;i++){
    if(B[i]=answers[i]){
    Bsum=Bsum+1
    }
    else{
        Bsum=Bsum+0
    }
    return Bsum
    }
    for(i=0;i<C.length;i++){
        if(C[i]=answers[i]){
        Csum=Csum+1
        }
        else{
            Csum=Csum+0
        }
        return Csum
    }
 F.push(Asum,Bsum,Csum)
 F.sort(function(a,b){
     return b-a;
 })
 
}

//
let A=[1,2,3,4,5];
let B=[1,2,3,4,5,2,2,2,2,2,3,4]
while(A.length<B.length){
for(let i=1; i<6;i++){
    if(A.length>=B.length){
break;
    }
    else{
A.push(i);
}
}
}
console.log(A)
//A의 배열 새롭게 만들수있다.