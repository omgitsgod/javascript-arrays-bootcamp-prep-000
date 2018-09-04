var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, ell) {
  return [ell, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, ell) {
  arr.unshift(ell)
  return arr
}