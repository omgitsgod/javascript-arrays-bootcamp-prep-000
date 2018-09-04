var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(arr, ell) {
  return [ell, ...arr]
}
function destructivelyAddElementToBeginningOfArray(arr, ell) {
  arr.unshift(ell)
  return arr
}

function addElementToEndOfArray(arr, ell) {
  return [...arr, ell]
}

function destructivelyAddElementToEndOfArray(arr, ell) {
  arr.push(ell)
  return arr
}

function accessElementInArray(arr, ind) {
  return arr[ind]
}

function destructivelyRemoveElementFromBeginningOfArray(arr, ell) {
  arr. 
}