/*
    ИЗМЕНЕНИЯ В ОБЬЕКТАХ.
*/

/*
    OBJECT.KEYS()
    Возвращает массив из собственных перечисляемых свойств переданного оюьекта.
*/

const user01 = {
    name: 'Artem',
    country: 'Russia',
    age: 28,
    position: 'Designer'
}

// РАНЬШЕ БЫЛ МЕТОД FOR IN ЧТОБЫ ПОЛУЧИТЬ КЛЮЧИ ИЛИ ЗНАЧЕНИЯ КЛЮЧЕЙ ОБЬЕКТА.

// ТЕПЕРЬ OBJECT.KEYS() ПОЛУЧАЕМ МАССИВ И ПОТОМ В НЕМ ТОЖЕ ПРИДЕТСЯ ПРОБЕЖАТЬСЯ.
console.log(Object.keys(user01)); // ['name', 'country', 'age', 'position']
console.log(Object.values(user01)); // ['Artem', 'Russia', 28, 'Designer']

// СТРЕЛОЧНЫЕ ФУНКЦИИ ВНУТРИ ОБЬЕКТАХ.!
const cat = {
    name: 'Murka',
    // Метод кушать старый метод
    // eat : function(){
    // }
    // НОВЫЙ МЕТОД.
    eat : () => `${this.name} want eat`
}

let method = cat.eat();
console.log(method); // i can eat. // want eat стрелочная функция не поняла контекста в i can eat.
// СТРЕЛОЧНАЯ ФУНКЦИЯ НЕ ПОНИМАЕТ КОНТЕКТСА И ОБРАЩАЕТСЯ К ГЛОБАЛЬНОМУ.

// ДИНАМИЧЕСКИЕ КЛЮЧИ.
const user02 = {
    // ПРОИЗОШЛА ДИНАМИКА 2 СТРОКИ СКЛЕИЛИСЬ ИЛИ КЛЮЧИ (КОНКОТЕНАЦИЯ) - И ВЫВЕЛО ALEX.
    ['first' + 'Name']: 'Alex'
}

// ПОЛУЧИЛИ СВОЙСТВО В ОБЬЕКТЕ.
console.log(user02.firstName); // Alex.

/*
    OBJECT ASSIGN()
    Обьединить несколько обьектов
*/

const obj1 = {
    a: 1,
    b: 2,
}

const obj2= {
    c: 3,
    d: 4,
}

// Чтобы обьекты не склеивались то аргументом в начало можно вставить {},
let newObj = Object.assign({},obj1, obj2);
console.log(newObj); // a: 1, b: 2, c: 3, d: 4}
console.log(obj1);
console.log(obj2);