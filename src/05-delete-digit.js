/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrN = [...n.toString()];
  const newN = [...n.toString()];
  arrN.sort((a, b) => a - b);
  const minNum = arrN.splice(0, 1);
  const indexDeleteNum = newN.indexOf(minNum.join(''));
  newN.splice(indexDeleteNum, 1);
  const answer = newN.join('');
  return +answer;
}

module.exports = deleteDigit;
