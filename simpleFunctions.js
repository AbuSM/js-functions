/**
 * Counts properties of given object
 */
function propertyCount(obj) {
    return Object.keys(obj).length
}

console.log(propertyCount({a: 1, b: 45, c: null, [Symbol.isConcatSpreadable]: () => {}}));

/**
 * Returns name of employee with maximum salary in an object
 */

function topSalary(salaries) {
    let name = null;
    let max = 0;
    for (let [key, value] of Object.entries(salaries)) {
        if (max < value) {
            max = value;
            name = key;
        }
    }
    return name;
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log(topSalary(salaries));

/**
 * Three functions with different implementation which return sum of given number
 */

function sumLoop(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}
console.log(sumLoop(1))

function sumRecursive(n) {
    return n === 1 ? n : n + sum_recursive(n - 1)
}
console.log(sumRecursive(1))

function sumArithmetic(n) {
    return ((n + 1) / 2) * n
}
console.log(sumArithmetic(1))

