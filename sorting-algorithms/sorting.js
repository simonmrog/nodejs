function swap(list, index1, e1, index2, e2) {
  list[index1] = e2;
  list[index2] = e1;
}

function selectionSort(list) {
  const orderedList = [...list];

  for (let i = 0; i < orderedList.length - 1; i++) {
    let indexFound = i;
    let smallestElement = orderedList[i];
    for (let j = i + 1; j < orderedList.length; j++) {
      if (orderedList[j] < smallestElement) {
        smallestElement = orderedList[j];
        indexFound = j;
      }
    }
    swap(orderedList, i, orderedList[i], indexFound, smallestElement);
  }
  return orderedList;
}

function insertionSort(list) {
  const orderedList = [...list];

  for (let i = 1; i < list.length; i++) {
    const temp = orderedList[i];
    let j = i - 1;
    while (j >= 0 && orderedList[j] > temp) {
      orderedList[j + 1] = orderedList[j];
      j--;
    }
    orderedList[j + 1] = temp;
  }

  return orderedList;
}

module.exports = {
  selectionSort,
  insertionSort,
};
