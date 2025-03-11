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
function handleSymbole(symbole){
    switch(symbole){
        case 'C':
        buffer= "0";
        runningtotal=0;
        break;
        

    }

}