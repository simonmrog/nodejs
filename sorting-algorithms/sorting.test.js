const { selectionSort } = require("./selectionSort");

describe("Sorting algorithms must sort a list of numbers", () => {
  const list = Array.from({ length: 10 }, () => Math.floor(Math.random() * 40));

  test("Selection Sort", () => {
    const sortedList = selectionSort(list);
    list.sort((a, b) => a - b);
    expect(sortedList).toEqual(list);
  });
});
