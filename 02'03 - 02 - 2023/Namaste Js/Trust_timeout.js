console.log("Start");

setTimeout(function(){
    console.log("Callback");
},5000);

setTimeout(function(){
    console.log("Callback 0");
},0);

console.log("End");


//10 sec blocking

let startTime = new Date().getTime();
let endTime = startTime;

while(endTime <= startTime + 10000){
    endTime = new Date().getTime();
}

console.log("10 sec completed");

