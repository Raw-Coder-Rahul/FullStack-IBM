function updateScreen(value){
    const screen = document.querySelector('.screen');
    screen.value = value;
}

function getScreenValue(){
    const screen = document.querySelector('.screen');
    return screen.value;
}

function percentage(){
    let presentvalue = getScreenValue();
    if (presentvalue) {
        presentvalue = parseFloat(presentvalue) / 100;
        updateScreen(presentvalue);
    }
}

function clearScreen(){
    updateScreen(0);
}

function clearAll(){
    updateScreen('');
}

function last(){
    let presentvalue = getScreenValue();
    if (presentvalue.length > 0) {
        presentvalue = presentvalue.slice(0, -1);
        updateScreen(presentvalue);
    }
}

function inverse(){
    let presentvalue = getScreenValue();
    if (presentvalue) {
        presentvalue = 1 / parseFloat(presentvalue);
        updateScreen(presentvalue);
    }
}

function square(){
    let presentvalue = getScreenValue();
    if (presentvalue) {
        presentvalue = parseFloat(presentvalue) ** 2;
        updateScreen(presentvalue);
    }
}

function squareroot(){
    let presentvalue = getScreenValue();
    if (presentvalue) {
        presentvalue = Math.sqrt(parseFloat(presentvalue));
        updateScreen(presentvalue);
    }
}

function number(key){
    let keyType = key.getAttribute('key');
    let screen = document.querySelector('.screen');
    screen.value += keyType;
}

function negative(){
    let presentvalue = getScreenValue();
    if (presentvalue) {
        presentvalue = parseFloat(presentvalue) * (-1);
        updateScreen(presentvalue);
    }
}

function calculate(){
    let presentvalue = getScreenValue();
    try {
        presentvalue = eval(presentvalue);
        updateScreen(presentvalue);
    } catch (error) {
        updateScreen('Error');
    }
}