function calcular() {
    var num1 = Number(document.getElementById('txt1').value);
    var num2 = Number(document.getElementById('txt2').value);
    var oper = document.getElementById('oper')
    
    var res = 0
    if (oper.value == "somar") {
        res = num1 + num2;
    } else if (oper.value == "subtrair") {
        res =  num1 - num2;
    } else if (oper.value == "multiplicar") {
        res = num1 * num2;
    } else if (oper.value == "dividir") {
        res = num1 / num2;
    } else {
        window.alert('Tente de novo')
    }
    
    document.getElementById('end').innerHTML = res
}