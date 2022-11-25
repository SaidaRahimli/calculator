const calculatorDisplay = document.querySelectorAll('h1')[1]
const inputBtns = document.querySelectorAll('button')
const clearBtn = document.querySelector('.clear')
// console.log(clearBtn, inputBtns)

let firstValue = 0
let awaitingNextValue = false
let operatorValue = ''

function sendNumberValue(number){
    // cari deyeri evrezle eger ilk deyer daxil edilibse
    if(awaitingNextValue){
        calculatorDisplay.textContent=number
        awaitingNextValue = false
    }
    else {
        const displayValue = calculatorDisplay
        calculatorDisplay.textContent = displayValue ==='0' ? number:displayValue + number
    }
}

inputBtns.forEach(inputBtn=>{
    if(inputBtn.classList.length===0){
        inputBtn.addEventListener('click', ()=> sendNumberValue(inputBtn.value))
    }
    
    else if(inputBtn.classList.contains('operator')){
        // inputBtn.addEventListener('click', ()=> useOperator())
    }
})