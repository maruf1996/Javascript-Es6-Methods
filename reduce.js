const numbers=[1,2,3,4,5];

// let sum=0;

// for(const number of numbers){
//     sum=sum+number;
// }
// console.log(sum)

const sum=numbers.reduce((previus,current)=>{
    return previus+current;
},0)
console.log(sum)