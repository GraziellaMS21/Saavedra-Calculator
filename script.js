function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result = 0;

    if (isNaN(num1) || isNaN(num2)) {
        result = alert('Please Input a Number');
    } else {
        switch (operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num2 !== 0 ? (num1 / num2) : 'Cannot divide by zero';
                break;
            default:
                result = 'Invalid operator';
        }
    }

    document.getElementById('result').textContent = result;
}