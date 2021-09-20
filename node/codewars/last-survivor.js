function lastSurvivor(letters, coords) {

  if (0 == coords.length) {
    return letters
  }

  const charList = letters.split('')

  console.log(charList, coords)

  while (coords.length > 0) {
    const index = coords.shift()
    const itemsToRemove = 1
    charList.splice(index, itemsToRemove)

    //DEBUG
    console.log(charList, coords)
  }

  console.log("done", charList, coords)

  return charList[0]
}

console.log('last survivor:', lastSurvivor("abc", [1, 1]))