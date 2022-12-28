const display = document.querySelector("#panel");
const buttons = document.querySelector("#btns");
let firstNum, operatorForAdvanced, previousKey, previousNum;

function calculate(n1, operator, n2) {
    let result;

    n1 = Number(n1);
    n2 = Number(n2);

    if(operator === "+") {
        result = n1 + n2;
    } else if(operator === "-") {
        result = n1 - n2;
    } else if(operator === "x") {
        result = n1 * n2;
    } else if(operator === "/") {
        result = n1 / n2;
    } else if(operator === "%") {
        result = n1 % n2;
    }

    return String(result)
}

buttons.addEventListener("click", function (event) {
  const target = event.target; // 클릭된 HTML 정보
  const action = target.classList[0]; //target의 클래스 중 첫 번째
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "number") {
        if(display.textContent === "0" || previousKey === "oper" || previousKey === "calculate") {
            display.textContent = buttonContent;
        } else if(previousKey === "number") {
            display.textContent += buttonContent;
        }

        previousKey = "number";
    }
    if (action === "oper") {
        firstNum = display.textContent;
        operatorForAdvanced = buttonContent;

        previousKey = "oper";
    }
    if (action === "decimal") {
        previousKey = "decimal";
    }
    if (action === "clear") {
        firstNum = undefined;
        secondNum = undefined;
        operatorForAdvanced = undefined;
        display.textContent = "0";
        previousKey = "clear";
    }
    if (action === "calculate") {
        const secondNum = display.textContent;
        display.textContent = calculate(firstNum, operatorForAdvanced, secondNum);
        previousKey = "calculate";
    }

  }
});