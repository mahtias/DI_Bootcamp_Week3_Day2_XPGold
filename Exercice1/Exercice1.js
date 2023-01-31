// Affiche la valeur de l'option sélectionnée
const dropdown = document.getElementById('genres')
console.log(dropdown.value)
// Create the new option element
const newOption = document.createElement("option");
newOption.value = 'classic';
newOption.textContent = 'Classic';
// Add the new option element to the select tag
dropdown.add(newOption)
// Add the new option element to the select tag
dropdown.value = 'classic';
