function sum(arr) {
    return arr.reduce((acc, next) => acc + next, 0);
}

function multiply(arr) {
    return arr.reduce((acc, next) => acc * next, 1);
}

function reverse(arr) {
    return arr.split("").reduce((rev,char)=> char + rev, '');

}
function filterLongWords(arr, number) {
    let filteredWords = arr.filter(arr => arr.length > number);
    return filteredWords;
}



