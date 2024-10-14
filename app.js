/*
    We all know about Roman Numerals, and if not, here's a nice introduction kata. And if you were anything like me, you 'knew' that 
    the numerals were not used for zeroes or fractions; but not so!

    I learned something new today: the Romans did use fractions and there was even a glyph used to indicate zero.

    So in this kata, we will be implementing Roman numerals and fractions.

    Although the Romans used base 10 for their counting of units, they used base 12 for their fractions.

    Further, zero was represented by N.

    Complete the method that takes two parameters: an integer component in the range 0 to 5000 inclusive, and an optional 
    fractional component in the range 0 to 11 inclusive.

    You must return a string with the encoded value. Any input values outside the ranges given above should return "NaR" 
    (i.e. "Not a Roman" :-)
*/

document.addEventListener("DOMContentLoaded", function () {

    let number = +prompt("Introduce un número para pasarlo a números romanos", 0);
    let decimal = +prompt("Introduce un número para pasarlo a números romanos (Opcional)", 0);

    

    const changeNumberButton = document.getElementById('change-number-button');

    changeNumberButton.addEventListener('click', function() {
        number = +prompt("Introduce un número para pasarlo a números romanos", 0);
        decimal = +prompt("Introduce un número para pasarlo a números romanos (Opcional)", 0);

        updateDOM(decimal, number);
    })

    updateDOM(decimal, number);
})

function updateDOM(decimal, number) {
    const introductedNumberField = document.getElementById('number-introduced');
    const romanNumberField = document.getElementById('number-in-roman');


    introductedNumberField.innerHTML = decimal !== 0 ? number + "," + decimal : number;

    romanNumberField.innerHTML = roman_fractions(number, decimal);
}


function roman_fractions(number, decimal = 0) {
    let numberInRoman = "";

    if ((number > 0 && number <= 5000) || (number === 0 && decimal != 0)) {

        const romanNumbers = [
            [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
            [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
            [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
        ];

        for (let i = 0; i < romanNumbers.length; i++) {
            while (number >= romanNumbers[i][0]) {
                number -= romanNumbers[i][0];
                numberInRoman += romanNumbers[i][1];
            }
        }

        if (decimal >= 12 || decimal < 0) {
            numberInRoman = "NaR";
        } else {
            const romanDecimals = ["", ".", ":", ":.", "::", ":.:"];

            let numberInRomanDecimals = "";

            if (decimal >= 6) {
                decimal -= 6;
                numberInRomanDecimals = "S";
            }
            
            

            numberInRomanDecimals += romanDecimals[decimal];

            numberInRoman += numberInRomanDecimals;
        }
    }else if(number === 0){
        numberInRoman = "N";
    }else{
        numberInRoman = "NaR";
    }

    return numberInRoman;
}