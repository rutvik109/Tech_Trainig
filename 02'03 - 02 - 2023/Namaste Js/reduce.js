// const arr = [1,2,9,4,5];

// const output = arr.reduce(function(max,curr){
//    if(curr > max){
//     max = curr;
//    };
//    return max;
// }, 0)


// console.log(output);

const user = [
   {name: "Rutvik",surname: "Patel",age: 10},
   {name: "Harsh",surname: "Patel",age: 15},
   {name: "kaushik",surname: "Patel",age: 20},
   {name: "keval",surname: "Patel",age: 10},  
];

const output = user.reduce((acc,curr) => {
   if(acc[curr.age]){
         acc[curr.age]++;
   }
   else{
      acc[curr.age] = 1;
   }
   return acc;
},{});

console.log(output);
