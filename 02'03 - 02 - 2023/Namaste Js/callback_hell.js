cart = ["shoes","pants","kurta"];

api.CreateOrder(cart,function (){
    api.proceedToPayment(function(){
        api.showOrderSummery(function(){
                api.updateWallet()
        })
    });
});