const MySet = require("./../solution/index");

describe("Set class", () => {
  const set = new MySet([2, 5, 5, 5, 6, 8, 13, 8]);

  test("Создает множество уникальных значений", () => {
    expect(set.value).toEqual([2, 5, 6, 8, 13]);
    expect(set.size).toEqual(5);
  });

  test("Добавляет только уникальные значения", () => {
    set.add(8);
    set.add(18);
    expect(set.value).toEqual([2, 5, 6, 8, 13, 18]);
    expect(set.size).toEqual(6);
  });

  test("Удаляет значение и возвращает true если найдено", () => {
    expect(set.delete(2)).toEqual(true);
    expect(set.size).toEqual(5);
  });

  test("При удалении возварщает false, если значение не найдено", () => {
    expect(set.delete(9)).toEqual(false);
    expect(set.size).toEqual(5);
  });

  test("Проверяет наличие значения в множестве", () => {
    expect(set.delete(9)).toEqual(false);
    expect(set.delete(8)).toEqual(true);
  });

  test("Добавляет значения по цепочке вызовов", () => {
    set.add(18).add(19).add(20);
    expect(set.value).toEqual([5, 6, 13, 18, 19, 20]);
  });

  test("Проверяет к какому классу принадлежит объект", () => {
    expect(Object.prototype.toString.call(set)).toEqual("[object ^_^]");
  });

  test("Очищает множество методом clear", () => {
    set.clear();
    expect(set.size).toEqual(0);
  });
});
