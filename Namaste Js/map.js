// const arr = [1,2,3,4,5];

// //double logic

// function double(x){
//     return x * 2;
// }

// const output = arr.map(double);

// console.log(output);

// //binary
// const output1 = arr.map((x) => x.toString(2));

// console.log(output1);


const user = [
    {name: "Rutvik",surname: "Patel",age: 10},
    {name: "Harsh",surname: "Patel",age: 15},
    {name: "kaushik",surname: "Patel",age: 20},
    {name: "keval",surname: "Patel",age: 16},  
];

const output = user.map(function(x){
    return x.name + " " + x.surname;
});

console.log(output);
