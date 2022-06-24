let num1 = parseInt(prompt('Enter Number 1: ')) //use Number or parseInt
let operator = prompt('Operator: (+, -, *, /) ') //use Number or parseInt
let num2 = parseInt(prompt('Enter Number 2: '))

let result = (num1, num2) => {
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        return num1 * num2
    } else if (operator === '/') {
        return num1 / num2
    }
     else {
        return `Invalid input!!`
    }
}


alert(`${num1} ${operator} ${num2} = ${result(num1, num2)}`);