const numbers=[1,2,3,4,5,6,7,8,9,10];
const bigNumber=numbers.filter(number=>number%2==0);
console.log(bigNumber);
const products=[
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1001},
];
const expensive=products.filter(product=>product.price>1000);
console.log(expensive);
