/*
    symbol - Новый тип данных
    Нужен чтобы создавать уникальные ключи
    у symbol есть методы for

    СИМВОЛЫ НУЖНЫ ЧТОБЫ НЕ БЫЛО КОНФЛИКТОВ СРЕДИ ИМЕН
*/

// уже помощью метода for 2 символа уже равны.
// так как они ведут на 1 и тот же символ
let symbol1 = Symbol.for('test1');
let symbol2 = Symbol.for('test2'); 
let symbol3 = Symbol.for('test3'); 
// Каждый символ уникальный
// Создать 2 уникальных символа нельзя
console.log(symbol1 == symbol2); // false
console.log(symbol1 === symbol2); // false

// МЕТОД KeyFor - конструктор обьекта
// Метод KeyFor - позволяет искать по ключу тоесть 'test3' есть ключ
let test = Symbol.keyFor(symbol3);

console.log(test);

/*
    Применение symbol в обьекте.
*/

const user7 = {
    name: 'Oleg Ivanov',
    [Symbol.for('password')] : 'qwerty123',
};

console.log(user7); 
/*
    {name: 'Oleg Ivanov', Symbol(password): 'qwerty123'}
    name
    : 
    "Oleg Ivanov"
    Symbol(password)
    : 
    "qwerty123"
    [[Prototype]]
    : 
    Object
*/

console.log(Object.keys(user7)); // Символ зашифрован.
let password = user7[Symbol('password')];
console.log(password); // undefined

/*
    getOwnPropertySymbols - Чтобы получить все свойства символа обьекта
*/

console.log(Object.getOwnPropertySymbols(user7));

const user8 = {
    name: 'Oleg',
    // Уникальный символ password
    [Symbol('password')] : 'qwerty123',
    password: 'wwdwdw'
}

console.log(user8);