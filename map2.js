const  numbers=[12,56,87,44].map(half=>half/2)
console.log(numbers);
 
const friends=['Newaj','Sayef','sami','Tom'];
const  fristLetters=friends.map(friend=>friend[0])
console.log(fristLetters);
const friendsLength=friends.map(friend=>friend.length)
console.log(friendsLength);

const products=[
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1000},
    {id:1,name:'Newaj',price:1000},
];
const item=products.map(product=>console.log(product.name));