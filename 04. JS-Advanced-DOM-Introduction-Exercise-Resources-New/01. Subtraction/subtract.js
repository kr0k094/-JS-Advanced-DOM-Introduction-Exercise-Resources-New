function subtract() {
    let num1 = document.getElementById("firstNumber").value;
    let num2 = document.getElementById("secondNumber").value;
    let result = Number(num1) - Number(num2);
    let total = document.getElementById("result").textContent = result
    console.log(total);
    return total;
}