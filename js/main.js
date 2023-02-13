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
