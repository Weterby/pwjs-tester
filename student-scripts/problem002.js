function stringRotate(a, b) {
    if(isInputValid(a,b)){
        return a.substring(b)+a.substring(0,b);
    }
    else return '';
}

function isInputValid(string, number){
    if(typeof string !== 'string') return false;
    if(typeof number !== 'number') return false;
    if(number<0 || number>string.length) return false;
    return true;
}