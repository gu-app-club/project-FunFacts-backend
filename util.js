
/**
 * Randomly picks an item from a list
 * @return a single item
 */
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

module.exports = {
  pickRandom: pickRandom
}
