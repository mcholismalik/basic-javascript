/**
 * If else
 */

const a = 5
const b = 10
const tipe = 'laskjdf'

let hasil = 0
if (tipe == 'dikali') {
  hasil = a * b
} 
if (tipe == 'ditambah') {
  hasil = a + b
}

const deskripsiHasil = `${a} ${tipe} ${b} hasilnya adalah ${hasil}`
console.log(deskripsiHasil)