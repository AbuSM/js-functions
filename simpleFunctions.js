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

/**
 * Function to test lexical environment
 * @returns {a}
 */
function lexical() {
    let name = "John";
    function a() {
        console.log("Name: ", name);
    }
    name = "Pete";
    return a;
}
const a = lexical()
a();

/**
 * Functions which work with closures
 */

function inBetween(a, b) {
    return item => item >= a && item <= b
}
function inArray(arr) {

    return item => arr.includes(item)
}

const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.filter(inBetween(3, 6)))
console.log(arr.filter(inArray([4, 1, 5, 11])))

function byField(name) {
    return (a, b) => a[name] > b[name] ? 1: -1
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

/**
 * 
 * @param a
 * @returns {any}
 */
function sum(a) {

    let currentSum = a;

    function f(b) {
        currentSum += b;
        return f;
    }

    f.toString = function() {
        return currentSum;
    };

    return f;
}
console.log(sum(1)(2)); // 3
console.log(sum(0)(1)(2)(3)(4)(5)); // 15

/**
 * Functions that work with setInterval and setTimeout
 * @param from
 * @param to
 */

function printNumbersInterval(from, to) {
    let currentValue = from;
    const intervalId = setInterval(() => {
        if (currentValue === to) {
            clearInterval(intervalId)
        }
        console.log(currentValue)
        currentValue++;
    }, 1000)
}

function printNumbersTimeout(from, to) {
    let currentValue = from;
    const timeoutId = setTimeout(function handler() {
        console.log(currentValue)
        if (currentValue === to)  {
            clearTimeout(timeoutId);
            return;
        }
        currentValue++;
        setTimeout(handler, 1000);
    }, 1000)
}
printNumbersTimeout(5, 11)