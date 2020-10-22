function isLeapYear(a){
    if(isInputValid(a)){
        return (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;
    }
}

function isInputValid(year){
    if(isNaN(year)) return false;
    if(year<=0) return false;
    return true;
}