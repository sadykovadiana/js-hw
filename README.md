# Домашнее задание ШРИ: Продвинутый JS

Написание кастомного класса, который работает как ES6 множество
solution/index.js

## Описание класса

**Свойства**<br />
value - список уникальных значений<br />
size - длина списка<br />
**Методы**<br />
Методы перебора for...of, keys(), values(), entries()<br />
clear - очищение множества<br />
add - добавление нового элемента в список, если оно не было добавлено ранее, возварщает полученное в итоге множество<br />
delete - удаляет значение и возвращает true, если значение было найдено, иначе false<br />
has - возвращает true/false в зависимости, если есть значение в множестве или нет<br />
forEach - вызывает колбек функцию для значений множества<br />

## Тесты

    Запуск тестов `npm test`
