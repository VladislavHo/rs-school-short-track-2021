/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arrIndex = [];
  arr.forEach((elem, index) => {
    if (elem === -1) {
      arrIndex.push(index);
    }
  });

  const deleteNum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      deleteNum.push(arr[i]);
    }
  }

  // sort
  const sortArr = deleteNum.sort((a, b) => a - b);

  for (let i = 0; i < arrIndex.length; i++) {
    sortArr.splice(arrIndex[i], 0, -1);
  }
  return sortArr;
}

module.exports = sortByHeight;
