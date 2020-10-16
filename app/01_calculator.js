/**
 * Function
 */
const deskripsi = (a, b, tipe, hasil) => {
  return `${a} ${tipe} ${b} hasilnya adalah ${hasil}`
}

const calculator = (a, b, tipe) => {
  let hasil
  if (tipe == '+') hasil = a + b
  if (tipe == '-') hasil = a - b
  if (tipe == '*') hasil = a * b
  if (tipe == '/') hasil = a / b

  const deskripsiHasil = deskripsi(a, b, tipe, hasil)
  return deskripsiHasil
}

/**
 * Execute
 */
const a = 10
const b = 70
const tipe = '*' // +, -, *, /
const hasil = calculator(a, b, tipe)
console.log(hasil)







