const { selectionSort, insertionSort } = require("./sorting");

describe("Sorting algorithms must sort a list of numbers", () => {
  test("Selection Sort", () => {
    const list = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 40)
    );

    const sortedList = selectionSort(list);
    list.sort((a, b) => a - b);
    expect(sortedList).toEqual(list);
  });

  test("Insertion Sort", () => {
    const list = Array.from({ length: 10 }, () =>
      Math.floor(Math.random() * 40)
    );

    const sortedList = insertionSort(list);
    list.sort((a, b) => a - b);
    expect(sortedList).toEqual(list);
  });
});
