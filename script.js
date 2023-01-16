let total = document.getElementById('total');

function S(){
   return total.innerHTML = 4579000 + 668000 * s1 + 668000 * s2 + 995000 *s3 + 749000 * s4 + 799000 * s5 + 700000 * s6 +" FC";
}

let mai = document.getElementById('main');

let btn1p = document.getElementById('plus1');
let btn1s = document.getElementById('cancel1');
let n1 = document.getElementById('n1');
btn1p.addEventListener('click', foo1);
let s1 = 0;
let i1 = 1;
function foo1(){
    n1.innerHTML =1 + i1++;s1++;
    S();
}
btn1s.addEventListener('click', foot1);

function foot1(){
     if(i1>=1){
    n1.innerHTML = i1-- - 1; s1--;}
    if(i1<=0){
        mai.removeChild(obj1);
    }
    S();
}
let btn2p = document.getElementById('plus2');
let btn2s = document.getElementById('cancel2');
let n2 = document.getElementById('n2');
btn2p.addEventListener('click', foo2);
let s2 = 0;
let i2 = 1;
function foo2(){
    n2.innerHTML =1 + i2++;s2++;
    S();
}
btn2s.addEventListener('click', foot2);

function foot2(){
     if(i2>=1){
    n2.innerHTML = i2-- - 1; s2--;}
    if(i2<=0){
        mai.removeChild(obj2);
    }
    S();
}

let btn3p = document.getElementById('plus3');
let btn3s = document.getElementById('cancel3');
let n3 = document.getElementById('n3');
btn3p.addEventListener('click', foo3);
let s3 = 0;
let i3 = 1;
function foo3(){
    n3.innerHTML = 1 + i3++ ;s3++;
    S();
}
btn3s.addEventListener('click', foot3);

function foot3(){
     if(i3>=1){
    n3.innerHTML = i3-- - 1;s3--;}
    if(i3<=0){
        mai.removeChild(obj3);
    }
    S();
}

let btn4p = document.getElementById('plus4');
let btn4s = document.getElementById('cancel4');
let n4 = document.getElementById('n4');
btn4p.addEventListener('click', foo4);
let s4 = 0;
let i4 = 1;
function foo4(){
    n4.innerHTML = 1 + i4++;s4++;
    S();
}
btn4s.addEventListener('click', foot4);

function foot4(){
     if(i4>=1){
    n4.innerHTML = i4-- - 1;s4--;}
    if(i4<=0){
        mai.removeChild(obj4);
    }
    S();
}

let btn5p = document.getElementById('plus5');
let btn5s = document.getElementById('cancel5');
let n5 = document.getElementById('n5');
btn5p.addEventListener('click', foo5);
let s5 = 0;
let i5 = 1;
function foo5(){
    n5.innerHTML = 1 + i5++;s5++;
    S();}
btn5s.addEventListener('click', foot5);

function foot5(){
     if(i5>=1){
    n5.innerHTML = i5-- - 1;s5--;}
    if(i5<=0){
        mai.removeChild(obj5);
    }
    S();}

let btn6p = document.getElementById('plus6');
let btn6s = document.getElementById('cancel6');
let n6 = document.getElementById('n6');
btn6p.addEventListener('click', foo6);
let s6 = 0;
let i6 = 1;
function foo6(){
    n6.innerHTML = 1 + i6++;s6++;
    S();}
btn6s.addEventListener('click', foot6);

function foot6(){
     if(i6>=1){
    n6.innerHTML = i6-- - 1;s6--;};
    if(i6<=0){
        mai.removeChild(obj6);
    }
    S();}

 let coeur1 = document.getElementById('coeur1');
  coeur1.addEventListener('click', red1);
  
function red1(){
    coeur1.innerHTML ='<i class="fa-solid fa-heart"></i>';
}

coeur1.addEventListener('dblclick', rede1);
  
function rede1(){
    coeur1.innerHTML ='<i <i class="fa-regular fa-heart"></i>';
}

let coeur2 = document.getElementById('coeur2');
coeur2.addEventListener('click', red2);

function red2(){
  coeur2.innerHTML ='<i class="fa-solid fa-heart"></i>';
}

coeur2.addEventListener('dblclick', rede2);

function rede2(){
  coeur2.innerHTML ='<i <i class="fa-regular fa-heart"></i>';
}

let coeur3 = document.getElementById('coeur3');
coeur3.addEventListener('click', red3);

function red3(){
  coeur3.innerHTML ='<i class="fa-solid fa-heart"></i>';
}

coeur3.addEventListener('dblclick', rede3);

function rede3(){
  coeur3.innerHTML ='<i <i class="fa-regular fa-heart"></i>';
}

let coeur4 = document.getElementById('coeur4');
coeur4.addEventListener('click', red4);

function red4(){
  coeur4.innerHTML ='<i class="fa-solid fa-heart"></i>';
}

coeur4.addEventListener('dblclick', rede4);

function rede4(){
  coeur4.innerHTML ='<i <i class="fa-regular fa-heart"></i>';
}

let coeur5 = document.getElementById('coeur5');
coeur5.addEventListener('click', red5);

function red5(){
  coeur5.innerHTML ='<i class="fa-solid fa-heart"></i>';
}

coeur5.addEventListener('dblclick', rede5);

function rede5(){
  coeur5.innerHTML ='<i <i class="fa-regular fa-heart"></i>';
}


let coeur6 = document.getElementById('coeur6');
coeur6.addEventListener('click', red6);

function red6(){
  coeur6.innerHTML ='<i class="fa-solid fa-heart"></i>';
}

coeur6.addEventListener('dblclick', rede6);

function rede6(){
  coeur6.innerHTML ='<i <i class="fa-regular fa-heart"></i>';
}


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