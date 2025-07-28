let number = document.getElementById("cntNumber");
let decrement = document.getElementById("decrement");
let reset = document.getElementById("reset");
let increment = document.getElementById("increment");
let count=0;

increment.onclick=function() {
    count++;
    number.textContent = count;
}

reset.onclick=function() {
    count = 0;
    number.textContent = count;
}

decrement.onclick=function() {
    count--;
    number.textContent = count;
}