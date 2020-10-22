function getTotalNumberOfNewYaersEveSundays(a, b){
    if(isInputValid(a,b)) {
        let counter = 0;
        for (let i = a; i <= b; i++) {
            let year = new Date(i, 0, 1);
            if (year.getDay() === 0) counter++;
        }
        return counter;
    }
    else return 'Blad w danych';
}

function isInputValid(a, b){
    if(isNaN(a) || isNaN(b)) return false;
    if(a<=0 || b<=0) return false;
    return true;
}