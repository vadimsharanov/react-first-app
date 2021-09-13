
function divCreate(text) {
    let div = document.createElement("div")
    let textNode = document.createTextNode(text)
    div.appendChild(textNode)
    return div
}
const addClass = (element, className) => {
    element.classList.add(className)
}
const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

const niceCreateDivText = (text, className) => {
    const div = divCreate(text);
    addClass(div, className);
    return div;
}

// animals.forEach(oneAnimal => {
//     const div = niceCreateDivText(oneAnimal, "grozis")
//     root.appendChild(div) 
// })


const booksTypes = '[{"id":1,"title":"Gro\u017ein\u0117 literat\u016bra"},{"id":2,"title":"Populiarioji psichologija"},{"id":3,"title":"Literat\u016bra vaikams ir jaunimui"},{"id":4,"title":"Pom\u0117giai"},{"id":5,"title":"\u0160eima, sveikata"},{"id":6,"title":"Literat\u016bra u\u017esienio kalbomis"},{"id":7,"title":"Dalykin\u0117 literat\u016bra"},{"id":8,"title":"Vadov\u0117liai, pratybos ir knygos mokslams"}]';
const booksTypesParsed = JSON.parse(booksTypes)
// booksTypesParsed.forEach(book => {
//     const div = niceCreateDivText(book.title, 'grozis');
//     root.appendChild(div)
// })

fetch('https://in3.dev/knygos/types/')
  .then(response => response.json())
  .then(data => data.forEach(oneData => { 
    const div = niceCreateDivText(oneData.title, "grozis");
    root.appendChild(div)
}))
async function fetchMovies() {
    const response = await fetch('https://in3.dev/knygos/types/');
    // waits until the request completes...
    console.log(response);
  }
