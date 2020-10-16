/**
 * For - basic
 */
// for (let i = 0; i < 9; i++) {
//   console.log(i)
// }

/**
 * For - object
 */
const arrayPhones = [
  {
    merk: 'vivo z1 pro',
    ram : '8gb',
    rom: '128gb',
    color: 'black'
  },
  {
    merk: 'iphone 8',
    ram : '4gb',
    rom: '256gb',
    color: 'white'
  },
  {
    merk: 'nokia',
    ram : '12gb',
    rom: '256gb',
    color: 'blue'
  }
]
// for (let i = 0; i < arrayPhones.length; i++) {
//   // console.log(`loop ke ${i}`)
//   console.log(`ada hp => ${arrayPhones[i].merk}`)
// }

/**
 * Map
 */
// arrayPhones.map((v, i) => {
//   console.log(`loop ke ${i}`)
//   console.log(`ada hp => ${v.merk}`)
// })

/**
 * While
 */
let i = 0
while (i < arrayPhones.length) {
  console.log(`loop ke ${i}`)
  console.log(`ada hp => ${arrayPhones[i].merk}`)
  i++
}

