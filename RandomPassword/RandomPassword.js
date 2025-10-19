
function PasswordGenerator(length,LowerChars,UpperChars,NumberChars,SymbolChars)
{
    let includeLowerChars = "abcdefghijklmnopqrstuvwxyz";
    let includeUpperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let includeNumberChars = "0123456789";
    let includeSymbolChars = "@#$%^&*_";

    let allowedChars = "";
    let password1 = "";

    allowedChars += LowerChars ? includeLowerChars : "";
    allowedChars += UpperChars ? includeUpperChars: "";
    allowedChars += NumberChars ? includeNumberChars : "";
    allowedChars += SymbolChars ? includeSymbolChars : "";

    if(length < 1)
    {
        console.log("Atlesst one Character");
    }

    for(let i=0 ; i < length ; i++)
    {
        const password12 = Math.floor(Math.random() * allowedChars.length) ;
        password1 += allowedChars[password12];
    }
    return password1;

}

let length = 10;
let LowerChars = true;
let UpperChars = true;
let NumberChars = true;
let SymbolChars = true;

let password = PasswordGenerator(length,LowerChars,UpperChars,NumberChars,SymbolChars);

document.getElementById("password").textContent = password;