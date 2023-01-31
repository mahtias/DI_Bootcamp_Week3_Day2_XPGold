//recuperation des balises 
let removeInputs = document.querySelector('#colSelect')
var colorRemove = document.querySelector('#colorSelect')

//ajoute l'evement de suppression
removeInputs.addEventListener('click', e =>{
    e.preventDefault()

    //suprimer un elment selectionner par l'index
    colorRemove.remove(colorRemove.selectedIndex);
})