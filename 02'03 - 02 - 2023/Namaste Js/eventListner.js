

function increment(){
    let count = 0;

    document.getElementById("clickMe").addEventListener("click",function xyz(){
        console.log("Clicked"+ count++);
    });
    
}

increment();
