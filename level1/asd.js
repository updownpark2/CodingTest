
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