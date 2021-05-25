"use strict"

let coffeeDiv = document.getElementById("coffees")

function renderCoffee(coffee) {
    let div = document.createElement("div");
    div.setAttribute("class", "coffee")
    div.innerHTML =
        `<p><span>${coffee.name}</span> ${coffee.roast}</p>`
    return div;
}

function renderCoffees(coffees) {
    let outterDiv = document.createElement("div");
    for (var i = coffees.length - 1; i >= 0; i--) {
        outterDiv.appendChild(renderCoffee(coffees[i]));
    }
    return outterDiv;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let inputCoffee = coffeeInput.value;
    console.log(selectedRoast)
    let matchRoastArr = [];
    let matchInputArr = [];
    coffees.forEach(function (coffee) {
        if (coffee.roast.toLowerCase() === selectedRoast.toLowerCase()) {
            matchRoastArr.push(coffee);
        }
    });
    if (matchRoastArr.length === 0) {
        replaceCoffees(coffees);
    } else {
        replaceCoffees(matchRoastArr)
    }


    if (inputCoffee) {
        matchRoastArr.forEach(function (coffee) {
            if (coffee.name.toLowerCase().includes(inputCoffee.toLowerCase())) {
                matchInputArr.push(coffee);
            }
        })
        replaceCoffees(matchInputArr);
    }
}

function replaceCoffees(coffeeArr) {
    while (coffeeDiv.firstChild) {
        coffeeDiv.removeChild(coffeeDiv.firstChild);
    }
    coffeeDiv.appendChild(renderCoffees(coffeeArr));
}


// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
let coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];


let roastSelection = document.querySelector('#roast-selection');
let coffeeInput = document.getElementById("pick-coffee");
let submitForCoffee = document.querySelector("#coff-submit");

coffeeDiv.appendChild(renderCoffees(coffees.reverse()));

roastSelection.addEventListener("change", updateCoffees);
coffeeInput.addEventListener("input", updateCoffees);
submitForCoffee.addEventListener("click", updateCoffees);