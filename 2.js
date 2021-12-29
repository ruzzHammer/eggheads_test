/**
* 2. Написать функцию, которая будет работать правильно при обоих вызовах, 
* как показано на приведенном коде
* 
* console.log(sum(2, 3)); // результат 5
* console.log(sum(2)(3)(5)); // сумма всех элементов
/

/**
 * Вариант с записью всех аргументов в один общий массив.
 * Требует приведения типов. Здесь + (Number()).
 */

function sum(...firstArgs) {
    const argumentsArray = firstArgs;

    function add(...addArgs) {
        argumentsArray.push(...addArgs);
        return add;
    }

    add.toString = function() {
        const res = argumentsArray.reduce((a, b) => a + b);
        return res;
    }

    return add;
}

console.log(+sum(2, 3)); // 5
console.log(+sum(2)(3)(5));  // 10
console.log(+sum(1)(3, 5, 7)(3, 4, 6)(13)) // 42


/**
 * Вариант в одну строку (разделен для лучшей читаемости).
 * Требует скобок в конце для вызова функции.
 */


function sumOneLine(...args) {
    return (...subArgs) => 
    subArgs.length ? 
    sumOneLine(...args, ...subArgs) : 
    args.reduce((a, b) => a + b, 0);
}

console.log(sumOneLine(2, 3)()); // 5
console.log(sumOneLine(2)(3)(5)());  // 10
console.log(sumOneLine(1)(3, 5, 7)(3, 4, 6)(13)()) // 42

