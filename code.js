// helloWorld function
// 0
function helloWorld() {
    return "Hello, World!";
}
//---------------------------------------
function sayHello(input){
    if(typeof input != 'string'){
        return 'Hello, World!';
    } else {
        return 'Hello, ' + input + '!';
    }
}
//---------------------------------------

function isFive(input){
    return input === 5;
}
//----------------------------------------
function isEven(input){
    if(typeof input === 'boolean'){
     return false;
    } else {
        return input % 2 === 0;
    }
}
//---------------------------------------
function isVowel(input){
    if(typeof(input) != 'string'){
       return false;
    }
    else return input.toLowerCase() === 'a' || input.toLowerCase() === 'e' || input.toLowerCase() === 'i' || input.toLowerCase() === 'o' || input.toLowerCase() === 'u';
}