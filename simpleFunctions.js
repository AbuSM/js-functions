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


