export function minBy(array, cb) {
  let temp = array[0]
  if (array.length) {
    for (let element of array) {
      if (cb(temp) > cb(element)) {
        temp = element
        console.log(temp);
      }
    }
    return temp
  }else{
    return undefined
  }
}

export function maxBy(array, cb) {
  let temp = array[0]
  if (array.length) {
    for (let element of array) {
      if (cb(temp) < cb(element)) {
        temp = element
        console.log(temp);
      }
    }
    return temp
  }else{
    return undefined
  }
}
