function divCreate(text) {
    let root = document.getElementById("root");
    let div = document.createElement("div")
    root.appendChild(div)
    div.innerHTML =  `<h1>${text}</h1>`
}

const data = ['ccc', 'bbb', 'aaz'];;
data[1].charAt(2).charCodeAt
const sorting =  data.sort( function(a,b) {
    return a.charAt(2).toLowerCase().charCodeAt() - b.charAt(2).toLowerCase().charCodeAt()
  })
console.log(sorting);
for (const element of data) {
    divCreate(element)
}

const data2 = new Set(['Labas2', 'pats2', 'tu labas2']);

for (const item of data2) {
    divCreate(item)
}

const data3 = new Map([

    ['viens3', 'Labas3'],

    ['du3', 'pats3'],

    ['trys3', 'tu labas3']

]); 

for ( const item of data3) {
    divCreate(item)

}

const data4 = {

    viens: 'Labas',

    du: 'pats',

    trys: 'tu labas'

}

for (const [key, value] of Object.entries(data4)) {
    divCreate(`4${key}: ${value}`)
  }

