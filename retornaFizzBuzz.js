
function fizzBuzz(initi) {
    if(typeof initi !== 'number'){
        return NaN;
    }else if ((initi %3 === 0) && (initi %5 === 0)){
        return("FizzBuzz");
    }else if(initi %3 === 0 ){
        return("Fizz");
    }else if (initi %5 === 0){
        return("Buzz");
    }else {
        return initi;
    }
}
console.log(fizzBuzz());