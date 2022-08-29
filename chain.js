const user=[{id:1,name:'newaj',job:'Doctor'}]

console.log(user[0]);

const data={
    count:5000,
    data:[
        {
            id:1,name:'newaj',job:'chatro League',
        }
    ]
}

console.log(data.data[0].job.length);

const man = {
    id:5001,
    name:'Thomas Alba Adison',
    adress:{
        postoffice:'Cantanment',
       city:'Dhaka',
        street:{
            first:'3/a Dhanmondi',
            second:'THird Floor',
            third:'right side'
        }
}
}
console.log(man.adress?.street);