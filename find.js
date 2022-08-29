const numbers=[1,2,3,4,5,6,7,8,9,10];
const fives=numbers.find(num=>num%5===0);
console.log(fives);
const products=[
    {id:1,name:'Newaj',price:8000},
    {id:1,name:'Newaj',price:9000},
    {id:1,name:'Newaj',price:5000},
    {id:1,name:'Newaj',price:3000},
    {id:1,name:'Newaj',price:2001},
];

const lowProduct=products.filter(product=>product.price<5000);
console.log(lowProduct);