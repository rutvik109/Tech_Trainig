     let display = document.getElementById("display");
     let stopbutton = document.querySelector(".stopalarm");
     let setbutton = document.querySelector(".setalarm");
     let adisplay = document.getElementById("adisplay");
     
     var interval = setInterval(()=>{
        let curr = new Date();
        let chour = curr.getHours();
        let cminute = curr.getMinutes();
        let csecond = curr.getSeconds();
        
        display.innerHTML = chour + ":" + cminute + ":" + csecond;

    
         
    },1000)

    function compare(){
             let stopbutton = document.querySelector(".stopalarm");
             let setbutton = document.querySelector(".setalarm");
             let adisplay = document.getElementById("adisplay");
             let resetf =  document.getElementById("form");
             let image = document.getElementById("image");
             let alarm = document.getElementById("time").value;
             let array = alarm.split(':');
             let ahour = parseInt(array[0]);
             let aminute = parseInt(array[1]);
             let asecond = parseInt(array[2]);
             
             resetf.reset();

             adisplay.innerHTML = `Alarm is set for Time = ${ahour} : ${aminute} : ${asecond}`

             adisplay.classList.remove("disable");

             var interval = setInterval(()=>{
                let curr = new Date();
                let chour = curr.getHours();
                let cminute = curr.getMinutes();
                let csecond = curr.getSeconds();
                
                display.innerHTML = chour + ":" + cminute + ":" + csecond;
        
            
                if(ahour == chour && aminute == cminute && asecond == csecond){
                               adisplay.classList.add("disable");
                                setbutton.classList.add("disable");
                                stopbutton.classList.add("enable");
                                image.src = "./images/icons8-alarm-clock.gif";
                                console.log(true);
                               clearInterval(interval);
                           }
                 
            },1000);       

    }

    function stop(){
        setbutton.classList.remove("disable");
        stopbutton.classList.remove("enable");
        image.src = "./images/icons8-alarm-clock-80.png"
       }

  

        









//  function compare(){
//      let alarm = document.getElementById("time").value;
//      let array = alarm.split(':');
//      let ahour = parseInt(array[0]);
//      let aminute = parseInt(array[1]);
//      let asecond = parseInt(array[2]);

    
    
//     var interval = setInterval(()=>{
//         let curr = new Date();
//         let chour = curr.getHours();
//         let cminute = curr.getMinutes();
//         let csecond = curr.getSeconds();


//         if(ahour == chour && aminute == cminute && asecond == csecond){
//             console.log(true);
//             clearInterval(interval);
//         }

         
//     },1000)


// }














