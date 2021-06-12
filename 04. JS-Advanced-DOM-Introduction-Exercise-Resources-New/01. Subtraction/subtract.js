function subtract() {
    let num1 = document.getElementById('firstNumber').value;
    let num2 = document.getElementById('secondNumber').value;
    let resultEnd=document.getElementById('result');
    let result=Number(num1)-Number(num2);

   resultEnd.textContent=result;
}