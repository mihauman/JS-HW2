const startValue = Number(prompt('Введіть стартове число', '10'));
const endValue = Number(prompt('Введіть кінцеве число', '100'));
const skip = confirm('Пропускати парні числа?');
let sum = 0;
for(let i = startValue; i <= endValue; i++){  
if(skip){
        if(i%2===0)
        {
           continue;
        } 
        else
        {
            sum += i; 
        }
    }
}
document.writeln(`<p>Start number: ${startValue}<p>`);
document.writeln(`<p>End number: ${endValue}<p>`);
document.writeln(`<p>Sum : ${sum}<p>`);
