let value = ''
let x = document.getElementById("result")



function reset(){
    value = 0
x.textContent = 0
}
function seven(){
    value = value + '7'
    x.textContent = value
}
function eight(){
    value = value + '8'
    x.textContent = value
}
function nine(){
    value = value + '9'
    x.textContent = value
}
function divide(){
    value = value + '/'
    x.textContent = value
}


function four(){
    value = value + '4'
    x.textContent = value
}
function five(){
    value = value + '5'
    x.textContent = value
}
function six(){
    value = value + '6'
    x.textContent = value
}
function multiply(){
    value = value + '*'
    x.textContent = value
}
function remainder(){
    value = value + '%'
    x.textContent = value
}


function one(){
    value = value + '1'
    x.textContent = value
}
function two(){
    value = value + '2'
    x.textContent = value
}
function three(){
    value = value + '3'
    x.textContent = value
}
function sum(){
    value = value + '+'
    x.textContent = value
}
function subract(){
    value = value + '-'
    x.textContent = value
}

function zero(){
    value = value + '0'
    x.textContent = value
}

function result(){
    let ans = eval(value)
    x.textContent = ans
    value = ans
}