console.log("this is start");


let currValue="";
let display=document.querySelector(".display");

function conCat(v) {
    currValue+=v;
    display.innerHTML=currValue;
}

function cal() {
    display.innerHTML=eval(currValue);
    currValue=display.innerHTML;
    console.log(currValue);
}

function funAc() {
    currValue="";
    display.innerHTML=currValue;
}

function funDel() {
    currValue=currValue.substring(0,currValue.length-1);
    display.innerHTML=currValue;
}