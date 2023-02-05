let buttons = document.querySelectorAll(".button");
let display = document.getElementById("display");


for(let x = 0;x < buttons.length;x++){

    buttons[x].addEventListener("click",(e) =>{
        if(e.target.value == "="){
           display.innerHTML =  eval(display.innerHTML);
        }
        else if(e.target.value == "c"){
            display.innerHTML = " ";
        }
        else if(e.target.value == "d"){
            let result = display.innerHTML;
            // console.log(typeof result);
            // console.log(result.slice(0,result.length - 1));
            display.innerHTML = result.slice(0,result.length - 1) ;
        }
        else{
            display.innerHTML += e.target.value;
        }
    });
}






