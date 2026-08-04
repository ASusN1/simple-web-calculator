var display = document.getElementById("display");

function appendValueToDisplay(val){
    display.value = display.value + val;
}

function clearDisplay(){
    display.value = "";
}

function calculateResult(){
    var expression = display.value;
    var operator_index = -1;
    var operator = "";

    for(var i = 1; i<expression.length; i++){
        var current_char = expression.charAt(i);
        if (current_char ==="+"){
            operator = current_char;
            operator_index = i;
            break;
        }else if (current_char ==="-"){
            operator = current_char;
            operator_index = i;
            break;
        }else if (current_char ==="*"){
            operator = current_char;
            operator_index = i;
            break;
        }else if (current_char ==="/"){
            operator = current_char;
            operator_index = i;
            break;
        }
    }

    if(operator_index === -1){
        display.value = "Error";
        return;
    }

    var firstPart = expression.substring(0, operator_index);
    var secondPart = expression.substring(operator_index + 1);
     
    var firstNumber = parseFloat(firstPart);
    var secondNumber = parseFloat(secondPart);
     
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        display.value = "Error";
        return;
    }
     
    var result;
    if (operator === "+") {
        result = firstNumber + secondNumber;
    } else if (operator === "-") {
        result = firstNumber - secondNumber;
    } else if (operator === "*") {
        result = firstNumber * secondNumber;
    } else if (operator === "/") {
        result = firstNumber / secondNumber;
    }

    display.value = result;
}