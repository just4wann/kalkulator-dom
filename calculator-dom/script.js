const x = document.getElementById('input1');
const y = document.getElementById('input2');

function getNumber1() {
    const setValue1 = parseInt(x.value);
    return setValue1;
}

function getNumber2() {
    const setValue2 = parseInt(y.value);
    return setValue2;
}

const style = {
    on : function() {
            result.style.border = '3px solid rgb(96, 224, 240)';
            result.style.color = 'white';
        },

    off : function() {
            result.style.border = '3px solid #576CBC';
            x.style.background = 'transparent';
            y.style.background = 'transparent';
            result.style.color = 'white';
        },

    alert : {
        pop : function() {
            result.style.border = '3px solid red';
            result.style.color = 'red'; 
        },

        input1 : function() {
            x.style.backgroundColor = 'red';
        },

        input2 : function() {
            y.style.backgroundColor = 'red';
        }
    }
}

function alertPopUp() {
    const popUp = document.querySelector('.main p');
    
    if ( x.value == '' ) {
        popUp.classList.remove('delete');
        getResult = '';
        style.alert.input1();
        style.alert.pop();
    }

    if ( y.value == '' ) {
        popUp.classList.remove('delete');
        getResult = '';
        style.alert.input2();
        style.alert.pop();
    }
    
}

const result = document.querySelector('.result h4');
const operand = document.querySelectorAll('.operand input');
let getResult = '';

for ( let i = 0; i < operand.length; i++ ) {
    if ( operand[i] == operand[0] ) {
            operand[i].addEventListener('click', function() {
                style.on();
                alertPopUp();
                getResult = getNumber1() + getNumber2();
                result.innerHTML = getResult;
            })
        }
    if ( operand[i] == operand[1] ) {
            operand[i].addEventListener('click', function() {
                style.on();
                alertPopUp();
                getResult = getNumber1() - getNumber2();
                result.innerHTML = getResult;
            })
        }
    if ( operand[i] == operand[2] ) {
            operand[i].addEventListener('click', function() {
                style.on();
                alertPopUp();
                getResult = getNumber1() * getNumber2();
                result.innerHTML = getResult;
            })
        }
    if ( operand[i] == operand[3] ) {
            operand[i].addEventListener('click', function() {
                style.on();
                alertPopUp();
                getResult = getNumber1() / getNumber2();
                result.innerHTML = Math.trunc(getResult * Math.pow(10, 2)) / Math.pow(10,2);
            })
        }
    
}

const clearAlert = document.querySelector('.value');
const clearAll = document.querySelector('.reset button');
const pDelete = document.querySelector('.main p');

clearAlert.addEventListener('click', function() {
    pDelete.classList.add('delete');
    result.innerHTML = '';
    style.off();
})

clearAll.addEventListener('click', function() {
    x.value = '';
    y.value = '';
    result.innerHTML = '';
    pDelete.classList.add('delete');
    style.off();
})