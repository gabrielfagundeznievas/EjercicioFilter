const people = [
  { name: "Hernan", lastname: "Banco", age: 22 },
  { name: "Elvie", lastname: "Jo", age: 78 },
  { name: "Elizabeth", lastname: "Joven", age: 19 },
  { name: "Gumercinda", lastname: "Albahaca", age: 94 },
  { name: "Francisca", lastname: "Goodman", age: 36 },
  { name: "Leandro", lastname: "Pinkman", age: 22 },
  { name: "Beige", lastname: "Amarillo", age: 17 },
  { name: "Rose", lastname: "Albarado", age: 65 },
];

const showList = (arr) => {
  const container = document.getElementById("list");
  container.innerHTML = "";
  for (let item of arr) {
    container.innerHTML += `<li>${item.name} ${item.lastname}</li>`;
  }
};

function filterBtn() { // Funcion para llamar en el contentLoaded
  const dontAccept = document.getElementById("dontAccept"); // constante para llamar al boton
  
  dontAccept.addEventListener("click", () => { // evento clic en el boton y funcion asignada para ejecutarse con el click
    let newArray = people.filter((element) => element.age >= 23); // crear un nuevo arreglo que filtre los elementos de people segun la edad

    showList(newArray); // listar los elementos de ese nuevo arreglo con la funcion dada en el ejercicio
  });
}

document.addEventListener("DOMContentLoaded", () => {
  showList(people);
  filterBtn();// Llamar a la funcion para que se ejecute el filtro de la lista
});
