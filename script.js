let runningtotal =0;
let buffer = "0";
let previousoperator;

const screen= document.querySelector( '.screen');
function buttonclick(value){
    if(isNaN(value)){
        handleSymble(value);
}else{
    handleSymble(value);
}
screen.innerTxt=buffer;
}
function handleSymbole(symbol){
    switch(symbol){
        case 'C':
        buffer= "0";
        runningtotal=0;
        break;

        case'=':
        if(previousoperator === null){
            return
        }
        flushOperation(parseInt(buffer));
        previousoperator =null;
        buffer = runningtotal;
        runningtotal =0;
        break;

        case '←':
            if(buffer.length ===1){
                buffer= '0';
            }  else{
                buffer = buffer.toString(0,buffer.length =1);
            }
            break;
            case '+':
            case '-':
            case '×':
            case '÷':
                handlemath(Symbol);
                break;   
    }
}
function handlemath(symbol){
    if(buffer === '0'){
        return;
    }
    const intBuffer = parseInt(buffer);
    if(runningtotal ===0){
        runningtotal = intBuffer;
    }
    else{
        flushOperation(intBuffer);
    }
    previousoperator = symbol;
    buffer = '0';
}

