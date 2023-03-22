// Write a function that takes in the number of adults
// and returns the number of pizzas required to feed
// them. Assume 8 slices per pizza and 3 slices per
// adult.

// write function here...
function howManyPizzas(numAdults, numSlicesPerPerson) {
  // multiply numAdults by 3 (slices per adult) to get slices
  const slicesNeeded = numAdults * numSlicesPerPerson
  // divide num slicesNeeded by 8 (slices per pie)
  const piesNeeded = slicesNeeded / 8
  // now round UP to nearest pizza
  const numPizzas = Math.ceil(piesNeeded)
  return numPizzas
}

// call function here...
const ourNeed = howManyPizzas(26, 3)
console.log("We need " + ourNeed + " pizzas.")
