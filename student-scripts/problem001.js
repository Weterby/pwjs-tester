function triangleArea(a, b, c){
    if(isInputValid(a,b,c)) {
        const p = (a + b + c) / 2;
        return Math.round(Math.sqrt(p * (p - a) * (p - b) * (p - c)) * 100) / 100;
    }
    else return -1;
}

function isInputValid(a,b,c){
    if(isNaN(a) || isNaN(b) || isNaN(c)) return false //arguments check
    if(a<=0 || b<=0 || c<=0) return false; //negative check
    if(!(a<b+c && b<a+c && c<b+a)) return false; //triangle check
    return true;
}