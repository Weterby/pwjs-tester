function deepFindAndCount(a, b){
    let counter=0;
    return a.flat().filter(x => x==b).length;
}