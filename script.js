const admins = document.querySelector(".admins");
const developers = document.querySelector(".developers");
const selectProfession = document.querySelector("select");
const filterButton = document.querySelector(".filter");
const toggleButton = document.querySelector(".toggle");

let employees = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];
// map returns a new array
employees = employees.map(changeAgeToNumber);
employees.forEach(increaseAge);
employees.forEach(addToList);

// using spread operator to copy
const employeesCopy = [...employees];

filterButton.addEventListener("click", filterByProfession);
toggleButton.addEventListener("click", changeTheme);
function changeAgeToNumber(employee) {
  // not changing original object of the array (doesn't modify original object / mutate)
  return { ...employee, age: Number(employee.age) };
}
function increaseAge(employee) {
  if (employee.name == "john") {
    // modifies the object of the array
    employee.age = 19;
  }
}
function filterByProfession(event) {
  // reset
  developers.innerText = "";
  admins.innerText = "";
  let profession = selectProfession.value;

  if (profession == "") {
    alert("Please select a Profession to Filter");
    employees.forEach(addToList);
  } else if (profession == "developer") {
    // only show developers
    const allDevelopers = employees.filter(onlyDevelopers);
    allDevelopers.forEach(addToList);
  } else if (profession == "admin") {
    // only show admins
    const allAdmins = employees.filter(onlyAdmins);
    allAdmins.forEach(addToList);
  }
}
function addToList(employee) {
  let { name, profession, age } = employee;
  name = name[0].toUpperCase() + name.slice(1);
  profession = profession[0].toUpperCase() + profession.slice(1);

  let listElement = document.createElement("li");

  listElement.innerHTML = `<span>Name: ${name}</span><span>Profession: ${profession}</span><span>Age: ${age}</span>`;

  if (profession == "Admin") {
    // add to admin list
    admins.append(listElement);
  } else if (profession == "Developer") {
    // add to developer list
    developers.append(listElement);
  }
}
function onlyDevelopers(employee) {
  return employee.profession == "developer";
}
function onlyAdmins(employee) {
  return employee.profession == "admin";
}

function changeTheme(event) {
  document.body.classList.toggle("bg-light");
  document.body.classList.toggle("bg-dark");
}
