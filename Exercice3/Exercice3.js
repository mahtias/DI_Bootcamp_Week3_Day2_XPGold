
//initialisation d'un tableau
var shoppingList=[]
// Créez un formulaire contenant : 
let form= document.createElement('form')
let root = document.querySelector('#root')
 root.appendChild(form)

//  un champ de saisie de texte 
let input = document.createElement('input')
form.appendChild(input)

// ajout d'un bouton « AddItem »
 let AddItem = document.createElement('button')
 AddItem.textContent='AddItem'//ajoute le nom AddItem a la balise button
 form.appendChild(AddItem)

 //ajout article via le declencheur d'evenement
 AddItem.addEventListener('click', e =>{
    e.preventDefault()
    Shop = input.value
    if (Shop == '') {
        alert('error')
        return     
    }
        shoppingList.push(Shop)
        console.log(shoppingList)
        input.value = '';
})
//rq manipulation DOM et tableau js

// ajout d'un bouton « clearAll »
let clearAll  = document.createElement('button')
clearAll.textContent='clearAll'
form.appendChild(clearAll)


 //Suppression d'un article via le declencheur d'evenement
 clearAll.addEventListener('click', e =>{
    e.preventDefault()
    //effacer le contenud'un tableau
    shoppingList=[]
    console.log(shoppingList)
})