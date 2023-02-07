var a = 10;
console.log(a);
am();


function  am(){
    var b =  100;
    console.log(a);
    bm();

            function bm(){
                console.log(a);
                console.log(b);
                var c = 10000;
                console.log(c);
            }

}
console.log(b);