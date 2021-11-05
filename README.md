# Домашнее задание ШРИ: Продвинутый JS

Написание кастомного класса, который работает как ES6 множество
solution/index.js

## Описание класса

_Свойства_
value - список уникальных значений
size - длина списка
_Методы_
Методы перебора for...of, keys(), values(), entries()
clear - очищение множества
add - добавление нового элемента в список, если оно не было добавлено ранее, возварщает полученное в итоге множество
delete - удаляет значение и возвращает true, если значение было найдено, иначе false
has - возвращает true/false в зависимости, если есть значение в множестве или нет
forEach - вызывает колбек функцию для значений множества

## Тесты

    Запуск тестов `npm test`