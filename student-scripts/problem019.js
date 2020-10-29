function carry (a) {
    let nargs = a.length;
    let vargs = [];
    let curried = (...args) => vargs.push(...args) >= nargs
        ? a(...vargs.slice(0, nargs))
        : curried;

    return curried;
}
