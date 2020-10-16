class TodoList {
  constructor(data) {
    Object.assign(this, data)
  }

  showAllByMap() {
    console.log(`Hasil by map`)
    this.arrayTodos.map(v => {
      console.log(`Hari ${v.day}, jam ${v.time}, harus ${v.title}`)
    })
  }

  showAllByFor() {
    console.log(`Hasil by for`)
    for (let i = 0; i < this.arrayTodos.length; i++) {
      console.log(`Hari ${this.arrayTodos[i].day}, jam ${this.arrayTodos[i].time}, harus ${this.arrayTodos[i].title}`)
    }    
  }

  filterByDay(day) {
    const filter = this.arrayTodos.filter(v => v.day === day)
    
    if (filter.length === 0) {
      console.log(`Tidak ada todo di hari ${day}`)
    } else {
      filter.map(v => {
        console.log(`Hari ${v.day}, jam ${v.time}, harus ${v.title}`)  
      })
    }
  }
}

const arrayTodos = [
  {
    title: 'Baca Al Kahfi',
    day: 'Jumat',
    time: '05:00'
  },
  {
    title: 'Belajar Javascript',
    day: 'Kamis',
    time: '20:00'
  },
  {
    title: 'Majelis Al Badr',
    day: 'Minggu',
    time: '18:00'
  }
]
const obj = { arrayTodos: arrayTodos }
const todoList = new TodoList(obj)

const day = 'Senin'
todoList.filterByDay(day)