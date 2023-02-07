const radius = [12,11,5,10];

const area = function(radius){
    return Math.PI * radius * radius;
};

const circumfernce = function(radius){
    return 2 * Math.PI * radius;
}


console.log(radius.map(area));
console.log(radius.map(circumfernce));

// const calculate = function(radius,logic){
//     const output = [];
//     for(let i = 0;i < radius.lenght;i++){
//         output.push(logic(radius[i]));
//     }
//     return output;
// };
//console.log(calculate(radius,area));


// const calculate = function(radius){
//     const output = [];
//     for(var i = 0;i < radius.length;i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     console.log(output);
// }
