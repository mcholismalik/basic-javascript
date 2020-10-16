const ditambah = (a, b) => {
  return a + b
}

const dikurang = (a, b) => {
  return a - b
}

const dibagi = (a, b) => {
  return a / b
}

const deskripsi = (a, b, tipe, hasil) => {
  const deskripsiHasil = `${a} ${tipe} ${b} hasilnya adalah ${hasil}`
  return deskripsiHasil
}

const angkaPertama = 20
const angkaKedua = 10
const hasil = dibagi(angkaPertama, angkaKedua)

const deskripsiHasil = deskripsi(angkaPertama, angkaKedua, 'dibagi', hasil)

console.log(deskripsiHasil)