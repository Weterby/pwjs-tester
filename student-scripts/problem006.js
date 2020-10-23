function divisible(a){
    for(let i=1;i<arguments.length;i++)
        if(a%arguments[i]!=0) return false;
    return true;
}