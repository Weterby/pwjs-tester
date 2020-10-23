function magicSequence(n){
    if(n==1) return -1;
    if(n==2 || n==3) return -2;
    return magicSequence(n-1)*(n-3);
}