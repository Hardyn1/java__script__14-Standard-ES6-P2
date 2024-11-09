// 'use strict'; ИСПОЛЬЗОВАТЬ СТРОГИЙ РЕЖИМ В НАШЕМ КОДЕ
// Заставляет код обрабатываться в строгим режиме.
// Помогает некоторые ошибки обрабатывать проще 

function foo2(a){
    console.log(a); // Ivan
    arguments[0] = 'Sergey';
    console.log(arguments); 
    console.log(a); // Поменялся на Sergey (при use strict Ivan)
};

foo2('Ivan', 'Marina', 'Oksana', 'Elena', 'Dima');

// ПРЕОБРАЗОВАТЬ ПСЕВДО МАССИВ В НАСТОЯЩИЙ МАССИВ
// Глобальный обьекь Array и метод from (в качестве параметра принимает псевдомассив)
function foo3(a){
    let newArr = Array.from(arguments);
    console.log(arguments); // Все значения что в псевдомассиве теперь в обычном массиве
    console.log(newArr);
}

// СТРЕЛОЧНАЯ ФУНКЦИЯ
// const foo4 = a => {
//     console.log(arguments);
// }

// foo3(1, 2, 3, 4);
// foo4(1, 2, 3, 4); // arguments is not defined (С трелочной функцией arguments не работает)