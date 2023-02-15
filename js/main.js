// const para = document.querySelector('.sure')

// para.addEventListener('click', () => console.log('yooo'))

function sameFrequency(num1, num2) {
  if (num1.toString().length !== num2.toString().length) return false
  const obj1 = {}
  const obj2 = {}
  for (let num of num1.toString()) {
    obj1[num] = (obj1[num] || 0) + 1
  }
  for (let num of num2.toString()) {
    obj2[num] = (obj2[num] || 0) + 1
  }

  for (let key in obj1) {
    if (!(key in obj2)) {
      return false
    }
    if (obj1[key] !== obj2[key]) {
      return false
    }
  }
  return true
}

console.log(sameFrequency(182, 281))

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minimum = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minimum]) {
        minimum = j
      }
    }
    if (minimum !== i) {
      let temp = arr[i]
      arr[i] = arr[minimum]
      arr[minimum] = temp
    }
  }
  return arr
}

console.log(selectionSort([5, 6, 2, 4]))

function flatten(arr) {
  let newArr = []
  if (arr.length === 0) {
    return newArr
  }
  if (!Array.isArray(arr[0])) {
    newArr.push(arr[0])
  } else {
    return (newArr = newArr.concat(flatten(arr.slice(1))))
  }
}

console.log(flatten([1, 2, 3, [4, 5]]))

// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     let currentVal = arr[i]
//     for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//       arr[j + 1] = arr[j]
//     }
//     arr[j + 1] = currentVal
//   }
//   return arr
// }

// console.log(insertionSort([3, 2, 5, 1]))

function insertionSort(arr) {
  var currentVal
  for (var i = 1; i < arr.length; i++) {
    currentVal = arr[i]
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j]
    }
    arr[j + 1] = currentVal
  }
  return arr
}

console.log(insertionSort([5, 4, 3, 2, 1]))
