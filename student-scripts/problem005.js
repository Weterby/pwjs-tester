function strangeSum(a, b){
    if(!isInputValid(a,b)) return null;
    if(a==b) return 3*(a+b);
    else return a+b;
}

function isInputValid(a,b){
    if(a!=parseInt(a) || b!=parseInt(b)) return false;
    if(isNaN(a) || isNaN(b)) return false;
    return true;
}