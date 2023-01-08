function sum(a, b) {
    return a + b;
}

function sumAllNumbers (numbers) {
    if (typeof numbers !== 'object') 
        return;

    return numbers.reduce((a, b) => a + b);
}

module.exports = {
    sum: sum,
    sumAllNumbers: sumAllNumbers,
};