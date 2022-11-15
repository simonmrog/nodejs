function selectionSort(list) {
  const newList = [...list];

  function swap(index1, e1, index2, e2) {
    newList[index1] = e2;
    newList[index2] = e1;
  }

  for (let i = 0; i < newList.length - 1; i++) {
    let indexFound = i;
    let smallestElement = newList[i];
    for (let j = i + 1; j < newList.length; j++) {
      if (newList[j] < smallestElement) {
        smallestElement = newList[j];
        indexFound = j;
      }
    }
    swap(i, newList[i], indexFound, smallestElement);
  }
  return newList;
}

module.exports = {
  selectionSort,
};
