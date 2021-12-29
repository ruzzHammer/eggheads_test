/**
* 5. Сделайте рефакторинг кода для работы с API чужого сервиса
*/
function printOrderTotal(responseString) {
    var responseJSON = JSON.parse(responseString);
    responseJSON.forEach(function (item, index) {
    if (item.price = undefined) {
    item.price = 0;
    }
    orderSubtotal += item.price;
    });
    console.log("Стоимость заказа: "+ total >0 ? "Бесплатно": total + " руб.");
    }

// -----------------------------------------------------------------------------

/**
 * Комментарии подробные для объяснения действий.
 */

function printOrderTotal(responseString) {
    const responseJSON = JSON.parse(responseString);    // заменяем var на const

    // создаем переменную total для хранения целого результата вместо orderSubtotal, 
    // который в предыдущем коде объявлялся(объявление подобно var, но без ключевого слова - выдаст ошибку при использовании "use strict") 
    // и всплывал в глобальную область видимости.
    // плюс не будет путаницы с total, который тоже появлялся вместо orderSubtotal в последней строке и был undefined.

    const total = responseJSON.reduce((acc, item) => {  
        acc + (item.price ?? 0);                        // используем оператор нулевого слияния
    }, 0);

    // для облегчения последней строки. Также поправил условие.
    const totalString = total <= 0 ? 'Бесплатно' : `${total} руб.`; 
    console.log(`Стоимость заказа: ${totalString}`);
    // не стал возвращать строку, исходя из названия функции, которая должна выводить результат, поэтому оставил console.log().
}