//  Function-Context-Demo
Если бы было использовано "use strict";, результат был бы другим.
    В режиме "use strict"; контекст выполнения функции не будет привязан к глобальному объекту (window в браузере),
если функция вызывается в нестрогом режиме.

    Поскольку в этом примере innerFunc вызывается без явного указания контекста (innerFunc()),
    и use strict не используется, контекст выполнения будет ссылаться на глобальный объект (в браузере это window),
поэтому innerFunc() возвращает true, так как это сравнение проверяет, равен ли контекст выполнения innerFunc глобальному объекту window.

    Однако, если бы был использован "use strict";, контекст выполнения функции был бы undefined,
    а не глобальный объект window. В этом случае innerFunc() вернул бы false.
function outer() {
    return function () {
        return this
    }
}


const innerFunc = outer()

console.log(innerFunc() === window)
TRUE
