//to avoid call back hell

const cart = ["shoes","pants","kurta"];

creteOrder(cart,function(orderDetails){
    paymentProceed(orderDetails,function(paymentInfo){
        showOrderSummery(paymentInfo,function(){
            upateWalletBalance();
        });
    });
});

createOrder(cart)
.then(function(orderDetails){
    return paymentProceed(orderDetails)
})
.then(function(paymentInfo){
   return showOrderSummery(paymentInfo)
})
.then(function(){
 return updateWalletBalance()});