// Array extraño
const strangeArray = [
  function () {
    alert("Hola soy una función en un array");
  },
  22,
  null,
  undefined,
  "ola ke ase",
  "I'm programmer",
  -2000,
  "Hello world",
  `One is ${1}`,
  { name: "Info", lastname: "last info" },
  () => true,
  ["Hola mundo!"],
  "b",
];

function filterArray(arr){ // esto es lo mismo que "array.filter(elemnt => typeof elemnt === 'strinf)" es lo que usamos en la linea 39
  //Creamos nuevo arreglo para mostrar solo los elementos que queremos
  let newArray = [];

  // Iteramos el arreglo y comparamos el tipo de dato para agregarlo al nuevo arreglo
  for (element of arr){
    if(typeof element === 'string'){
      newArray.push(element);
    }
  }

  // Retornamos el nuevo arreglo
  return newArray;
}

function listarElemento() {
  const list = document.getElementById('list');

  // Cree el arreglo fitrado solo con los string
  let listArray = strangeArray.filter(element => typeof element === "string")
  //console.log(listArray);

  // Listamos los elementos del listArray en la lista del html
  for (element of listArray){
    list.innerHTML += `<li>${element}</li>`;
  }
}

document.addEventListener("DOMContentLoaded", listarElemento);