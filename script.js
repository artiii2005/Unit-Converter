let inputEl = document.getElementById("inputEl")
let convertBtn = document.getElementById("convert-btn")

/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let metersToFeet = document.getElementById("meters-feet")
let litersToGallon = document.getElementById("liters-gallon")
let kilogramsToPounds = document.getElementById("kilograms-pounds")
let kilometersToMiles = document.getElementById("kilometers-miles")

convertBtn.addEventListener("click", function() {
    let inputValue = parseFloat(inputEl.value)

    metersToFeet.textContent = "Feet: " + (inputValue * 3.281).toFixed(2);

    litersToGallon.textContent = "Gallons: " + (inputValue * 0.264).toFixed(2);

    kilogramsToPounds.textContent = "Pounds: " + (inputValue * 2.204).toFixed(2);

    kilometersToMiles.textContent = "Miles: " + (inputValue / 1.609).toFixed(2);
})