// function incrementCon(){
//     var count = 0;
//      return function increment(){
//         count++;
//         console.log(count);
//      }
// }

// var count1 = incrementCon();
// count1();
// count1();
// count1();
// count1();

// var count2 = incrementCon();
// count2();
// count2();
// count2();
// count2();


function Counter(){
    var count = 0;

    this.increment = function (){
        count++;
        console.log(count);
    }
    this.decrement = function (){
        count--;
        console.log(count);
    }


}

var count1 = new Counter();
count1.increment();
count1.increment();

 