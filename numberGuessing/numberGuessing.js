minimum = 1;
maximum = 100;

number = Math.round(Math.random() * (maximum - minimum + 1) + minimum);

let attempt = 0;
let running = true;

while(running)
{
    let guess = window.prompt(`Guess the number between ${minimum} and ${maximum}`);
    guess = Number(guess);

    if(guess == NaN)
    {
        window.alert("Enter the valid number");
    }

    else if(guess < minimum || guess > maximum)
    {
        window.alert("Enter a valid number");
    }

    else
    {
        if(guess > number)
        {
            window.alert("Too high !!");
            attempt++;
        }

        else if(guess < number)
        {
            window.alert("Too low !!");
            attempt++;
        }

        else
        {
            attempt++;
            window.alert(`Correct !!, You are taking ${attempt} attempts`);
            running = false;
        }
    }


    
}