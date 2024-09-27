let num1 = document.getElementById("1");
let num2 = document.getElementById("2");
let num3 = document.getElementById("3");
let num4 = document.getElementById("4");
let num5 = document.getElementById("5");
let num6 = document.getElementById("6");
let num7 = document.getElementById("7");
let num8 = document.getElementById("8");
let num9 = document.getElementById("9");
let c = document.getElementById("c");
let q = document.getElementById("q");
let per = document.getElementById("per");
let div = document.getElementById("div");
let into = document.getElementById("into");
let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let equal = document.getElementById("equal");
let input = [];
let screen = document.getElementById("screen");
let op = [];
let operator = document.getElementById("operator");
document.querySelectorAll('button').forEach(button => {
     button.addEventListener('click', () => {
          var buttonId = button.id;
          if (/\d/.test(buttonId)) {
               input.push(buttonId);
               screen.innerHTML = input.join("");
               console.log(input);
          }
          else {
               if (buttonId === "plus") {
                    input.push(" + ");
                    screen.innerHTML = input.join("");
               }
               else if (buttonId === "equal") {
                    let outPut = input.join("");
                    screen.innerHTML = eval(outPut);
                    console.log(eval(outPut));
                    input=[];
                    input.push(eval(outPut));
                    screen.innerHTML = input.join("");
                    
                    // input=[];
               }
               else if (buttonId === "c") {
                    input = [];
                    screen.innerHTML = "";
               }
               else if (buttonId === "div") {
                    input.push(" / ");
                    screen.innerHTML = input.join("");
               }
               else if (buttonId === "minus") {
                    input.push(" - ");
                    screen.innerHTML = input.join("");
               }
               else if (buttonId === "into") {
                    input.push(" * ");
                    screen.innerHTML = input.join("");
               }
               else if (buttonId === "per") {
                    input.push(" /100");
                    screen.innerHTML = input.join("");
               }
               else if (buttonId === "q") {
                    input.push(" *-1 ");
                    screen.innerHTML = input.join("");
               }
               // operator.innerHTML="*";
          }
     })
});