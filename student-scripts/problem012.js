function objectsDiff(a, b){
    let arr1=Object.getOwnPropertyNames(a);
    let arr2=Object.getOwnPropertyNames(b);
    return arr1
        .filter(x => !arr2.includes(x))
        .concat(arr2.filter(x => !arr1.includes(x)));
}


