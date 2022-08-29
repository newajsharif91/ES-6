const numbers = [2,3,4,5,6,7];
const output=[];

for(const number of numbers){
    const doubled=number*2;
    output.push(doubled);
}
// console.log(output);

function getdouble(){
    const output=[];

for(const number of numbers){
    const doubled=number*2;
    output.push(doubled);
    return output;
}}

const makeDouble=numbers.map(num =>num*2);
console.log(makeDouble);
const five=[1,2,3,4,5].map(x=>x*2);
console.log(five);