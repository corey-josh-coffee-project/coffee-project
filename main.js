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
    for(var i = coffees.length - 1; i >= 0; i--) {
        outterDiv.appendChild(renderCoffee(coffees[i]));
    }
    return outterDiv;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    let selectedRoast = roastSelection.value;
    let filteredCoffees = [];
    if (selectedRoast === "all") {
        while (coffeeDiv.firstChild) {
            coffeeDiv.removeChild(coffeeDiv.firstChild);
        }
        coffeeDiv.appendChild(renderCoffees(coffees.reverse()));
    } else {
        coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            }
        });
    }

    while (coffeeDiv.firstChild) {
        coffeeDiv.removeChild(coffeeDiv.firstChild);
    }
    coffeeDiv.appendChild(renderCoffees(filteredCoffees));
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


let submitButton = document.querySelector('#submit');
let roastSelection = document.querySelector('#roast-selection');

coffeeDiv.appendChild(renderCoffees(coffees.reverse()));
// coffeeDiv.innerHTML = `${renderCoffees(coffees.reverse())}`;


submitButton.addEventListener('click', updateCoffees);
