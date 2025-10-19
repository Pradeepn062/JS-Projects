let input_box = document.getElementById("input-box");
let CF = document.getElementById("CF");
let FC = document.getElementById("FC");
let button = document.getElementById("button");
let result = document.getElementById("result");

let temp = 0;

function btn()
{
    if(CF.checked)
    {
        temp = input_box.value;
        temp = temp * 9/5 + 32 ;
        result.textContent = temp + "ºF";
    }

    else if(FC.checked)
    {
        temp = input_box.value;
        temp = (temp - 32) * (5/9) ;
        result.textContent = temp + "ºC";
    }

    else{
        result.textContent = "Select a unit";
    }
}