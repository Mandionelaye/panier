let total = document.getElementById('total');

function S(){
   return total.innerHTML = 668000 * s1 + 668000 * s2 + 995000 *s3 + 749000 * s4 + 799000 * s5 + 700000 * s6 +" FC";
}

let btn1p = document.getElementById('plus1');
let btn1s = document.getElementById('cancel1');
let n1 = document.getElementById('n1');
btn1p.addEventListener('click', foo1);
let s1 = 0;
let i1 = 1;
function foo1(){
    n1.innerHTML = i1++;s1++;
    S();
}
btn1s.addEventListener('click', foot1);

function foot1(){
     if(i1>1){
    n1.innerHTML = i1-- - 2; s1--;}
    S();
}
let btn2p = document.getElementById('plus2');
let btn2s = document.getElementById('cancel2');
let n2 = document.getElementById('n2');
btn2p.addEventListener('click', foo2);
let s2 = 0;
let i2 = 1;
function foo2(){
    n2.innerHTML = i2++;s2++;
    S();
}
btn2s.addEventListener('click', foot2);

function foot2(){
     if(i2>1){
    n2.innerHTML = i2-- - 2; s2--;}
    S();
}

let btn3p = document.getElementById('plus3');
let btn3s = document.getElementById('cancel3');
let n3 = document.getElementById('n3');
btn3p.addEventListener('click', foo3);
let s3 = 0;
let i3 = 1;
function foo3(){
    n3.innerHTML = i3++ ;s3++;
    S();
}
btn3s.addEventListener('click', foot3);

function foot3(){
     if(i3>1){
    n3.innerHTML = i3-- - 2;s3--;}
    S();
}

let btn4p = document.getElementById('plus4');
let btn4s = document.getElementById('cancel4');
let n4 = document.getElementById('n4');
btn4p.addEventListener('click', foo4);
let s4 = 0;
let i4 = 1;
function foo4(){
    n4.innerHTML = i4++;s4++;
    S();
}
btn4s.addEventListener('click', foot4);

function foot4(){
     if(i4>1){
    n4.innerHTML = i4-- - 2;s4--;}
    S();
}

let btn5p = document.getElementById('plus5');
let btn5s = document.getElementById('cancel5');
let n5 = document.getElementById('n5');
btn5p.addEventListener('click', foo5);
let s5 = 0;
let i5 = 1;
function foo5(){
    n5.innerHTML =  i5++;s5++;
    S();}
btn5s.addEventListener('click', foot5);

function foot5(){
     if(i5>1){
    n5.innerHTML = i5-- - 2;s5--;}
    S();}

let btn6p = document.getElementById('plus6');
let btn6s = document.getElementById('cancel6');
let n6 = document.getElementById('n6');
btn6p.addEventListener('click', foo6);
let s6 = 0;
let i6 = 1;
function foo6(){
    n6.innerHTML = i6++;s6++;
    S();}
btn6s.addEventListener('click', foot6);

function foot6(){
     if(i6>1){
    n6.innerHTML = i6-- - 2;s6--;};
    S();}

 

let obj1= document.getElementById('obj1');

obj1.addEventListener('mouseenter', enter);

function enter(){
    obj1.setAttribute("style","box-shadow: 0 -10px 15px rgba(197, 197, 197, 0.606); ");
}
obj1.addEventListener('mouseleave', sortie1);

function sortie1(){
    obj1.removeAttribute("style");
}


let obj2= document.getElementById('obj2');

obj2.addEventListener('mouseenter', enter2);

function enter2(){
    obj2.setAttribute("style","box-shadow: 0 -10px 15px rgba(197, 197, 197, 0.606); ");

}
obj2.addEventListener('mouseleave', sortie2);

function sortie2(){
    obj2.removeAttribute("style");
}


let obj3= document.getElementById('obj3');

obj3.addEventListener('mouseenter', enter3);

function enter3(){
    obj3.setAttribute("style","box-shadow: 0 -10px 15px rgba(197, 197, 197, 0.606); ");
    
}
obj3.addEventListener('mouseleave', sortie3);

function sortie3(){
    obj3.removeAttribute("style");
}

let obj4= document.getElementById('obj4');

obj4.addEventListener('mouseenter', enter4);

function enter4(){
    obj4.setAttribute("style","box-shadow: 0 -10px 15px rgba(197, 197, 197, 0.606); ");
    
}
obj4.addEventListener('mouseleave', sortie4);

function sortie4(){
    obj4.removeAttribute("style");
}

let obj5= document.getElementById('obj5');

obj5.addEventListener('mouseenter', enter5);

function enter5(){
    obj5.setAttribute("style","box-shadow: 0 -10px 15px rgba(197, 197, 197, 0.606); ");
    
}
obj5.addEventListener('mouseleave', sortie5);

function sortie5(){
    obj5.removeAttribute("style");
}

let obj6= document.getElementById('obj6');

obj6.addEventListener('mouseenter', enter6);

function enter6(){
    obj6.setAttribute("style","box-shadow: 0 -10px 15px rgba(197, 197, 197, 0.606); ");
    
}
obj6.addEventListener('mouseleave', sortie6);

function sortie6(){
    obj6.removeAttribute("style");
}