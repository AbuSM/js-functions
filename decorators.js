/**
 * Function used for caching results
 * @param func
 * @returns {function(*=): (any | undefined)}
 */

function cachingDecorator(func) {
    let cache = new Map()
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        let result = func.call(this, x);
        cache.set(x, result)
        return result;
    }
}

/**
 * Decorator function for storing function calling arguments
 * @param func
 * @returns {function(...[*]=): *}
 */
function spy(func) {
    let calls = [];
    return function wrapper(...args) {
        calls.push(args)
        wrapper.calls = calls;
        return func
    }
}
function work(a, b) {
    alert( a + b ); // произвольная функция или метод
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9
work(5, 5)
// for (let args of work.calls) {
//     console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

function delay(f, ms) {
    function wrapper(...args) {
        setTimeout(() => f.apply(this, args), ms)
    }
    return wrapper
}

function f(x) {
    console.log(x);
}
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test1");

/**
 * Debounce function
 * @param func
 * @param ms
 * @returns {function(...[*]=): undefined}
 */
function debounce(func, ms) {
    let isCoolDown = false;
    return function wrapper(...args) {
        if (isCoolDown) return;
        func.apply(this, args)
        isCoolDown = true;
        setTimeout(() => isCoolDown = false, ms);
    }
}

/**
 * Throttle function
 * @param func
 * @param ms
 * @returns {function(): undefined}
 */
function throttle(func, ms) {
    let isThrottled = false,
        savedArgs,
        savedThis;

    return function wrapper() {

        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments); // (1)

        isThrottled = true;

        setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }
}