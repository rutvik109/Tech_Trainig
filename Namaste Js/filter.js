// const arr = [1,2,3,4,5];

// const output = arr.filter((x) => x % 2);

// // const output1 =  arr.filter(function(x){
// //     return x % 2;
// // })

// console.log(output);

const user = [
    {name: "Rutvik",surname: "Patel",age: 10},
    {name: "Harsh",surname: "Patel",age: 15},
    {name: "kaushik",surname: "Patel",age: 20},
    {name: "keval",surname: "Patel",age: 10},  
 ];

 const output = user.filter((x) => x.age < 15).map((x) => x.name);

 console.log(output);
