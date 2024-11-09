/*  REST & SPREAD ОПЕРАТОРЫ

    REST Оператор используется, чтобы создавать новые функции с неопределенным числом аргументов

    SPREAD Оператор позволяет вставлять массив в функцию, которая по умолчанию работает с обычным списком аргументов

*/

// arr = будем ожидать массив
// Надо найти сумму всех значений которые придут
// ... REST ОПЕРАТОР ПОМОГАЕТ ПРЕДСТАВИТЬ НЕОГРАНИЧЕННОЕ ЧИСЛО ВХОДНЫХ ДАННЫХ В ВИДЕ МАССИВА
// Когда данные поподут в функцию они будут являться массивом
const findSum = (...arr) => {
    console.log(arr); // РАВЕН МАССИВУ
    // sum = будем акумулироват каждый наш item
    return arr.reduce((sum, item) => {
        return sum += item;
    }, 0); // reduce требудет стартовая позиция 0
};

let resSum = findSum(1, 4, 5, 6, 7, 8); // Это просто коллекция значений
console.log(resSum); // arr reduce is not a function (Метод reduce работает только с массивом)
// После rest оператора вывод = 31

function foo(args){
    // Псевдо массив arguments (Не обазятельно выводить параметр args)
    console.log(arguments); // Получили все аргументы = 5
    for(let i = 0 ; i < arguments.length; i++){
        console.log(arguments[i]); // Получили значение всех аргументов
    }
};
// Если забыли 2 аргумент вставить то будет undefined
// Если вставили больше аргументов но параметр 1 то 1 параметр выводится и будет
foo('Ivan', 'Marina', 'Oksana', 'Elena', 'Dima');
// foo(7, 9, 8, 1, 567);

// МОЖНО ПЕРЕПИСАТЬ ЗНАЧЕНИЯ ПРЯМ В МАССИВЕ
function foo1(){
    arguments[0] = 'Sergey';
    return arguments
};

foo1('Ivan', 'Marina', 'Oksana', 'Elena', 'Dima');

/*
    SPREAD ОПЕРАТОР
*/ 

let arr = [1, 2, 4, 876, 900];
console.log(...arr); // ... spread оператор раскрывает массив.
console.log(Math.max(...arr)); // Math.max не принимает массив но с spread может = 900

// Склонировали массив в новый в массив.s
let newArray = [...arr];
console.log(newArray);

// REST ПРЕВРАЩАЕТ ИЗ НАБОРА ЗНАЧЕНИЙ В МАССИВ.
// SPREAD НАОБОРОТ МАССИВ В НАБОР ЗНАЧЕНИЙ.

/* 
    ДЕСТРУКТУРИЗАЦИЯ.
    Можно присвоить массив или обьект сразу нескольким переменным, разбив его на части.
*/

// let arr0 = [1, 2, 3, 4, 5];
// let a = arr0[0];
// let b = arr0[1];
// console.log(a, b); = 1 2.

// ПРИ ПОМОЩИ ES6.
let arr0 = [14, 27, 3, 4, 5];
let [a, b, c] = arr0;
console.log(a); // 14
console.log(b); // 27
console.log(c); // 3
// И ТАК ДАЛЕЕ

 

/* 
    ДЕСТРУКТУРИЗАЦИЯ В ОБЬЕКТЕ
    Можно присвоить массив или обьект сразу нескольким переменным, разбив его на части.
*/

const user0 = {
    name: 'Sergey',
    country: 'Russia',
    gender: 'Male',
    printInfo: function(){
        console.log(`${this.name} живет в ${this.country}`);
    }
};

// АНАЛОГИЧНАЯ ЗАПИСЬ, НО ДЛИННЫЙ КОД.
const name1 = user0.name;
const name2 = user0.country;

// УДОБНОЕ ИСПОЛНЕНИЕ ДЕСТРУКТУРИЗАЦИИ.
// Тоже самое только с фигурными скобками работаем от обьекта.
const {name, country, gender, info} = user0;
console.log(name); // Sergey
console.log(country); // Russia
console.log(gender); // Male

// ХОТЕЛИ ВЫВЕСТИ INFO КАК МЕТОД.
console.log(info); // undefined.
// Так было бы раньше.
user0.printInfo();

