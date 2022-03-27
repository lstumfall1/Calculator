class Calculator {
    constructor(previousOperandTextElement, CurrentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.CurrentOperandTextElement = CurrentOperandTextElement
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {

    }

    appendNumber(number) {

    }

    chooseOperation(operation) {

    }

    compute() {

    }

    updateDisplay() {

    }
}

const numberButtons = document.querySelectorAll('[data-number')
const operationButtons = document.querySelectorAll('[data-operation')
const equalsButtons = document.querySelector('[data-equals')
const deleteButtons = document.querySelector('[data-delete')
const allClearButtons = document.querySelector('[data-all-clear')
const previousOperandTextElement = document.querySelector('[data-previous-operand')
const CurrentOperandTextElement  = document.querySelector('[data-current-operand')