// const cart = ["kurta","pants","shirt"];

// createOrder(cart,function(orderId){
//     paymentProceed(orderId);
// });

// const promise = createOrder(cart);

// promise.then(function(orderId){
//     paymentProceed(orderId);
// })

const coffee = fetch("https://api.sampleapis.com/coffee/hot");
console.log(coffee);
coffee.then(function(data){
    console.log(data.json());
})