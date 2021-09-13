const animals = ['Kiškis', 'Lapė', 'Anakonda', 'Sausumų vėplys', 'Bebras'];

// Naudojant forEach, atspausdinti visus gyvulius po vieną su console.log

// Išrūšiuoti gyvulis pagal pavadinimo ilgį, kad pirma eitų ilgiausią pavadinimą turintis gyvulys

// Su console.log išvesti masyvą prieš ir po rūšiavimo.

console.log("---spausdinimas----");
animals.forEach(gyvuliai => console.log(gyvuliai));
// spausdinimas
console.log('----');
const animals2 = animals
console.log("pries rusiavima");
console.log(animals);
const animalsSorting =  animals2.sort( function(a,b) {
    return b.length - a.length
  })
  console.log("po rusiavimo");
console.log(animals2);





