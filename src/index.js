module.exports = function check(str, bracketsConfig) {
  // your solution
  let mass =[]
  for (let i = 0; i < bracketsConfig.length;) {
    mass = bracketsConfig[i].join('')
    if (str.includes(mass)) {
      str = str.replace(mass, '')
      i = 0
    } else {
      i++
    }
  }
  if (str) {
    return false;
} else {
    return true;
}


}
