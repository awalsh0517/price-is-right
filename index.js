
const calculate = (item) => ({
  ...item,
  total: (Math.floor((((item.price) * (item.quantity)) * (1 - item.discount)) * 100) / 100)
})



function calculateTotal(items) {
  const expected = items.map(calculate)

  return expected
  // const total = items.map((item => ((item.price) * (item.quanity)) * (1 - item.discount)))
  // const filtered = items.filter((newArray) => newArray.price && newArray.quantity && newArray.discount)

  // need map function to change totals
  // need a function to calculate total= (price * 2) * 1- discount
}
module.exports = calculateTotal

