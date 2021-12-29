/**
* 3. Какая проблема может быть с этим кодом, если список очень длинный? 
* Предложите и объясните свое решение
*/
let list = readHugeList();
let nextListItem = function () {
let item = list.pop();
if (item) {
// ... обработка записи
nextListItem();
}
};

/**
 * Возможно переполнение стека вызовов. 
 * Можно прибегнуть к помощи цикла событий и использовать setTimeout
 * с таймаутом в 0ms, что позволит выполнить рекурсивные вызовы после
 * основного потока.
 */

let nextListItem = function() {
    let item = list.pop();
    if (item) {
        setTimeout(nextListItem, 0);
    }
}